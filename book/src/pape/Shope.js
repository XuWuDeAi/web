import React, { Component, Fragment } from 'react';
import { Flex } from 'antd-mobile';
import Pape3 from '../shoppape/Pape3'
const tabs = [
    { title: '饮品', id: 1 },
    { title: '点心', id: 2 },
    { title: '文学艺术', id: 3 },
    { title: '人文科社', id: 4 },
    { title: '经济金融', id: 5 },
    { title: '生活休闲', id: 6 },
    { title: '科学技术', id: 7 },
    { title: '少儿童书', id: 8 },
    { title: '教育考试', id: 9 },

];
class Shope extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: tabs,
            currentIndex: 1,
        }

    }
    tabChoiced = (id) => {
        //tab切换到方法
        this.setState({
            currentIndex: id
        });
    }
    render() {
        var _this = this;
        var isBox1Show = this.state.currentIndex == 1 ? 'block' : 'none';
        var isBox2Show = this.state.currentIndex == 2 ? 'block' : 'none';
        var isBox3Show = this.state.currentIndex == 3 ? 'block' : 'none';
        var isBox4Show = this.state.currentIndex == 4 ? 'block' : 'none';
        var isBox5Show = this.state.currentIndex == 5 ? 'block' : 'none';
        var isBox6Show = this.state.currentIndex == 6 ? 'block' : 'none';
        var isBox7Show = this.state.currentIndex == 7 ? 'block' : 'none';
        var isBox8Show = this.state.currentIndex == 8 ? 'block' : 'none';
        var isBox9Show = this.state.currentIndex == 9 ? 'block' : 'none';

        var tabList = this.state.tabs.map(function (res, index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle = res.id == this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
            return <li key={index} onClick={this.tabChoiced.bind(_this, res.id)} className={tabStyle}>{res.title}</li>

        }.bind(_this));

        return (
            <Fragment>

                <div className="col" style={{ width: 90, height: "100%", overflowY: "auto", backgroundColor: "#f7f7f7" }}>
                    {
                        this.state.tabs.map((item, index) => {
                            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
                            var tabStyle = item.id == this.state.currentIndex ? 'subCtrl_active' : 'subCtrl';
                            return <div className={"col_center " + tabStyle} onClick={this.tabChoiced.bind(_this, item.id)} key={index} style={{ width: 90, height: 50 }}> <span style={{ fontWeight: 300 }}>{item.title}</span></div>
                        })
                    }
                </div>
                <div className="col" style={{ flexGrow: "2", height: "100%" }}>
                    <div style={{ "display": isBox1Show }} >
                        <Flex  >
                            <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>精品</p></Flex.Item>
                            <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>特色</p></Flex.Item>
                            <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>奶茶</p></Flex.Item>
                            <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>茶</p></Flex.Item>

                        </Flex>
                        <Flex style={{ marginTop: "5px" }}>
                            <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>咖啡</p></Flex.Item>
                            <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>果汁</p></Flex.Item>
                        </Flex>
                    </div>
                    <div style={{ "display": isBox2Show }}>
                        <Flex  >
                            <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>中式甜品</p></Flex.Item>
                            <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>西式甜品</p></Flex.Item>
                            <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>港式甜品</p></Flex.Item>
                            <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>日式甜品</p></Flex.Item>

                        </Flex>

                    </div>
                    <div style={{ "display": isBox3Show }}>
                      <Pape3/>
                    </div>
                    <div style={{ "display": isBox4Show }} >
                        社会新闻
                    </div>
                    <div style={{ "display": isBox5Show }}>
                        体育世界
                    </div>
                    <div style={{ "display": isBox6Show }}>
                        娱乐圈
                    </div>
                    <div style={{ "display": isBox7Show }} >
                        社会新闻
                    </div>
                    <div style={{ "display": isBox8Show }}>
                        娱乐圈
                    </div>
                    <div style={{ "display": isBox9Show }} >
                        社会新闻
                    </div>


                </div>

                {/* <div className="listWrap">
                    <ul className="subNavWrap">
                        {tabList}
                    </ul>
                    <div className="newsList">
                        <div style={{ "display": isBox1Show }} >
                            社会新闻
                    </div>
                        <div style={{ "display": isBox2Show }}>
                            体育世界
                    </div>
                        <div style={{ "display": isBox3Show }}>
                            娱乐圈
                    </div>
                    </div>
                </div> */}
                {/* <SearchBar placeholder="摆渡人" maxLength={8} />
                    <div style={{  height: 500 ,flexGrow: "2" }} >
                        <WhiteSpace />
                        <Tabs tabs={tabs}  className="col"
                            initalPage={'t2'}
                            tabBarPosition="left"
                            tabDirection="vertical"
                        >
                            <div style={{ height: "546.6", flexGrow: "1", backgroundColor: '#fff', padding: '5px' }}>
                                <Flex  >
                                    <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>精品</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>特色</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>奶茶</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>茶</p></Flex.Item>

                                </Flex>
                                <Flex style={{ marginTop: "5px" }}>
                                    <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>咖啡</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#f44336", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>果汁</p></Flex.Item>
                                </Flex>
                            </div>
                            <div style={{height: "546.6", flexGrow: "1", backgroundColor: '#fff', padding: '5px' }}>

                                <Flex  >
                                    <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>中式甜品</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>西式甜品</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>港式甜品</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#2196f3", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>日式甜品</p></Flex.Item>

                                </Flex>

                            </div>
                            <div style={{ height: "546.6", flexGrow: "1", backgroundColor: '#fff', padding: '5px' }}>
                                <Flex  >
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>少儿童书</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>教育考试</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>经济金融</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>生活休闲</p></Flex.Item>
                                </Flex>
                                <Flex  style={{ marginTop: "5px" }}>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>科学技术</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>经济</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>文化</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>科学</p></Flex.Item>
                                </Flex>
                                <Flex  style={{ marginTop: "5px" }}>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>教育</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>文学</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>艺术</p></Flex.Item>
                                    <Flex.Item style={{ backgroundColor: "#009688", height: 45 }}><p style={{ textAlign: "center", color: 'white' }}>医药</p></Flex.Item>
                                </Flex>
                            </div>
                        </Tabs>
                        <WhiteSpace />
                    </div> */}



            </Fragment>
        );
    }

}

export default Shope;
