import React, { Component, Fragment } from 'react';
import { NoticeBar, Carousel, WingBlank, SearchBar, Flex } from 'antd-mobile';



class Home extends Component {

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }


    constructor(props) {
        super(props)


        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 130,
        }
    }

    render() {
        return (
            <Fragment>
                <SearchBar placeholder="摆渡人" maxLength={8} />
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <Flex style={{ margin: "5px 0" }}>
                    <Flex.Item><div className="col_center"> <img style={{ height: 48, width: 48, borderRadius: 5 }} src={"../static/img/22.png"} /> </div><p style={{ textAlign: "center", color: 'rgb(30, 30, 30)', margin: 0, fontSize: "0.625rem" }}>排行榜</p></Flex.Item>
                    <Flex.Item><div className="col_center"> <img style={{ height: 48, width: 48, borderRadius: 5 }} src={"../static/img/22.png"} /></div><p style={{ textAlign: "center", color: 'rgb(30, 30, 30)', margin: 0, fontSize: "0.625rem" }}>活动</p></Flex.Item>
                    <Flex.Item><div className="col_center"> <img style={{ height: 48, width: 48, borderRadius: 5 }} src={"../static/img/22.png"} /></div><p style={{ textAlign: "center", color: 'rgb(30, 30, 30)', margin: 0, fontSize: "0.625rem" }}>优惠券</p></Flex.Item>
                    <Flex.Item><div className="col_center"> <img style={{ height: 48, width: 48, borderRadius: 5 }} src={"../static/img/22.png"} /></div><p style={{ textAlign: "center", color: 'rgb(30, 30, 30)', margin: 0, fontSize: "0.625rem" }}>新书</p></Flex.Item>
                </Flex>
                <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
                    天气转凉,试试新推出的xxx热饮吧
    </NoticeBar>
                <img style={{ width: "100%", borderRadius: 5 }} src={"../static/img/11.png"} />
                <div className="row_center">
                    <div className="col_center" style={{ flexGrow: "1" }}>
                        <img style={{ width: "100%", height: "100%" }} src={"https://img1.xinhuashudian.com/images/2018/11/08/a9fe86da-fdd9-4548-8434-c3caafee0a50.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_212/format,webp"} />
                    </div>
                    <div className="col_center" style={{ flexGrow: "1" }}>
                        <img style={{ width: "100%", height: "100%" }} src={"https://img1.xinhuashudian.com/images/2018/11/08/a9fe86da-fdd9-4548-8434-c3caafee0a50.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_212/format,webp"} />
                    </div>
                </div>
                <div className="row_center">
                    <div className="col_center" style={{ flexGrow: "1" }}>
                        <img style={{ width: "100%", height: "100%" }} src={"https://img1.xinhuashudian.com/images/2018/11/08/a9fe86da-fdd9-4548-8434-c3caafee0a50.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_212/format,webp"} />
                    </div>
                    <div className="col_center" style={{ flexGrow: "1" }}>
                        <img style={{ width: "100%", height: "100%" }} src={"https://img1.xinhuashudian.com/images/2018/11/08/a9fe86da-fdd9-4548-8434-c3caafee0a50.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_212/format,webp"} />
                    </div>
                </div>
                {/* <div className="row_center" style={{width:"100%",height:50}}>
                    <img style={{ flexGrow: "1" }} src={"https://img1.xinhuashudian.com/images/2018/11/08/a9fe86da-fdd9-4548-8434-c3caafee0a50.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_212/format,webp"} />
                    <img style={{ flexGrow: "1" }} src={"https://img1.xinhuashudian.com/images/2018/11/08/a9fe86da-fdd9-4548-8434-c3caafee0a50.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_212/format,webp"} />
                    <img style={{ flexGrow: "1" }} src={"https://img1.xinhuashudian.com/images/2018/11/08/a9fe86da-fdd9-4548-8434-c3caafee0a50.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_212/format,webp"} />
                </div> */}
                {/* <div style={{ padding: '15px 0' }}>
                    <WingBlank><PlaceHolder style={{ color: "black" }} /></WingBlank>
                </div>
                <div className="row" style={{ padding: "5px", marginTop: 5, height: 100 }}> <img style={{ height: 70, width: 70, borderRadius: 5 }} src={"../static/img/nai1.jpg"} /> <div className="col_center" style={{ flexGrow: "1" }}><p style={{ flexGrow: "1", wordWrap: "break-word", width: "270px" }}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p><p>分类 XXX-XXX</p></div></div>
                <div className="row" style={{ padding: "5px", marginTop: 5, height: 100 }}> <img style={{ height: 70, width: 70, borderRadius: 5 }} src={"../static/img/nai2.jpg"} /> <div className="col_center" style={{ flexGrow: "1" }}><p style={{ flexGrow: "1", wordWrap: "break-word", width: "auto" }}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p> <p>分类 XXX-XXX</p></div></div>
                 */}
                <Flex >
                    <Flex.Item><div className="col_center"> <img style={{ height: 76, width: "auto", borderRadius: 5 }} src={"https://img1.xinhuashudian.com/images/2018/11/09/756a495a-b978-425d-bad3-0b27f374e93a.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_154/format,webp"} /> </div></Flex.Item>
                    <Flex.Item><div className="col_center"> <img style={{ height: 76, width: "auto", borderRadius: 5 }} src={"https://img1.xinhuashudian.com/images/2018/11/09/3d230093-6d54-4b95-96bd-e33265656c7e.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_154/format,webp"} /></div></Flex.Item>
                    <Flex.Item><div className="col_center"> <img style={{ height: 76, width: "auto", borderRadius: 5 }} src={"https://img1.xinhuashudian.com/images/2018/11/09/f367b358-a380-4fb4-9823-7874e8c4c7ea.png?x-oss-process=image/resize,m_lfit,limit_0,h_154/format,webp"} /></div></Flex.Item>

                </Flex>
            </Fragment>
        );
    }

}

export default Home;
