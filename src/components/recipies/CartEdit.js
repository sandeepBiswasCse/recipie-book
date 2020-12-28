import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {editRecipie, fetchRecipie, fetchCart, editCart} from '../../actions';
import CartForm from './CartForm'

class CartEdit extends React.Component {
    componentDidMount() {
        this.props.fetchCart(this.props.match.params.id);
        this.props.fetchCart();
        this.props.fetchRecipie(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editRecipie(this.props.match.params.id, formValues);
        this.props.editCart(this.props.match.params.id, formValues);
    };

    render() {
        if(!this.props.cart) {
            return <div>Loading...</div>
        }
        return (
            <div className="p-cart-body">
                <div>
                    <h2 className="p-cart-edit-header">
                        <i className="circle outline icon teal" style={{opacity: '0.75'}}></i>
                        {this.props.cart.title}
                    </h2>
                </div>
                <CartForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.cart, 'items', 'quantities')}
                    actionName="Update"
                 />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {cart: state.cart[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {editCart, editRecipie, fetchRecipie, fetchCart})(CartEdit);