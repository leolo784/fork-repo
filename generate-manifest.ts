import { build } from 'plist'

const generateManifest = ({
  bundleId,
  version,
  appname,
  baseUrl,
  identifier,
}: {
  bundleId: string;
  version: string;
  appname: string;
  baseUrl: string;
  identifier: string;
}) => build({
  items: [{
    assets: [
      {
        kind: 'software-package',
        url: `${baseUrl}/${identifier}.ipa`,
      },
    ],
    metadata: {
      'bundle-identifier': bundleId,
      'bundle-version': version,
      kind: 'software',
      title: appname,
    },
  }],
})

export default generateManifest
