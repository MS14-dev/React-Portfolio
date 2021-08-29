import React, { Component } from 'react'
import title_man from '../images/title_man.png'

import '../css/style.css'

class Header extends Component{

    state={
        name:'Williom McLuhan'
    }

    onMouseEnter=(event)=>{
        event.target.classList.toggle('title_man_img_toggle')
    }
    onMouseLeave=(event)=>{
        event.target.classList.toggle('title_man_img_toggle')
    }

    render(){
        let {name} = this.state
        return(
            <div id="header" className="header">
                <div className="header_inner_4">
                  
                </div>
                <div className="header_inner_3">
                   <h1>{name}</h1>
                   <h4>Designer | Developer | Creator</h4>
                </div>
                <div className="header_inner_2">
                   <div>
                       <a href="#about">about</a>
                       <a href="#projects">projects</a>
                       <a href="#contact">contact</a>
                   </div>
                </div>
                <div className="header_inner_1">
                  <img onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className="title_man_img"  src={title_man}/>
                </div>
            </div>
        )
    }
}
export default Header;