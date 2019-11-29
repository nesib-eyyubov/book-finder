import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    state = {
        text: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var isLoading = true;
        this.props.onSubmit({}, '', isLoading);
        const API_KEY = 'AIzaSyCYMXtVpoQZ-baJSXeMQRGuhW_vXGgwNZI';
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.text}&key=${API_KEY}&maxResults=40`)
            .then(data => data.json())
            .then(data => {
                this.props.onSubmit(data, this.state.text);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="navbar navbar-light bg-light mb-5">
                <nav className="navbar navbar-light bg-light flex-navbar">
                    <Link to="/">
                        <div href="#" className="navbar-brand">Search
                       <span style={{ color: 'green' }}>Book</span>
                        </div>
                    </Link>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input type="search" className="form-control mr-sm-2" placeholder="Search" aria-label="Search" onChange={(e) => this.setState({ text: e.target.value })} />
                        <button
                            className="btn btn-success my-2 my-sm-0 "
                            type="submit"
                            onClick={this.handleSubmit}>
                            Search
                        </button>
                    </form>
                    <Link to="/about">
                        <button className="bg-none">About</button>
                    </Link>
                </nav>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        text: state.text,
        data: state.data
    }
}
const mapDispatchesToProps = (dispatch) => {
    return {
        onSubmit: (data, text, isLoading) => dispatch({ type: 'STORE', payload: { text, data, isLoading } }),
    }
}

export default connect(mapStateToProps, mapDispatchesToProps)(NavBar);