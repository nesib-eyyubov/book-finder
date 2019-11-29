import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Container from './components/Container';
import BookInfo from './components/BookInfo';
class App extends Component {
    state = {
        data: {}
    }
    // componentDidMount() {
    //     console.log('text', this.props.text);

    //     const API_KEY = 'AIzaSyCYMXtVpoQZ-baJSXeMQRGuhW_vXGgwNZI';
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.text}&key=${API_KEY}&maxResults=40`)
    //         .then(data => data.json())
    //         .then(data => {
    //             this.props.onLoad(data, this.props.text);
    //         })
    //         .catch(err => console.log(err));
    // }
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Container} />
                        <Route path="/info/:bookId" exact component={BookInfo} />
                        <Route path="/about" exact component={About} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchesToProps = (dispatch) => {
    return {
        onLoad: (data, text) => dispatch({ type: 'STORE', payload: { data: data, text: text } })
    }
}

export default connect(mapStateToProps, mapDispatchesToProps)(App);