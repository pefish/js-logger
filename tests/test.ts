
import { Log4js } from '../src/index'
import * as util from "util";
import TimeUtil from "@pefish/js-util-time"

const logger = new Log4js("aa", "./log/global", "info")

logger.info("123", "456", 789)
