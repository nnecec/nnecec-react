import * as localeDataEn from 'react-intl/locale-data/en';
import * as localeDataZh from 'react-intl/locale-data/zh';

// common messages
import messagesZh from './zh-Hans.messages';
import messagesEn from './en-US.messages';

// 引入组件多语言
import componentsEnLocale from '../components/messages/en.messages';
import componentsZhLocale from '../components/messages/zh.messages';

const locale = {
  'zh-Hans': {
    messages: Object.assign({}, messagesZh, {
      ...componentsZhLocale,
    }),
    locale: 'zh-Hans',
    data: localeDataZh,
    formats: {
      date: {
        normal: {
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        },
      },
      money: {
        currency: 'CNY',
      },
    },
  },
  'en-US': {
    messages: Object.assign({}, messagesEn, {
      ...componentsEnLocale,
    }),
    locale: 'en-US',
    data: localeDataEn,
    formats: {
      date: {
        normal: {
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        },
      },
      money: {
        currency: 'USD',
      },
    },
  },

};

export default locale;
