import 'js-node-assist'
import GcloudLogging from './gcloud_logging'

describe('GcloudLogging', () => {

  let helper

  before(async () => {
    helper = new GcloudLogging(`test`)
  })

  it('error', async () => {
    try {
      throw 111
    } catch (err) {
      helper.error(err)
    }
  })

  // it('info', async () => {
  //   try {
  //     helper.info(`1111`)
  //   } catch (err) {
  //     assert.throws(() => {}, err)
  //   }
  // })
})
