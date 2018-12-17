import React from 'react';

const didMount = implementation => (...params) => WrappedComponent =>
  class extends React.Component {
    componentDidMount() {
      implementation.apply(this, params);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default didMount;
