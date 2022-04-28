import { copyFileSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import uuid from 'uuid'
import glob from 'glob'
import { exit } from 'process'
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
const aabPath = env.AAB_PATH
const iconPath = env.ICON_PATH
const identifier = uuid()

if (bundleId == null || appname == null || version == null || baseUrl == null) {
  console.warn('Missing configuration environment variable. Abort. ')
  exit(-1)
}

let ios = false
let android = false

mkdirSync(output, { recursive: true })
if (ipaPath) {
  const ipas = glob.sync(ipaPath)
  if (ipas.length === 0) {
    console.warn('No ipa file found with provided path', ipaPath)
  } else {
    if (ipas.length > 1) {
      console.log('Multiple ipa found. Using first one', ipas[0])
    }
    ios = true
    copyFileSync(ipas[0], path.join(output, `${identifier}.ipa`))
  }
}

if (apkPath) {
  const apks = glob.sync(apkPath)
  if (apks.length === 0) {
    console.warn('No apk file found with provided path', apkPath)
  } else {
    if (apks.length > 1) {
      console.log('Multiple apk found. Using first one', apks[0])
    }
    android = true
    copyFileSync(apks[0], path.join(output, `${identifier}.apk`))
  }
}

if (aabPath) {
  const aabs = glob.sync(aabPath)
  if (aabs.length === 0) {
    console.warn('No apk file found with provided path', aabPath)
  } else {
    if (aabs.length > 1) {
      console.log('Multiple apk found. Using first one', aabs[0])
    }
    android = true
    copyFileSync(aabs[0], path.join(output, `${identifier}.aab`))
  }
}

const opts = {
  bundleId,
  version,
  appname,
  baseUrl,
  identifier,
  ios,
  android,
  iconPath,
}

writeFileSync(path.join(output, `${identifier}.html`), generateHtml(opts))

if (ios) {
  writeFileSync(
    path.join(output, `${identifier}.plist`),
    generateManifest(opts),
  )
}

console.log('Done', opts)
