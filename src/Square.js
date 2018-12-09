import React from 'react';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => alert('clicked')}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;