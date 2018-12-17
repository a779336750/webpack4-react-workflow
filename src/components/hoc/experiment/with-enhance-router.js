import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { base64UrlDecode, base64UrlEncode } from '@src/utils/common-util';
import { formatRoute } from 'react-router-named-routes';

/**
 * 跳转装饰注入 react-router-dom
 * 近似 vue router api: https://router.vuejs.org/guide/essentials/navigation.html
 * @example
 *
 import { routeNames } from '@src/pages/app';
 @withEnhanceRouter
 export default class Example extends Component {
    handleClick = () => {
      const { $router } = this.props;
      $router.push(routeNames.MAIN);
      $router.push({url: routeNames.MAIN, params});
      $router.replace({url: /test/:haha/:hehe, params: {haha: 123, hehe: 456}});
      $router.replace({url: /test/:base64, base64: {aa: '123', bb: '456'}});
      $router.go(<前进或后退>);
    }

    render() {
      // 直接获取路由参数
      console.log(this.props.$router.params);
      return (
        <button onClick={ this.handleClick }>
          Take me home!
        </button>
      );
    }
  }
 * @param ComposedComponent
 * @return {{new(): RedirectDecorator, prototype: RedirectDecorator}}
 */
const withEnhanceRouter = ComposedComponent =>
  withRouter(
    class RedirectDecorator extends Component {
      state = RedirectDecorator.getInitialState();

      static getInitialState() {
        return {
          push: true,
          redirectUrl: null
        };
      }

      componentDidUpdate(prevProps, prevState) {
        const { redirectUrl } = this.state;

        // If component is rendered on redirect page as well
        // (i.e. header of footer) it would cause redirect-loop
        // as "<Redirect />" is being rendered every time.
        // So we are resetting the state after redirect
        if (!prevState.redirectUrl && redirectUrl) {
          this.setState(RedirectDecorator.getInitialState());
        }
      }

      redirect = (push = true, { url, params = {}, base64 } = {}) => {
        if (base64) {
          params = { ...params, base64: base64UrlEncode(base64) };
        }
        this.setState({
          push,
          redirectUrl: formatRoute(url, params)
        });
      };

      static normalizeParams(params) {
        if (typeof params === 'string') {
          return { url: params };
        }
        return params;
      }

      manageRouterMember({ redirect, params }) {
        return {
          push: params =>
            redirect(true, RedirectDecorator.normalizeParams(params)),
          replace: params =>
            redirect(false, RedirectDecorator.normalizeParams(params)),
          go: num => this.props.history.go(num),
          params
        };
      }

      validatePropsNamespace() {
        if (process.env.NODE_ENV !== 'production' && this.props['$router']) {
          throw new Error('props 命中关键字 $router, 请更换传入的 props 命名');
        }
      }

      render() {
        const { push, redirectUrl } = this.state;
        if (redirectUrl) {
          return <Redirect push={push} to={redirectUrl} />;
        }
        let params = this.props.match.params;
        const { base64 } = params;
        if (base64) {
          params = { ...params, base64: base64UrlDecode(base64) };
        }
        this.validatePropsNamespace();
        return (
          <ComposedComponent
            {...this.props}
            $router={this.manageRouterMember({
              redirect: this.redirect,
              params
            })}
          />
        );
      }
    }
  );

export default withEnhanceRouter;
