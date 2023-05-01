import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Term and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius perferendis asperiores pariatur nostrum non, ipsum consequatur ipsa praesentium itaque!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;