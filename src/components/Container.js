import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Book from './Book';
import Pagination from './Pagination';
import Spinner from './Spinner';
class Container extends Component {
    nextPage = (number) => {
        this.props.nextPage(number);
    }
    render() {
        const totalItems = this.props.data.totalItems;
        const msg = totalItems ? `${totalItems} books found!` : '';
        let numOfPages = 1;
        if (totalItems && totalItems > 12) {
            numOfPages = Math.ceil(totalItems / 12);
        }
        return (
            <div className="container">
                <div>{msg}</div>
                <div className="row two-grid" style={{ margin: 'auto' }}>
                    {this.props.data.items ? this.props.data.items.map(item => <Book key={item.id} book={item} />) :
                        <Spinner />
                    }
                </div>
                <div className="pagination-container">
                    {totalItems ? <Pagination numberOfPages={numOfPages} nextPage={(number) => this.nextPage(number)} /> : ""}
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}
const mapDispatchedToProps = dispatch => {
    return {
        nextPage: (number) => dispatch({ type: 'NEXT_PAGE', payload: { number } })
    }
}

export default connect(mapStateToProps, mapDispatchedToProps)(Container);