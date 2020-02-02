import React from 'react';
import './Car.scss';

const Car = React.memo((props) => {
    return (
        <div className="car">
            <p>{props.name}</p>
            {props.children}
        </div>
    );
});

export default Car;
