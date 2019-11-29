import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Book from './Book';
class Container extends Component {
    render() {
        const msg = this.props.data.totalItems ? `${this.props.data.totalItems} books found!` : '';
        return (
            <div className="container">
                <div>{msg}</div>
                <div className="row" style={{ margin: 'auto' }}>
                    {this.props.data.items ? this.props.data.items.map(item => <Book key={item.id} book={item} />) :
                        'Search Please'
                    }
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
// const mapDispatchesToProps = dispatch => {
//     return {
//         onLoad: dispatch({ type: 'STORE', payload: this.state.data })
//     }
// }
export default connect(mapStateToProps)(Container);