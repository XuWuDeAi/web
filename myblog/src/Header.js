import React, { Component, Fragment } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css'
import { Modal, Button, Avatar, Input, Icon } from 'antd';




class Header extends Component {
    constructor(props) {
        super(props)
        var _self = this
        this.state = {
            blogCount: "00000",
            userCount: "00000",
            visible: false,
            rand: '',
            randurl: '/verification.do',
            password: '',
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
        axios.get('/header')
            .then(function (response) {
                _self.setState({
                    blogCount: response.data.data.blogCount,
                    userCount: response.data.data.userCount
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        const { password, rand, randurl } = this.state;
        return (

            <Fragment>

                <div className="row" style={{ width: '100%' }}>
                    <Avatar shape="square" size={70} src="../img/me.jpg" />
                    <div style={{ flexGrow: "1" }} className="col" style={{ marginTop: '30px', marginLeft: '10px', background: '#03a9f4', borderRadius: '5px' }}>
                        <label className="header_item">博客數</label>
                        <label className="header_item ">{this.state.blogCount}</label>
                    </div>
                    <div style={{ flexGrow: "1" }} className="col" style={{ marginTop: '30px', marginLeft: '10px', background: '#03a9f4', borderRadius: '5px' }}>
                        <label className="header_item">訪客數</label>
                        <label className="header_item"> {this.state.userCount}</label>
                    </div>
                    <div style={{ flexGrow: "3" }}></div>
                    <div style={{ flexGrow: "0.1", alignItems: "center" }} className="row" >
                        <a href="https://github.com/XuWuDeAi" target="view_window">
                            <Avatar shape="square" size={30} src="../img/github.svg" style={{ backgroundColor: '#ffffff', marginLeft: '10px' }} />
                        </a>
                        <a href="https://space.bilibili.com/134566397/#/" target="view_window">
                            <Avatar shape="square" size={30} src="../img/CN_bilibili.svg" style={{ backgroundColor: '#ffffff', marginLeft: '5px' }} />
                        </a>
                    </div>
                    <div style={{ flexGrow: "0.1", alignItems: "center" }} className="row" >
                        <Button type="danger" onClick={this.handleButtonClick}>管理员登录</Button>
                        <Modal
                            title="管理员登录"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" value={password} onChange={this.onChangeUserName} />
                            <div className="row" style={{ marginTop: "5px" }}>
                                <Input
                                    placeholder="Enter your rand"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    value={rand}
                                    onChange={this.onChangeRand}
                                    ref={node => this.userRandInput = node}
                                />
                                <img shape="square" src={randurl} style={{ backgroundColor: '#ffffff', marginLeft: '5px' }} onClick={this.onClickRand} style={{ cursor: "pointer", marginLeft: "3px" }} />
                            </div>
                        </Modal>
                    </div>
                </div>
            </Fragment>
        );
    }
    onClickRand = (e) => {
        this.setState({
            randurl: "/verification.do?" + Math.random()
        })
    }
    onChangeUserName = (e) => {
        this.setState({ password: e.target.value });
    }

    onChangeRand = (e) => {
        this.setState({ rand: e.target.value });
    }

    handleButtonClick(e) {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        axios.post('/load', {
            password: this.state.password,
            rand: this.state.rand
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            visible: false,
            password: '',
            rand: ''
        });

    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
}

export default Header;
