import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipie, editRecipie, fetchCart, editCart} from '../../actions';
import RecipieForm from './RecipieForm'

class RecipieEdit extends React.Component {
    componentDidMount() {
        this.props.fetchRecipie(this.props.match.params.id);
        this.props.fetchCart();
    }

    onSubmit = (formValues) => {
        this.props.editCart(this.props.match.params.id, formValues);
        this.props.editRecipie(this.props.match.params.id, formValues);
    };

    render() {
        if(!this.props.recipie) {
            return <div>Loading...</div>
        }
        return (
            <div className="p-edit-recipie-container">
                <div className="ui grid">
                    <div className="eight wide column">
                        <h2 style={{marginTop: '2.32em',color: 'rgba(100, 102, 102, 0.952)',letterSpacing: '0.08em'}}><i className="circle outline icon teal"></i>Edit recipie</h2>
                    </div>
                    <div className="eight wide column">
                        <div style={{border: '2px solid rgba(0, 128, 128, 0.500)', borderRadius: '50%',width: '150px',height:'150px'}}>
                             <img className="p-edit-recipie-image" src={this.props.recipie.url} alt={this.props.recipie.title} />
                        </div>
                    </div>
                </div>
                <RecipieForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.recipie, 'title', 'url', 'description', 'items', 'quantities')}
                    actionName="Update"
                 />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {recipie: state.recipies[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchRecipie, editRecipie, fetchCart, editCart})(RecipieEdit);