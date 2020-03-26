import * as assert from 'assert'
import Log4js from './log4js'
import TimeUtil from '@pefish/js-util-time'
import ErrorHelper from '@pefish/js-error';
import util from 'util'

describe('log4js', () => {

  let helper

  before(async () => {
    helper = new Log4js(`test`)
  })

  it('info', async () => {
    try {
      helper.info(`1111`, `2222`)
      helper.error(`221`)
      helper.error(new ErrorHelper(`123`))
      await TimeUtil.sleep(4000)
    } catch (err) {
      global.logger.error(err)
      assert.throws(() => {}, err)
    }
  })
})
