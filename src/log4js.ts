import * as log4js from 'log4js'
import BaseLogger from './base_logger'

export default class Log4js extends BaseLogger {
  _logger: any

  constructor (name: string = `default`, logfilePath: string = null, level: string = null) {
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
    logfilePath = logfilePath || process.env[`NODE_LOG`]
    if (logfilePath) {
      const appenderName = `${category}_log`
      // 文件输出
      if (logfilePath.substr(logfilePath.length - 1, 1) !== '/') {
        logfilePath += '/'
      }
      appenders[appenderName] = {
        type: 'dateFile',
        filename: logfilePath + category + '.log',
        pattern: 'yyyy-MM-dd',
        compress: true
      }
      categories[category] = {
        appenders: [appenderName, 'console'],
        level,
      }
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
    this._logger.debug(...msg)
  }

  info (...msg) {
    this._logger.info(...msg)
  }

  warn (...msg) {
    this._logger.warn(...msg)
  }

  error (...msg) {
    this._logger.error(...msg)
  }
}
