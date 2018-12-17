import KitComponent from '@src/components/kit-component';
import InfiniteScrollScroller from 'react-infinite-scroller';
import * as React from 'react';
import style from './index.less';

export default class InfiniteScroll extends KitComponent {
  static renderDefaultLoader() {
    return (
      <div className={style.loading} key={0}>
        正在加载...
      </div>
    );
  }

  renderLoader() {
    const { renderLoader = InfiniteScroll.renderDefaultLoader } = this.props;
    return renderLoader();
  }

  render() {
    const {
      hasMore,
      pageStart = 0,
      children,
      loadMore,
      ...restProps
    } = this.props;
    return (
      <InfiniteScrollScroller
        pageStart={pageStart}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={this.renderLoader()}
        {...restProps}
      >
        {children}
      </InfiniteScrollScroller>
    );
  }
}
