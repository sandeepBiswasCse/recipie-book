import React from 'react';
import {connect} from 'react-redux';
import {createRecipie, fetchCart} from '../../actions';
import RecipieForm from './RecipieForm';

class RecipieCreate extends React.Component {
    componentDidMount() {
        this.props.fetchCart();
    }
    
    onSubmit = (formValues) => {
        this.props.createRecipie(formValues);
    }

    render() {
        return (
            <div>
                <h3 className="p-form-create-header">
                    <i className="edit outline icon grey" style={{opacity: '0.5'}}></i>
                    Create a Recipie
                </h3>
                <hr style={{opacity: '0.2',color: 'rgba(201, 201, 201, 0.4)', width: '50%', float: 'left'}} />
                <i className="large pencil icon p-animated-icon"></i>
                <RecipieForm onSubmit={this.onSubmit} actionName="Create" />
            </div>
        )
    }
}

export default connect(null, {createRecipie, fetchCart})(RecipieCreate);