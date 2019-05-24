
import Log4js from '../src/log4js'

const logger = new Log4js(`test`, `./log`)

logger.error(333)
