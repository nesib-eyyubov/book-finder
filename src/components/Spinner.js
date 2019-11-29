import React from 'react';
import giphy from '../images/giphy.gif';
const Spinner = () => {
    return (
        <div className="text-center" style={{ width: '100%' }}>
            <img src={giphy} style={{ width: '20%' }} alt="gif" />
        </div>

    );
}

export default Spinner;