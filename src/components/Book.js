import React from 'react';
import { Link } from 'react-router-dom';
import rating from '../images/rating.png';
const Book = ({ book }) => {
    let src = "...";
    if (book.volumeInfo.imageLinks) {
        src = book.volumeInfo.imageLinks.thumbnail;
    }
    return (
        <div className="col-md-3 col-xs-2 col-s-2 mb-4 margin-change">
            <div className="card shadow-lg bg-white rounded card-hover" style={{ width: '100%', minHeight: '25rem' }}>
                <img src={src} className="card-img-top" alt={book.id} />
                <div className="card-body">
                    <div className="card-flex">
                        <h6 className="card-title">{book.volumeInfo.title}</h6>
                        <span style={{ width: '40%', marginBottom: '5px' }}><img src={rating} /></span>
                        <Link to={`/info/${book.id}`}>
                            <button className="btn btn-success">More Info</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div >

    );
}

export default Book;