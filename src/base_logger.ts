
export default class BaseLogger {
  getInfoFromStack (): object {
    let file = `not found`, func = `not found`, line = `not found`, col = `not found`
    let targetLine = null
    const a = {}
    Error.captureStackTrace(a)
    for (const line of a[`stack`].split(`\n`).removeFirstOne()) {
      if (!line.includes(`node/helpers/logger/gcloud_logging.js`) && !line.includes(`node/helpers/logger/base_logger.js`)) {
        targetLine = line
        break
      }
    }
    if (targetLine !== null) {
      func = targetLine.match(/at (.*) \(/)[1]
      file = targetLine.match(/\((\/.*?):/)[1]
      line = targetLine.match(/:(.*?):/)[1]
      col = targetLine.match(/:.{0,5}:(.*?)\)/)[1]
    }
    return {
      file,
      func,
      line,
      col
    }
  }
}
