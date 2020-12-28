import React from 'react';
import { Link } from 'react-router-dom';
import {fetchCart} from '../actions';
import {connect} from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary menu p-h-link-design">
        <Link to="/" className="item p-hover-item">
          <h5 className="p-brand" style={{color: 'red'}}>
            {/* <i className="small bookmark outline icon teal" /> */}
            Recipie Book
          </h5>
        </Link>
        <div className="right menu">
          <Link to="/" className="item p-h-recipie">
          <i className="sort alphabet down icon teal" style={{opacity: '0.70'}}></i>
            All Recipies
          </Link>
          <Link to="/cart" className="item p-h-recipie">
              <i className="dolly icon teal" style={{opacity: '0.70'}}></i>
              {`Cart (${this.props.cart.length})`}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {cart: Object.values(state.cart)};
};

export default connect(mapStateToProps, {fetchCart})(Header);