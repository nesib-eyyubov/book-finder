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
export default App;

