import React, { Component } from 'react'

export default class App extends Component {
  state = {
    fullname: "skander hidri",
    bio: "this is my bio",
    profession: "this is my profession",
    isvisible: false,
    intervall:null,
    timer:0,
  };
componentDidMount(){
  console.log("componentDidMount()");
  this.setState({
    intervall : setInterval(() => {
      this.setState({timer: this.state.timer +1})
    }, 1000)
  })
}

componentDidUpdate() {
  console.log("componentDidUpdate()");

}

  toggleVisibilisty = () => {
    this.setState({
      isvisible: !this.state.isvisible
    })
  }

  render() {
    return (

      <div className='information'>
        <button className='visibility-btn' onClick={this.toggleVisibilisty} >show information </button>
        {this.state.isvisible ? (
          <Comp fullname={this.state.fullname}
            bio={this.state.bio}
            profession={this.state.profession}
            timer={this.state.timer}
          ></Comp>) : (<h4>click on button to see information</h4>)}   
          
      </div>

    )
  }
}


function Comp(props) {
  return (
    <div style={{background:"light grey",margin:"70px",}}>
             <img style={{border: "2px solid red",
  radius: "50px",
  padding: "50px",
}} src="https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/87793628_2923341301052170_1429271657620439040_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6iY7nsVC7_AAX8Qh20c&_nc_ht=scontent.ftun7-1.fna&oh=00_AT_rEdRX-clh1G1LyD4KliEZeatSNW21l2dyN54rWO6gcQ&oe=62584CFE"  />

       <h1 style={{color: "red", }}>{props.fullname}</h1>
      <h2 style={{color:"green"}}> {props.bio} </h2>
      <h3 style={{color:"violet"}}>{props.profession}  </h3>
      <h2 style={{color:"purple"}}>{props.timer}</h2>   
      </div>
  )
}
