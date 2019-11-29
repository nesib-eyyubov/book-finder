import React, { Component } from 'react';
import Spinner from './Spinner';
class BookInfo extends Component {
    state = {
        data: {},
        isLoaded: false
    }
    async componentDidMount() {
        const data = await fetch(`https://www.googleapis.com/books/v1/volumes/${this.props.match.params.bookId}`);
        const book = await data.json();

        this.setState({ data: book, isLoaded: true });
    }
    render() {
        if (this.state.isLoaded) {
            const { data } = this.state;
            return (
                <div className="container">
                    <div className="card" style={{ margin: 'auto' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <h4 className="text-center">{data.volumeInfo.title}</h4>
                            </div>
                            <div className="book-container">
                                <div className="book-image">
                                    <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.id} />
                                </div>
                                <div className="book-description">
                                    <p className="secondary" style={{ fontSize: '14px' }}>{data.volumeInfo.description}</p>
                                </div>
                            </div>
                            <div className="book-details">
                                <p><i class="fas fa-user-edit"></i> <strong>Author:</strong> {data.volumeInfo.authors[0]}</p>
                                <p><i class="fas fa-book-open"></i> <strong>Title:</strong> {data.volumeInfo.title}</p>
                                <p><i class="fas fa-address-book"></i> <strong>Categories: </strong>{data.volumeInfo.categories ? data.volumeInfo.categories.map(cat => cat) : ''}</p>
                                <p><i class="fas fa-newspaper"></i> <strong>Page Count:  </strong>{data.volumeInfo.pageCount}</p>
                                <p><i class="fas fa-calendar-day"></i> <strong>Publish Date:</strong> {data.volumeInfo.publishedDate}</p>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
        else {
            return (
                <Spinner />
            );
        }


    }
}

export default BookInfo;