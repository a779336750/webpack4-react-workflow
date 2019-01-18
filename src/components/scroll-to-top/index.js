import * as React from 'react';

export default class ScrollToTop extends React.Component {
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div onClick={this.scrollToTop}>
        {React.Children.map(this.props.children, child => {
          return child;
        })}
      </div>
    );
  }
}
