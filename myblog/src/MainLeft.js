import React, { Component, Fragment } from 'react';
import { Input, Card, Avatar } from 'antd';


class MainLeft extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',

        }
    }

    render() {
        return (
            <Fragment>
                <Card title="公告" bordered={false} style={{ width: 200 }}>
                    <p>来自广东理工大三学生,从事后端(主)  安卓 前端工作</p>
                    <p>如果你对我有兴趣可以发offer到我邮箱562392659@qq.com</p>
                </Card>
                <Card title="个人作品" bordered={false} style={{ width: 200, marginTop: "3px" }}>
                    <div style={{ flexGrow: "0.1", alignItems: "center" }} className="row"  >
                        <a href="https://www.coolapk.com/apk/206707" target="view_window" className="col" style={{flexGrow: "1",alignItems:"center"}}>
                            <Avatar shape="square" size={30} src="../img/gdlgxy.jpg" style={{ backgroundColor: '#ffffff'}} />
                            <p style={{fontSize:"12px"}}>广理学生助手</p>
                        </a>
                        <a href="https://www.coolapk.com/apk/203332" target="view_window" className="col" style={{flexGrow: "1",alignItems:"center"}}>
                            <Avatar shape="square" size={30} src="../img/22.png" style={{ backgroundColor: '#ffffff' }} />
                            <p>biliMusic</p>
                        </a>
                    </div>
                </Card>
            </Fragment>
        );
    }

}

export default MainLeft;
