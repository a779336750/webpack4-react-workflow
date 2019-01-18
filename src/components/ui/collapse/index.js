import React, { PureComponent } from 'react';
import styles from './index.less';
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: !!props.collapsed
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState(state => ({ collapsed: !state.collapsed }));
  }

  render() {
    return (
      <div>
        <button className={styles.buttonStyle} onClick={this.toggleCollapse}>
          Show/Hide Content
        </button>
        <div
          className={this.state.collapsed ? styles.collapsed : styles.expanded}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
Collapse.defaultProps = {
  collapsed: false
};
