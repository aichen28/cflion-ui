import React from 'react';
import {Input} from 'antd';
import {Field} from 'redux-form'

const {TextArea} = Input;

export class InputField extends React.Component {
    render() {
        return (
            <Field
                {...this.props}
                component={InputItem}
            />
        )
    }
}

export class TextAreaField extends React.Component {
    render(){
        return(
            <Field
                {...this.props}
                component={TextAreaItem}
            />
        )
    }
}

class InputItem extends React.Component {
    render() {
        const { input: { name, value, onChange }, meta, placeholder } = this.props;

        return(
            <Input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )
    }
}

class TextAreaItem extends React.Component {
    render() {
        const { input: {name, value, onChange}, meta, placeholder } = this.props;

        return (
            <TextArea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )
    }
}