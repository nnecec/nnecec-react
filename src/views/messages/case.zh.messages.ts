export default {
  // repository
  'repository.personal': '个人项目',
  'repository.nnecec-react.desc': '由 Parcel 构建，React 框架编写的个人网站，使用了 TypeScript。<br/><br/>选择 Parcel 主要为了尝试与 Webpack 不同的构建工具，对于小型网站零配置预估也是可行的，可是零配置却让有些需要配置的地方感到不顺手。<br/>项目主体采用 TypeScript + React 开发，MobX 进行状态管理。样式使用 PostCSS 作为预处理工具，但在开发中，越来越觉得需要样式组件化，一方面方便开发，一方面局部样式不需要考虑对全局的影响，于是逐渐使用 styled-components 进行替换。多语言的功能使开发变得繁琐，但是结果表现确实非常出色实用。',

  'repository.ecblog-server.desc': '使用 Node.js, TypeScript, GraphQL, Koa, MongoDB 搭建的博客后端服务。<br/><br/>采用 Koa2 框架，配合 GraphQL 搭建的后端服务。因为之前有过相关数据库经验，且 mongoose 在 Node.js 中使用非常方便，数据存储选择了 MongoDB。用户验证使用 Passport + jsonwebtoken，并在前端缓存 token，达到保存登陆的功能。其他接口基本是数据增删查改的功能。',
  'repository.ecblog-admin.desc': '由 Angular-Cli 构建的 Angular 项目。 Angular + TypeScript + ngrx 搭建的博客后台管理系统。<br/><br/>Angular 大而全的框架作为后台系统非常适合且易用，因为全面所以丧失了一些灵活性。但是其门槛较 React/Vue 来说稍高一些。因为后端采用了 GraphQL，在该项目中也加入了 Apollo-Angular 协助客户端。',

  'repository.work': '工作项目',
  'repository.malianghang.desc': '使用 Angular 1 框架开发的一套官方电商网站和后台系统，使用 RequiresJS 完成 AMD 模式开发。移动端使用 ionic，桌面端使用 Bootstrap / material。后端主要使用 LeanCloud 第三方云服务平台;<br/><br/>在项目中主要负责前端开发工作，编写页面及交互效果，参与部分接口开发。<br/><br/>作为第一份工作，学习到模块化开发、前端自动化开发，能够完成前端组件编写或改写的需求。完成复杂布局，确保产品兼容性。也由于创业公司在设计和产品上的空缺，在开发过程中同时兼顾对产品的思考及建议。力求在项目中追求更优雅的代码、更高的性能效率。',

  'repository.dianwoda.desc': '该项目是点我达公司主要面向运营人员的后台配置系统。前端项目使用 React + Redux + AntD 搭建，后端使用的是 dubbo 微服务架构，通过 Node.js 网关层提供接口供前端使用。<br/><br/>主要负责骑手及在线商城模块，参与新需求的评审、开发及对已有功能的维护工作，迁移旧版本的 React 项目，维护官网。开发前端及 Node.js 网关部分，并参与配合异地多活的改造。<br/><br/>了解到系统规范化的开发流程，对 React 及 AntD 的更多的使用及积累。后端微服务化及 Node.js 网关层的介入使前后端开发工作更易协作，提高前端对于接口数据的可控性，对 Node.js 项目积累一定经验。',
};
