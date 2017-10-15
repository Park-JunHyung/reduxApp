import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>설정시간 : {this.props.store.getState().counter.value}초</h1>
            </div>
        );
    }
}

export default Counter;
