import BaseLogger from './base_logger'
import * as moment from 'moment'
import * as util from 'util'

export default class GcloudLogging extends BaseLogger {
  _name: string
  level: string

  constructor (name: string = `default`, level: string = null) {
    super()
    this._name = name
    this.level = level || (global[`debug`] === true ? `debug` : `info`)
  }

  debug (...msg) {
    [`debug`].includes(this.level) && console.log(JSON.stringify({
      message: util.inspect(msg),
      project: this._name,
      severity: `debug`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  info (...msg) {
    [`debug`, `info`].includes(this.level) && console.log(JSON.stringify({
      message: util.inspect(msg),
      project: this._name,
      severity: `info`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  warn (...msg) {
    [`debug`, `info`, `warn`].includes(this.level) && console.log(JSON.stringify({
      ...this.getInfoFromStack(),
      message: util.inspect(msg),
      project: this._name,
      severity: `warn`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  error (...msg) {
    [`debug`, `info`, `warn`, `error`].includes(this.level) && console.log(JSON.stringify({
      ...this.getInfoFromStack(),
      message: util.inspect(msg),
      project: this._name,
      severity: `error`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }
}
