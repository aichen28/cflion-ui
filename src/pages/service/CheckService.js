import React,{Component} from 'react'

import { Table, Input } from 'antd'
const { Column } = Table;


const data = [{
    key: 1,
    xuHao: 1,
    configName: 'AAA',
    configContent: 'aaa',
}, {
    key: 2,
    xuHao: 2,
    configName: 'BBB',
    configContent: 'bbb',
}];

export default class CheckService extends Component {

    _goServiceList = () => {
        this.props.history.push('/Service/List');
    };

    render() {
        return (
            <div>
                <div className="header-menu">
                    <a href="javascript:;" onClick={this._goServiceList}>返回服务列表</a>
                </div>
                <div className="service-box">
                    <h1 className="service-title">查看配置文件列表页面</h1>
                    <div className="input-ui">
                        <label>Service</label>
                        <Input/>
                    </div>
                    <div className="input-ui">
                        <label>Environment</label>
                        <Input/>
                    </div>
                    <div className="input-ui">
                        <label>Comment</label>
                        <Input/>
                    </div>
                    <Table
                        dataSource={data}
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
                    </Table>
                </div>
            </div>
        )
    }
}