import React from 'react';
import {connect} from 'react-redux';
import {fetchCart, deleteCart} from '../../actions';
import {Link} from 'react-router-dom';
import emptyCart from './emptyCart.png';

class RecipieCart extends React.Component {
    componentDidMount() {
        this.props.fetchCart();
    }

    renderItem = (item) => {
        let itemObjectToArray = Object.values(item.items);
        return itemObjectToArray.map((i) => {
            return i.map((j,index) => {
                return (
                    <div key={index} style={{marginBottom: '0.2em'}}>
                        {j}
                    </div>
                )
            })
        })
       
    }

    renderQty = (item) => {
        let itemObjectToArray = Object.values(item.quantities);
        return itemObjectToArray.map((i) => {
            return i.map((j,index) => {
                return (
                    <div key={index} style={{marginBottom: '0.2em'}}>
                        {j}
                    </div>
                )
            })
        })
       
    }

    renderList() {
        return this.props.cart.map((item, index) => {
            return (
                <div className="ui cards" key={item.id}>
                    <div className="card p-card">
                        <div className="content">
                        <img className="right floated large ui avatar image" src={item.url} alt={item.title} style={{border: '1px solid  rgba(54, 163, 182, 0.486)', padding: '2px'}} />
                        <div className="header p-card-header" style={{marginBottom: "0.2em"}}>
                            {item.title}
                        </div>
                        <div className="meta">
                            <i className="sort amount down icon"></i>
                            <span>Ingredients</span>
                        </div>
                        <div className="description ui piled segment p-card-inner">
                            <div className="ui grid">
                                <div className="eight wide column">
                                    {this.renderItem(item)}
                                </div>
                                <div className="eight wide column">
                                    {this.renderQty(item)}
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <button onClick={() => this.props.deleteCart(this.props.cart[index].id)} className="ui basic grey button">
                                <i className="trash alternate outline icon"></i>
                                Remove
                            </button>
                            <Link className="ui basic teal button" to={`/cart/edit/${item.id}`}>
                                <i className="edit outline icon"></i>
                                 Edit Ingredients 
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
              );
        });
    }

    render() {
        if(this.props.cart.length === 0) {
            return (
                <div>
                    <h2>My Cart</h2>
                    <i className="caret right icon" style={{opacity: '0.4'}}></i>
                    <span style={{color: 'grey', letterSpacing: '0.02em'}}>No items in Cart!</span>
                    <img src={emptyCart} className="large ui image" />
                </div>
            );
        }
        return (
            <div className="p-title-text">
                <h3>
                    My Cart <i className="small caret right icon blue" style={{opacity: '0.90'}} /> ({this.props.cart.length}) 
                </h3>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {cart: Object.values(state.cart)};
};

export default connect(mapStateToProps, {fetchCart, deleteCart})(RecipieCart);