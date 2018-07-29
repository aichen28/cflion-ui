import React from 'react';

import {connect} from 'react-redux';

import {addService} from './reducers/actions';

import {Field, reduxForm} from 'redux-form'

import {Input, Table, Modal, Button} from 'antd';

import InputField from '../../component/form/InputField'

import './service.css';


const { Column } = Table;
const { TextArea } = Input;

/*const data = [{
    key: 1,
    xuHao: 1,
    configName: 'AAA',
    configContent: 'aaa',
}, {
    key: 2,
    xuHao: 2,
    configName: 'BBB',
    configContent: 'bbb',
}];*/

class AddForm extends React.Component {

    state = { visible: false };

    _showModal = () => {
        this.setState({
            visible: true,
        });
    };

    _cancelModal = () => {
        this.setState({
            visible: false,
        });
    };

    _okModal = () => {
        this.setState({
            visible: false,
        });
    };

    _addService = (values) => {
        let service = {};
        service.service = values.service;
        service.environment = values.environment;
        service.comment= values.comment;
        this.props.onAddService(service)
    };

    render() {
        let service = this.props.service;
        let configs = service ? service.configs : [];
        const {handleSubmit} = this.props;

        return (
            <div className="service-box">
                <h1 className="service-title">添加配置</h1>
                <div className="input-ui">
                    <label>Service</label>
                    <InputField
                        type={'text'}
                        name={'service'}
                        placeholder={'service'}
                    />
                </div>
                <div className="input-ui">
                    <label>Environment</label>
                    <InputField
                        type={'text'}
                        name={'environment'}
                        placeholder={'environment'}
                    />
                </div>
                <div className="input-ui">
                    <label>Comment</label>
                    <InputField
                        type={'text'}
                        name={'comment'}
                        placeholder={'comment'}
                    />
                </div>
                <Modal
                    title="配置文件"
                    visible={this.state.visible}
                    onOk={this._okModal}
                    onCancel={this._cancelModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <div className="input-ui">
                        <label>Config Name</label>
                        <Input/>
                    </div>
                    <div className="input-ui">
                        <label>Config Content</label>
                        <TextArea placeholder="config content" autosize={{ minRows: 2, maxRows: 10 }} />
                    </div>
                </Modal>
                <Table
                    dataSource={configs}
                    pagination={false}
                >
                    <Column
                        title="序号"
                        dataIndex="xuHao"
                        key="xuHao"
                    />
                    <Column
                        title="Config Name"
                        dataIndex="configName"
                        key="configName"
                    />
                    <Column
                        title="Config Content"
                        dataIndex="configContent"
                        key="configContent"
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a href="javascript:;" onClick={this._delService}>删除</a>
                            </span>
                        )}
                    />
                </Table>
                <div className="submit-btn">
                    <Button onClick={handleSubmit(this._addService)}>提交</Button>
                </div>
            </div>
        )
    }
}

AddForm = reduxForm({
    form: 'addForm'
})(AddForm);

AddForm = connect(
    (state) => ({
        service: state.service
    }),
    (dispatch) => ({
        onAddService: (service) => dispatch(addService(service))
    })
)(AddForm);

export default class AddService extends React.Component {

    _goServiceList = () => {
        this.props.history.push('/Service/List');
    };

    render(){

        return(
            <div>
                <div className="header-menu">
                    <a href="javascript:;" onClick={this._goServiceList}>返回服务列表</a>
                </div>
                <AddForm/>
            </div>
        )
    }
}