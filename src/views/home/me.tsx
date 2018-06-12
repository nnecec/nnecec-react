import * as React from 'react';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.img = React.createRef();
    this.desc = React.createRef();
    this.state = {
      isTransition: false,
    };
  }

  handleEnter = () => {
    const { isTransition } = this.state;

  }

  render() {
    return (
      <div className="me-wrapper">
        <div className="intro">
          <div>Hello!</div>
          <div>I'm Shi Cheng, a front-end software engineer.</div>
          <div>Get in touch:
            <a href="mailto:nnecec@outlook.com">nnecec@outlook.com</a>
          </div>
          <div>View my resume:
            <Link to="/about">Resume</Link>
          </div>
        </div>

        <div className="description">
          <div>我在2015年毕业后一直从事前端开发工作，我享受这份职业并努力创造出美丽美好的产品。我的目标是成为行业中优秀的工程师。</div>
          <div>
            工作之外，我可能在看剧，看电影，做菜，逛街，玩英雄联盟，看书等等，和我爱的人。
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
