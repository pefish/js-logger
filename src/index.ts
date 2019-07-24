declare global {
  namespace NodeJS {
    interface Global {
      logger: any,
    }
  }
}
import GcloudLogging from './gcloud_logging'
import Log4js from './log4js'

export {
  GcloudLogging,
  Log4js
}
