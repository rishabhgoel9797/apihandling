import commonApi from '@/api/index.js'

const apiPath = {
  get_notification: '/notify/getUserNotifications'
}

const notificationService = {
  getNotification (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.get_notification, userObj, callback, errHandler)
  }
}

export default notificationService
