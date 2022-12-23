
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Component } from 'react';
import Profile from './components/Checkpoint/Profile';
import Timer from "./components/Checkpoint/Timer";

    class APP extends Component{
constructor(){
  super();
  this.state={
    fullname:"AYED IBTISSEM",
  show:false,
  };
}
Showprofile=()=>{
this.setState({show:!this.state.show})
};



render (){
  let fullname=this.state.fullname;

  return <div className="d">

<div

style={{

   backgroundImage: `url("https://en.yeeply.com/wp-content/uploads/2020/01/web_application-development_design.jpg")`,backgroundRepeat: 'no-repeat',width:'2200px',height:
   '600px',color:'white'

}}>

<h style={{fontSize:"25px",margin:"150px",color:"blue"}}>{fullname}</h>

<button  style={{color:"blue",marginTop:"120px"}} onClick={()=>this.Showprofile()} >{this.state.show ? "hide Profile":"show Profile"}</button>
{this.state.show && <Profile/>}

<Timer></Timer>

</div>






  </div>;
   
}

    }

   
    export default APP;
