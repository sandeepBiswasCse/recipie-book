import React from 'react';
import {Field, reduxForm} from 'redux-form';

class RecipieForm extends React.Component {

    renderInput = ({input, label, meta}) => {
        return (
            <div className="field">
            <label className="p-form-label">{label}</label>
            <input {...input} autoComplete="off" className="p-form-input" />
            {this.renderError(meta)}
            </div>
        );
    }

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} style={{paddingBottom: '1em'}} >
                <Field name="title" component={this.renderInput} label="Recipie Title" />
                <Field name="url" component={this.renderInput} label="Image URL" />
                <Field name="description" component={this.renderInput} label="Description" />
                <div className="field">
                    <div className="ui accordion field">
                        <div className="title">
                            <h4 className="p-form-create-ingredients"><i className="icon dropdown"></i>
                            Ingredients</h4>
                        </div>
                        <div className="content field active">
                            <div className="">

                                <div className="fields">
                                    <div className="field">
                                        <Field name="items.item[0]" component={this.renderInput} type="text" label="Title" />
                                    </div>
                                    <div className="field">
                                        <Field name="quantities.qty[0]" component={this.renderInput} type="text" label="Quantity" />
                                    </div>
                                </div>
                                <div className="fields">
                                    <div className="field">
                                        <Field name="items.item[1]" component={this.renderInput} type="text" label="Title" />
                                    </div>
                                    <div className="field">
                                        <Field name="quantities.qty[1]" component={this.renderInput} type="text" label="Quantity" />
                                    </div>
                                </div>
                                <div className="fields">
                                    <div className="field">
                                        <Field name="items.item[2]" component={this.renderInput} type="text" label="Title" />
                                    </div>
                                    <div className="field">
                                        <Field name="quantities.qty[2]" component={this.renderInput} type="text" label="Quantity" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                <button className="ui button teal">
                    {this.props.actionName} 
                    <i class="edit icon" style={{marginLeft: '0.4em'}}></i>
                </button>
            </form>
        )
    }
}

const validate = ({title,description,url,items,quantities}) => {
    const errors = {
    };

    if(!title) {
        errors.title = "You must enter a Title!"
    }
    if(!url) {
        errors.url = "Please provide a Url link!"
    }
    if(!description) {
        errors.description = "Please eneter a Description!"
    }
    return errors;
};

export default reduxForm({
    validate: validate,
    form: 'RecipieForm'
})(RecipieForm);