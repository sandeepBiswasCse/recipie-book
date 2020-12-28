import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';

import RecipieCreate from './recipies/RecipieCreate';
import RecipieDelete from './recipies/RecipieDelete';
import RecipieEdit from './recipies/RecipieEdit';
import RecipieList from './recipies/RecipieList';
import RecipieShow from './recipies/RecipieShow';
import Header from './Header';
import RecipieCart from './recipies/RecipieCart';
import CartEdit from './recipies/CartEdit';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <br />
                    <Switch>
                        <Route path="/" exact component={RecipieList} />
                        <Route path="/recipies/new" exact component={RecipieCreate} />
                        <Route path="/recipies/edit/:id" exact component={RecipieEdit} />
                        <Route path="/recipies/delete/:id" exact component={RecipieDelete} />
                        <Route path="/recipies/:id" exact component={RecipieShow} />
                        <Route path="/cart" exact component={RecipieCart} />
                        <Route path="/cart/edit/:id" exact component={CartEdit} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;