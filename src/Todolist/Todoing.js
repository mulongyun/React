import React, {Fragment, Component } from 'react';

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <Fragment>
                <h1>正在进行<span>{this.props.doingnum}</span> </h1>
                <ol>{
                    todo.map((item,idx) => {
                        if(!item.done){
                            return(
                                <li key={idx}>
                                    <input type='checkbox' onClick={()=>this.props.modify(idx)}/>
                                    <p>{item.name}</p>
                                    <button onClick={()=>this.props.del(idx)}>删除</button>
                                </li>
                            )
                        }else{
                            return ('')
                        }
                    })     
                }
                </ol>
                
                <h1>已完成 <span>{this.props.finishnum}</span> </h1>
                <ol>{
                    todo.map((item,idx) => {
                        if(item.done){
                            return(
                                <li key={idx}>
                                    <input type='checkbox' onClick={()=>this.props.modify(idx)} checked="checked"/>
                                    <p>{item.name}</p>
                                    <button onClick={()=>this.props.del(idx)}>删除</button>
                                </li>
                            )
                        }else{
                            return ('')
                        }
                    })     
                }
                </ol>
            </Fragment>
        )
    }
}