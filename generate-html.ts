import { readFileSync } from 'fs'
import ejs from 'ejs'
import moment from 'moment'

const htmlTemplate = readFileSync(
  `${__dirname}/static/release-page.ejs`,
).toString()
const compile = ejs.compile(htmlTemplate)

const generateHtml = (opts: {
  identifier: string
  appname: string
  version: string
  baseUrl: string
  ios: boolean
  android: boolean
}): string =>
  compile({
    ...opts,
    time: moment().format('DD MMM, YYYY'),
  })

export default generateHtml
