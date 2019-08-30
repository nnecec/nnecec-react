// common messages
import messagesZh from './zh-Hans.messages'
import messagesEn from './en-US.messages'

// 引入组件多语言
import viewsEnLocale from './messages/en.messages'
import viewsZhLocale from './messages/zh.messages'

const locale = {
  'zh-cn': {
    messages: Object.assign({}, messagesZh, {
      ...viewsZhLocale
    }),
    locale: 'zh-Hans',
    data: new Intl.PluralRules('zh-Hans-CN'),
    formats: {
      date: {
        normal: {
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        }
      },
      money: {
        currency: 'CNY'
      }
    }
  },
  'en-us': {
    messages: Object.assign({}, messagesEn, {
      ...viewsEnLocale
    }),
    locale: 'en-US',
    data: new Intl.PluralRules(),
    formats: {
      date: {
        normal: {
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        }
      },
      money: {
        currency: 'USD'
      }
    }
  }
}

export default locale
