import * as React from 'react';
import { FormattedDate, defineMessages } from 'react-intl';
import Tag from '../../components/tag';

class Repositories extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const messages = defineMessages({
      luoo: { id: 'case.luoo' },
    });
  }

  render() {
    return (
      <div className="repositories">
        <div className="container">
          <ul>
            <li className="repository">
              <h3>nnecec-react</h3>
              <p>personal website</p>
              <div className="tag">
                <Tag title={'TypeScript'} />
                <Tag title={'React'} />
                <Tag title={'MobX'} />
                <Tag title={'Parcel'} />
                <Tag title={'PostCSS'} />
              </div>
            </li>
            <li className="repository">
              <h3>ecblog-server</h3>
              <p>blog server</p>
              <div className="tag">
                <Tag title={'TypeScript'} />
                <Tag title={'GraphQL'} />
                <Tag title={'Koa'} />
                <Tag title={'mongoose'} />
                <Tag title={'Passport'} />
              </div>
            </li>
            <li className="repository">
              <h3>ecblog-admin</h3>
              <p>blog admin</p>
              <div className="tag">
                <Tag title={'TypeScript'} />
                <Tag title={'Angular'} />
                <Tag title={'Apollo'} />
                <Tag title={'RxJS'} />
              </div>
            </li>
            <li className="repository">
              <h3>dianwoda admin system</h3>
              <p>后台运营系统。前端项目使用 React + Redux + AntD 搭建，后端采用 dubbo 微服务架构，通过 Node.js 网关层提供接口</p>
              <div className="tag">
                <Tag title={'TypeScript'} />
                <Tag title={'Angular'} />
                <Tag title={'Apollo'} />
                <Tag title={'RxJS'} />
                <Tag title={'Webpack'} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Repositories;
