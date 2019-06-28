import '@pefish/js-node-assist'
import BaseLogger from './base_logger'
import * as moment from 'moment'
import * as util from 'util'

export default class GcloudLogging extends BaseLogger {
  _name: string

  constructor (name) {
    super()
    this._name = name
  }

  debug (...msg) {
    global[`debug`] === true && console.log(JSON.stringify({
      message: util.inspect(msg),
      project: this._name,
      severity: `debug`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  info (...msg) {
    console.log(JSON.stringify({
      message: util.inspect(msg),
      project: this._name,
      severity: `info`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  warn (...msg) {
    console.log(JSON.stringify({
      ...this.getInfoFromStack(),
      message: util.inspect(msg),
      project: this._name,
      severity: `warn`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  error (...msg) {
    console.log(JSON.stringify({
      ...this.getInfoFromStack(),
      message: util.inspect(msg),
      project: this._name,
      severity: `error`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }
}
