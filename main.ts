import { copyFileSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import uuid from 'uuid'
import generateHtml from './generate-html'
import generateManifest from './generate-manifest'

const { env } = process

const output = path.join(__dirname, 'out')

const bundleId = env.BUNDLE_ID
const version = env.VERSION
const appname = env.APPNAME
const baseUrl = env.BASE_URL
const ipaPath = env.IPA_PATH
const apkPath = env.APK_PATH
const identifier = uuid()

const ios = !!ipaPath
const android = !!apkPath

const opts = {
  bundleId,
  version,
  appname,
  baseUrl,
  identifier,
  ios,
  android,
}

mkdirSync(output, { recursive: true })
if (ipaPath) copyFileSync(ipaPath, path.join(output, `${identifier}.ipa`))
if (apkPath) copyFileSync(apkPath, path.join(output, `${identifier}.apk`))

writeFileSync(path.join(output, `${identifier}.html`), generateHtml(opts))

if (ios) {
  writeFileSync(path.join(output, `${identifier}.plist`), generateManifest(opts))
}

console.log('Done', opts)
