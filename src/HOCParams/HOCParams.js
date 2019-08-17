import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = ({ data }) => {
    return function(WrappedComponent) {
        return class extends Component {
            render() {
                return <WrappedComponent {...this.props} data={data}/>
            }
        }
    }
}
