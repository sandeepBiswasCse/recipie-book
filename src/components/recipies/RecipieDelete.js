import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchRecipie, deleteRecipie, deleteCart} from '../../actions';
import history from '../../history';
import Modal from '../Modal';

class RecipieDelete extends React.Component {
    componentDidMount() {
        this.props.fetchRecipie(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
          <React.Fragment>
          <button onClick={() => this.deleteRecipieAction(id)} className="ui button teal">Delete</button>
          <Link to={`/recipies/${id}`} className="ui button">Cancel</Link>
        </React.Fragment>
        );
      }
    
     deleteRecipieAction(id) {
         this.props.deleteRecipie(id);
        //  this.props.deleteCart(id);
     }

    renderContent() {
        if(!this.props.recipie) {
            return 'Are you sure to delete?';
          }
            return `Are you sure to delete: ${this.props.recipie.title}`;
    }

    render() {
        return (
            <div>
                <Modal 
                    title="Delete Recipie"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss = {() => history.push('/')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {recipie: state.recipies[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchRecipie, deleteRecipie, deleteCart})(RecipieDelete);