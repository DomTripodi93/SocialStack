import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getToken} from '../actions/index';

class Token extends Component {
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
            </div>
        )        
    }

    onSubmit(values) {
        this.props.getToken(values, () => {
            this.props.history.push('/profile');
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
                            <label>Password</label>
                            <Field
                                name='password'
                                type='password'
                                component='input'
                            />
                        </fieldset>
                        <button 
                            className='btn btn-primary' 
                            type='submit'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


export default reduxForm({
    form: 'LoginForm',
})(
    connect(null, {getToken})(Token)
    );