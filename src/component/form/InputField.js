import React from 'react';
import {Input} from 'antd';
import {Field} from 'redux-form'

export default class InputField extends React.Component {
    render() {
        return (
            <Field
                {...this.props}
                component={InputItem}
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