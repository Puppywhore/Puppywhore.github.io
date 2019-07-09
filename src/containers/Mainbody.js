import React from "react";
import {GetText} from "../functions/getText";
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time:0,
            rules:{
                start:"Like this",
                power: true
            },
            pen:false,
            title: "Start",
            body: null,
            bool: true
        }
    }

    action = (object) =>{
        this.setState({...this.state,...object},()=>console.log(this.state))
    }

    Progress = (e) =>{
        e.preventDefault();
        this.setState({...this.state, time: this.state.time + 1})
    }

    render(){
        return(
            <div className="bg-dark">
                <h1 className="text-light text-center">{this.state.title}</h1>
                <div className="col-6 offset-3">
                    <GetText title={this.state.title} bool={this.state.bool} rules={this.state.rules} action={(object)=>this.action(object)} time={this.state.time}/>
                    <button className="btn btn-block sticky-bottom btn-light" onClick={this.Progress}>Progress</button>
                </div>
            </div>
        )
    }
        
}
export default Main