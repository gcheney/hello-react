import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, React!</h1>
            </div>
        );
    }
}

ReactDOM.render(<HelloReact />, document.getElementById('app'));