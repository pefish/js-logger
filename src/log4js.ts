import * as log4js from 'log4js'
import BaseLogger from './base_logger'
import util from 'util'
export default class Log4js extends BaseLogger {
  _logger: log4js.Logger

  constructor (name: string = `default`, level: string = null) {
    super()
    level = level || (global[`debug`] === true ? `debug` : `info`)
    const category = name
    const appenders = {
      console: {
        type: 'console',
      },
    }
    const categories = {
      default: {
        appenders: ['console'],
        level,
      },
    }
    const config = {
      appenders,
      categories,
    }
    // 配置
    log4js.configure(config)
    this._logger = log4js.getLogger(category)
  }

  debug (...msg) {
    this._logger.debug(msg.map((m) => util.inspect(m, false, 10)).join(" "))
  }

  info (...msg) {
    this._logger.info(msg.map((m) => util.inspect(m, false, 10)).join(" "))
  }

  warn (...msg) {
    this._logger.warn(msg.map((m) => util.inspect(m, false, 10)).join(" "))
  }

  error (...msg) {
    this._logger.error(msg.map((m) => util.inspect(m, false, 10)).join(" "))
  }
}
