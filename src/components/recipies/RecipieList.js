import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipies, fetchCart} from '../../actions';
import {Link} from 'react-router-dom';
import history from '../../history';
import '../../css/recipieList.css'
import logo from './logoStd.png';

class RecipieList extends React.Component {
    componentDidMount() {
        this.props.fetchRecipies();
        this.props.fetchCart();
    }

    renderCreate() {
        return (
            <div>
                <Link to="/recipies/new" className="ui button teal" style={{}}>
                    Create Recipie
                </Link>
            </div>
        );
    }

    renderList() {
        return this.props.recipies.map(recipie => {
            return (
              <div className="item p-item" key={recipie.id}>
              <i className="large middle aligned icon circle check green" style={{opacity: '0.40'}} />
              <div className="content" onClick={() => history.push(`/recipies/${recipie.id}`)}>
                <div className="header p-header">
                  {/* <i className="regular middle aligned icon food teal" /> */}
                  {recipie.title}
                </div>
                <div className="right floated content">
                  <img className="ui avatar image p-image" src={recipie.url} alt={recipie.title} />
                </div>
                <div className="description p-description">
                  {recipie.description}
                </div>
              </div>
            </div>
            );
          });
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui grid p-grid">
                    <div className="row">
                        <div className="three wide column">
                            <img src={logo}
                            className="ui medium circular image p-logo" />
                        </div>
                        <div className="ten wide column">
                            <p style={{marginTop: '0em'}}>
                                {this.renderCreate()}
                            </p>
                        </div>
                        {/* <div class="three wide column">

                        </div> */}
                        </div>
                    </div>
                    
                <div className="ui celled list" style={{marginTop: '2em'}}>
                    {this.renderList()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {recipies: Object.values(state.recipies)};
};

export default connect(mapStateToProps, {fetchRecipies, fetchCart})(RecipieList);