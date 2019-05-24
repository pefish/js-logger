import 'js-node-assist'
import * as assert from 'assert'
import Log4js from './log4js'
import TimeUtil from '@pefish/js-util-time'

describe('log4js', () => {

  let helper

  before(async () => {
    helper = new Log4js(`test`)
  })

  it('info', async () => {
    try {
      helper.info(`1111`, `2222`)
      await TimeUtil.sleep(4000)
    } catch (err) {
      global.logger.error(err)
      assert.throws(() => {}, err)
    }
  })
})
