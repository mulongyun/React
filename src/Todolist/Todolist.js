import React, {Fragment, Component} from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import './Todo.css';
 
export default class Todolist extends Component {
    constructor(props) {
        super(props); 
        let todo = JSON.parse(localStorage.getItem('todo'));
        if(todo){
            this.state = {
                todoList: todo,
                doingnum:0,
                finishnum:0
            }
        }else{
            this.state = {
                todoList: [],
                doingnum:0,
                finishnum:0
            }
        }
        this.addItem=this.addItem.bind(this);
        this.modifyItem=this.modifyItem.bind(this);
        this.delItem=this.delItem.bind(this);
    }
    addItem = (data) => {
        let item = {"name": data, "done": false};
        this.setState({
            todoList: [...this.state.todoList, item]
        }, ()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todoList));
        })
    }
    
    modifyItem = (idx) => {
        let item = this.state.todoList;
        item[idx].done = !(item[idx].done);
        this.setState({
            todoList: item
        })
    }

    delItem = (idx) => {
        let item = this.state.todoList;
        item.splice(idx, 1);
        this.setState({
            todoList: item
        });
    }

    render() {
        localStorage.setItem('todo',JSON.stringify(this.state.todoList));
        this.state.doingnum = this.state.finishnum = 0;
        let item = this.state.todoList;      
        for(var i in item){
            if(item[i].done){
                this.state.finishnum++;
            }else{
                this.state.doingnum++;
            }
        }

        return (
            <Fragment>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todoList} modify={this.modifyItem} doingnum={this.state.doingnum} finishnum={this.state.finishnum}/>
            </Fragment>
        )
    }
}