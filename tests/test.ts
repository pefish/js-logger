
import Log4js from '../src/log4js'
import * as util from "util";
import ErrorHelper from '@pefish/js-error'

const a = [`hsfghs`, new Error(`haha`)]

console.log(...a)
console.log(util.inspect(a))