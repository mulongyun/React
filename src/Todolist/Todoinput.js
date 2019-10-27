import React,{Component} from 'react';

export default class Todoinput extends Component{
    render(){
        return(
            <div id='ToDo'>
                <div id='ToDoList'>输入添加事项：</div>
                <input id='Input' onKeyDown={(e)=>{if(e.target.value && e.keyCode === 13){this.props.add(e.target.value);e.target.value = '';}}} 
                       type="text" placeholder="添加待办事项"/>
            </div>
        )
    }
}