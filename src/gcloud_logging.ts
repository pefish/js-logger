import 'js-node-assist'
import BaseLogger from './base_logger'
import * as moment from 'moment'

export default class GcloudLogging extends BaseLogger {
  _name: string

  constructor (name) {
    super()
    this._name = name
  }

  debug (msg) {
    global[`debug`] === true && console.log(JSON.stringify({
      message: msg,
      project: this._name,
      severity: `debug`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  info (msg) {
    console.log(JSON.stringify({
      message: msg,
      project: this._name,
      severity: `info`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  warn (msg) {
    if (msg instanceof Error) {
      msg = {
        name: msg.name,
        message: msg.message,
        stack: msg.stack,
      }
    }
    console.log(JSON.stringify({
      ...this.getInfoFromStack(),
      message: msg,
      project: this._name,
      severity: `warn`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }

  error (msg) {
    if (msg instanceof Error) {
      msg = {
        name: msg.name,
        message: msg.message,
        stack: msg.stack,
      }
    }

    console.log(JSON.stringify({
      ...this.getInfoFromStack(),
      message: msg,
      project: this._name,
      severity: `error`,
      time: moment.utc(new Date()).toISOString(true),
    }))
  }
}
