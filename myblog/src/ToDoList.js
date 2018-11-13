import React, { Component, Fragment } from 'react';
import { Input } from 'antd';
import  axios  from 'axios';

class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['asd', 'asdas', 'asdasdzwqed']
        }
    }

    render() {
        return (
            <Fragment>
                <input value={this.state.inputValue}
                    onChange={this.handleInoutChange.bind(this)} />
                <button onClick={this.handleButtonClick.bind(this)}>确定</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleLiClick.bind(this, index)}>{item}</li>
                        })
                    }

                </ul>
                <Input placeholder="Basic usage" />
            </Fragment>
        );
    }
    handleInoutChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleButtonClick(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
        axios.get('/miao/blog/list')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    handleLiClick(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })

    }
}

export default ToDoList;
