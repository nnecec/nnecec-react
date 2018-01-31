import localeDataEn from 'react-intl/locale-data/en';
import localeDataZh from 'react-intl/locale-data/zh';

import messagesZh from './zh-Hans.messages'
import messagesEn from './en-US.messages'

// 引入组件多语言
// import paginationLocale from '@/components/pagination/locales/en-US';


const locale = {
  'zh-Hans': {
    messages: Object.assign({}, messagesZh, {
      // Pagination: paginationLocale,
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
      // Pagination: paginationLocale,
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
  }

};

export default locale;