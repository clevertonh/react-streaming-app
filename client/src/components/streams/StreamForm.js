import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamForm = (props) => {

    const onSubmit = (formValues) => {
        props.onSubmit(formValues);
    };

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field
                name="description"
                component={renderInput}
                label="Enter Description"
            />
            <button className="ui button primary">Submit</button>
        </form>
    );
};

const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {renderError(meta)}
        </div>
    );
};

const renderError = ({ error, touched }) => {
    if (touched && error) {
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        );
    }
};

const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = "You must enter a title";
    }

    if (!values.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};

export default reduxForm({
    form: "streamForm",
    validate,
})(StreamForm);
