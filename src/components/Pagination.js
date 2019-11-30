import React from 'react';

const Pagination = (props) => {
    var pageNumbers = [];
    for (var i = 1; i < props.numberOfPages + 1; i++) {
        pageNumbers.push(i);
    }


    return (
        <ul className="pagination pagination-grid">
            {pageNumbers.map(num => (
                <li className="page-item mb-2"><button onClick={() => props.nextPage(num)} className="page-link">{num}</button></li>
            ))}
        </ul>
    );
}

export default Pagination;