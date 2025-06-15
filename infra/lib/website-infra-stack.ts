import {
  App,
  Duration,
  Stack,
  StackProps,
  aws_certificatemanager,
  aws_cloudfront,
  aws_lambda,
  aws_route53,
} from "aws-cdk-lib";
import "dotenv/config";
import { copyFileSync, readdirSync } from "fs";
import { NuxtWebsite } from "./nuxt-website-constructor";

export interface WebsiteInfraStackProps extends StackProps {
  readonly stage: string;
  readonly zoneDomain: string;
  readonly alternateZoneDomains?: string[];
  readonly domainNames: string[];
  readonly staticFilesPath: string;
  readonly serverFilesPath: string;
  readonly responseHeadersPolicyId?: string;
  readonly customCertificateArn?: string;
}

export class WebsiteInfraStack extends Stack {
  constructor(scope: App, id: string, props?: WebsiteInfraStackProps) {
    super(scope, id, props);

    if (!props) {
      throw new Error("WebsiteInfraStack props not provided");
    }

    const isReviewEnv = props.stage !== "prod" && props.stage !== "dev";
    const isProd = props.stage === "prod";

    const hostedZone = aws_route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName: props.zoneDomain,
    });

    const alternateHostedZones = props.alternateZoneDomains?.map(
      (alternateZoneDomain) => {
        return aws_route53.HostedZone.fromLookup(
          this,
          `AltHostedZone-${alternateZoneDomain}`,
          {
            domainName: alternateZoneDomain,
          }
        );
      }
    );

    copyFileSync(
      "./static/wrapper.mjs",
      `${props.serverFilesPath}/wrapper.mjs`
    );

    const nuxtHandlerFunction = new aws_cloudfront.experimental.EdgeFunction(
      this,
      `${id}-NuxtHandler`,
      {
        runtime: aws_lambda.Runtime.NODEJS_18_X,
        handler: "wrapper.handler",
        code: aws_lambda.Code.fromAsset(props.serverFilesPath),
        timeout: Duration.seconds(30),
        memorySize: 512,
      }
    );

    let certificate: aws_certificatemanager.ICertificate | undefined =
      undefined;

    if (props.customCertificateArn) {
      certificate = aws_certificatemanager.Certificate.fromCertificateArn(
        this,
        "CustomCert",
        props.customCertificateArn
      );
    }

    const nuxtWebsite = new NuxtWebsite(this, `${id}-Website`, {
      hostedZone,
      alternateHostedZones,
      priceClass: isReviewEnv
        ? aws_cloudfront.PriceClass.PRICE_CLASS_100
        : aws_cloudfront.PriceClass.PRICE_CLASS_ALL,
      domainNames: props.domainNames,
      certificate,
      source: props.staticFilesPath,
      edgeLambdas: [
        {
          functionVersion: nuxtHandlerFunction.currentVersion,
          eventType: aws_cloudfront.LambdaEdgeEventType.ORIGIN_REQUEST,
        },
      ],
      cachePolicy: aws_cloudfront.CachePolicy.CACHING_DISABLED,
      defaultRootObject: "/",
      responseHeadersPolicyId: props.responseHeadersPolicyId,
      securityHeadersBehavior: aws_cloudfront.ResponseHeadersPolicy.SECURITY_HEADERS,
      customHeaders: isProd
        ? undefined
        : [
            {
              header: "X-Robots-Tag",
              value: "noindex, nofollow",
              override: true,
            },
          ],
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          ttl: Duration.seconds(300),
          responsePagePath: "/",
        },
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          ttl: Duration.seconds(300),
          responsePagePath: "/",
        },
      ],
    });

    const staticPaths = readdirSync(props.staticFilesPath, {
      withFileTypes: true,
    }).flatMap((directoryEntry) => {
      if (directoryEntry.name === "api" && directoryEntry.isDirectory()) {
        // Skip the 'api' directory as it is not a static path but might appear as one due to Nuxt Content files.
        return [];
      }

      return directoryEntry.isDirectory() ? [`${directoryEntry.name}/*`] : [directoryEntry.name];
    });

    staticPaths.forEach((pathPattern) => {
      nuxtWebsite.distribution.addBehavior(pathPattern, nuxtWebsite.origin, {
        viewerProtocolPolicy:
          aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      });
    });
  }
}
