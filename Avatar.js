import React, { Component } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

class Avatar extends Component{
    constructor(){
        super();
        this.state={
            name:"Welecome to Heshma Mustafa"
        }
    }
    titlechange(){
        this.setState({
            name:"Welcome to Complete Our Simple Web Page Today Successfully Thanx"
        })
    }
render()
{
    const avatarlistarray=[
        {
            id:1,
            name:"Heshma Mustafa",
            work:"Django Developer"
        },
        {
            id:2,
            name:"Heshma Ali",
            work:"Django Developer"
        },
        {
            id:3,
            name:"Heshma Asad",
            work:"Django Developer"
        },
        {
            id:4,
            name:"Usman Abid",
            work:"React Developer"
        }
    ]
    const avatarcardarray=avatarlistarray.map((avatarcard,i)=>
    {
        return <Avatarlist id={avatarlistarray[i].id}
        name={avatarlistarray[i].name}
        work={avatarlistarray[i].work}
        />
    })
    return(
    <div className="mainpage">
    <h1>{this.state.name}</h1>
    {avatarcardarray}
    <button onClick={()=> this.titlechange()}>Change Title</button>
</div>
) 
}
    }
    
    

export default Avatar;
