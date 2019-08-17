import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (WrappedComponent) => {
    return class extends Component {
        static displayName = WrappedComponent.displayName ? `HOC${WrappedComponent.displayName}` : 'HOCComponent';

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}
