import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createProUser} from '../actions/index';

class Register extends Component {
    renderField(field) {
        const className=`form-group ${field.meta.touched && field.meta.error ? 'has-danger':''}`;
        
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className='text-help'>
                    {field.meta.touched ? field.meta.error: ''}
                </div>
            </div>
        )        
    }

    onSubmit(values) {
        this.props.createProUser(values, () => {
            this.props.history.push('/Login');
        });
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <div className='card'>
                <div className='text-xs-right'>
                </div>
                <div className='card-content'>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <fieldset>
                            <label>Email</label>
                            <Field
                                name='username'
                                component="input"
                            />
                        </fieldset>
                        <fieldset>
                            <label>Name</label>
                            <Field 
                                name='name'
                                component={this.renderField}
                            />
                        </fieldset>
                        <fieldset>
                            <label>Password</label>
                            <Field
                                name='password'
                                type='password'
                                component='input'
                            />
                        </fieldset>
                        <button className='btn btn-primary' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors ={};

    if (!values.email || values.email.length < 3){
        errors.temail = 'Enter a valad email!';
    }
    if (!values.name){
        errors.name = 'Enter your name!';
    }
    if (!values.password || values.password.length < 8){
        errors.password = 'Create a password that is at least 8 characters!';
    }

    return errors;
}


export default reduxForm({
    validate: validate,
    form: 'RegistrationForm',
})(
    connect(null, {createProUser})(Register)
    );