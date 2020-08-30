
import { Log4js } from '../src/index'
import * as util from "util";
import TimeUtil from "@pefish/js-util-time"

const logger = new Log4js("aa", "./log/global", "info")

TimeUtil.setInterval(async () => {
  logger.error("adad")
  try {
    throw new Error("524352")
  } catch (err) {
    logger.error(util.inspect(err, false, 10))
    // await Dingding.sendText(config.dingdingUrl, util.inspect(err, false, 10), [], true, true)
  }
}, 1000, true)
