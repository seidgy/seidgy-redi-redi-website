#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";

import { WebsiteInfraStack } from "../lib/website-infra-stack";
import "dotenv/config";

const app = new cdk.App();

const stage = process.env.CDK_STAGE;
const zoneDomain = process.env.CDK_APP_ROUTE53_ZONE_DOMAIN ?? "";
const alternateZoneDomains =
  process.env.CDK_APP_ROUTE53_ALTERNATE_ZONE_DOMAINS?.trim().length
    ? process.env.CDK_APP_ROUTE53_ALTERNATE_ZONE_DOMAINS?.split(",")
    : undefined;
let domainNames = process.env.CDK_APP_DOMAINS?.split(",") ?? [
  `website-${stage}.${zoneDomain}`,
  `*.website-${stage}.${zoneDomain}`,
];
const staticFilesPath =
  process.env.CDK_STATIC_FILES_PATH ?? "../.output/public";
const serverFilesPath =
  process.env.CDK_SERVER_FILES_PATH ?? "../.output/server";
const responseHeadersPolicyId = process.env.CDK_APP_RESPONSE_HEADERS_POLICY_ID;
const customCertificateArn = process.env.CDK_APP_CUSTOM_CERTIFICATE_ARN;

if (!stage) {
  throw new Error(
    "Stage not provided, please set it on the env var 'CDK_STAGE'."
  );
}

if (!zoneDomain) {
  throw new Error(
    "Zone domain not provided, please set it on the env var 'CDK_APP_ROUTE53_ZONE_DOMAIN'."
  );
}

domainNames = domainNames.filter((domainName) => domainName.length);

if (!domainNames.length) {
  throw new Error(
    "Domain names not provided, either set it on the env var 'CDK_APP_DOMAINS' or do not set this env var and the domain names will be generated automatically."
  );
}

new WebsiteInfraStack(app, `WebsiteStack-${stage}`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  stage,
  zoneDomain,
  alternateZoneDomains,
  domainNames,
  staticFilesPath,
  serverFilesPath,
  responseHeadersPolicyId,
  customCertificateArn,
});
