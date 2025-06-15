module.exports = {
  ci: {
    collect: {
      numberOfRuns: 2,
      settings: {
        formFactor: 'desktop',
        preset: 'desktop',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'color-contrast': 'off',
        'csp-xss': 'off',
        'installable-manifest': 'off',
        'maskable-icon': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
        'unused-javascript': 'off',
        'max-potential-fid': 'off',
        'render-blocking-resources': 'off',
        'uses-rel-preload': 'off',
        'largest-contentful-paint': 'off',
        'first-meaningful-paint': 'off',
        'first-contentful-paint': 'off',
        'meta-description': 'off',
        'external-anchors-use-rel-noopener': 'off',
        'content-width': 'off',
        'valid-source-maps': 'off',
        'robots-txt': 'off',
        'cumulative-layout-shift': 'off',
        'uses-long-cache-ttl': 'off',
        'meta-viewport': 'off',
        'non-composited-animations': 'off',
        'uses-rel-preconnect': 'off',
      },
    },
  },
}
