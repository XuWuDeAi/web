import React, { Component, Fragment } from 'react';
import { Tabs } from 'antd-mobile';
import { Card, Button, Carousel, WingBlank } from 'antd-mobile';
import Home from './pape/Home'
import Shope from './pape/Shope'
import Cart from './pape/Cart'

const tabs = [
    { title: '首页', sub: '1' },
    { title: '商品', sub: '2' },
    { title: '购物栏', sub: '3' },
];


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }
    }

    render() {
        return (
            <Fragment>
                <div className="col" style={{ height: "100%" }}>
                    <div style={{ height: 200 ,flexGrow: "2" }}>
                        <Tabs tabs={tabs} className="col" style={{  height: "590px",flexGrow: "2" }}
                            swipeable={false}
                            initialPage={1}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div style={{ height: "546.6", flexGrow: "1", backgroundColor: '#fff' ,padding:2,overflowY:"auto"}}>
                                <Home />
                            </div>
                            <div className="row" style={{ height: "546.6", flexGrow: "1", backgroundColor: '#fff',padding:3,height:"100%" }}>
                             <Shope/>
      </div>
                            <div style={{height: "546", flexGrow: "1", backgroundColor: '#fff' }}>
                             <Cart/>
      </div>
                        </Tabs>
                    </div>
                    <div >

                        <div style={{ backgroundColor: "white" }}>
                            <Card.Header
                                title="共0件"
                                thumb='../static/img/gouwu.svg'
                                extra={
                                    <div className="row_center" >
                                        <span style={{ color: "rgb(198, 47, 46)", flexGrow: "1"}}>$0 </span>
                                       <div style={{ flexGrow: "0.6"}} ></div>
                                        <Button type="primary" size="small" inline>下单</Button>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }

}

export default App;
