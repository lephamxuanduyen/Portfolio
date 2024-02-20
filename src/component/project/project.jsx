import React from 'react';
import Products from '../api/Products';

const project = () => {
    return (
        <div className='part'>
            <div className='title'>My Products</div>
            <p>These apps are all under development. We expect to release the first version in the next quarter.</p>
            <Products/>
        </div>
    );
};

export default project;