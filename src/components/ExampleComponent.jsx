import React from 'react';

const ExampleComponent = (props) => {
    return (
        <div>
            <h1>This is an Example Component</h1>
            <p>{props.message}</p>
        </div>
    );
};

export default ExampleComponent;