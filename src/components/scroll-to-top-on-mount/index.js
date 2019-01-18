import * as React from 'react';
/**
 * 当组件加载完成后自动滚动到顶部, 推荐直接在 page 层直接引用
 * @example
 * class LongContent extends Component {
 *    render() {
 *      <div>
 *        <ScrollToTopOnMount/>
 *        <h1>Here is my long content page</h1>
 *      </div>
 *    }
 *  }
 */
export default class ScrollToTopOnMount extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
