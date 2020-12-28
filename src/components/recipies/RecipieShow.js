import React from 'react';
import {fetchRecipie, createCart, fetchCart} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import history from '../../history';

class RecipieShow extends React.Component {
    state = {touched: false};
    componentDidMount() {
        this.props.fetchRecipie(this.props.match.params.id);
        this.props.fetchCart();
    }

    renderItem = (recipie) => {
        return (
            recipie.items.item.map((i,index) => {
               return (
                <div key={index} style={{marginBottom: '0.3em'}}>{i}</div>
               );
            })
        );
    }

    renderQty = (recipie) => {
        return (
            recipie.quantities.qty.map((q,index) => {
               return (
                <div key={index} style={{marginBottom: '0.3em'}}>{q}</div>
               );
            })
        );
    }

    renderDetails = () => {
        return (
            <div className="ui cards">

                <div className="card" style={{width: '100%'}}>
                    <div className="content">
                        <div className="header p-cart-edit-header">
                            <i className="small circle icon teal"></i>
                            {this.props.recipie.title}
                        </div>
                        <div className="description" style={{color: 'rgba(0, 128, 128, 0.700)'}}>
                            <i className="small pencil icon"></i>
                            {this.props.recipie.description}
                        </div>
                    </div>
                </div>

                    <div style={{border:'3px solid rgba(0, 128, 128, 0.200)', borderRadius:'50%', padding:'0.8em',backgroundColor: 'rgba(128, 94, 0, 0.07)'}}>
                        <img src={this.props.recipie.url} alt={this.props.recipie.title} style={{borderRadius: '50%',width:'245px',height:'240px',marginTop:'0.2em'}} />
                    </div>
                    <div className="content">
                        <div className="meta">
                        <h4 style={{marginLeft: '2em',paddingBottom: '0.8em',marginTop: '1em',color: 'grey'}}>
                            <i className="caret right icon p-show-dropdown-icon"></i>
                            Ingredients
                        </h4>
                        </div>
                        <div className="description" style={{marginLeft: '1.2em', border: '1px solid rgba(3, 146, 146, 0.438)',padding: '1em 4em',borderRadius: '1em'}}>
                            <div className="ui grid" style={{marginLeft: '-3em',color: 'grey'}}>
                                <div className="eight wide column">
                                    {this.renderItem(this.props.recipie)}
                                </div>
                                <div className="eight wide column">
                                    {this.renderQty(this.props.recipie)}
                                </div>
                            </div>

                            <div style={{marginLeft: '-3em',paddingTop: '2.5em'}}>
                                <Link className="ui button p-show-button-del" to={`/recipies/delete/${this.props.recipie.id}`}>
                                    <i className="trash alternate outline icon"></i>
                                     Delete 
                                </Link>
                                <Link className="ui button p-show-button-edit" to={`/recipies/edit/${this.props.recipie.id}`}>
                                     <i className="edit icon"></i>
                                     Edit 
                                </Link>
                                <button onClick={() => this.setState({touched: true})} className="ui button teal p-show-button-add">
                                    <i className="circle icon"></i>
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    </div>

            </div>
        );
    }

    // renderActions(recipie) {
    //     return (
    //         <div className="">
    //             <Link className="ui button" to={`/recipies/delete/${recipie.id}`}> Delete </Link>
    //             <Link className="ui button" to={`/recipies/edit/${recipie.id}`}> Edit </Link>
    //             <button onClick={() => this.setState({touched: true})} className="ui button teal">Add to Cart</button>
    //         </div>
    //     );
    // }

    addToCart() {
        this.props.createCart(this.props.recipie);
        history.push('/cart');
    }

    render() {
        if(!this.props.recipie) {
            return null;
        }
        if(this.state.touched) {
            {this.addToCart()}
        }
        return (
            <div>
             {this.renderDetails()} <br/>
             {/* {this.renderActions(this.props.recipie)} */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {recipie: state.recipies[ownProps.match.params.id] }
};

export default connect(mapStateToProps, {fetchRecipie, createCart, fetchCart})(RecipieShow);