import React,{useState,useRef} from 'react'
import '../css/style.css'

import about_man from '../images/about_man.png'

export default function About() {

    var [aboutMoreStatus,setAboutMoreStatus] = useState('more')
    var moreAboutRef = useRef()

    const onClick=(event)=>{
        let {id,value} = event.target;
        if(id == 'about_more_btn'){
            if(value == 'more'){
               setAboutMoreStatus('less')
               // moreAboutRef.current.classList.toggle('hide_more_about')
               moreAboutRef.current.style.display = 'unset'
            }if(value == 'less'){
                setAboutMoreStatus('more')
                moreAboutRef.current.style.display = 'none'
            }
        }
    }

    return (
    <div>   
        
        <div id="about" className="about_div">
            <div className="about_man_div">
               <img className="about_man"  src={about_man}/>
            </div>
            <div className="about_message_div_1">
               <p>A web developer is a programmer who specializes in, or is specifically 
                   engaged in, the development of World Wide Web applications using a 
                   client–server model. A web content management system is often used 
                   to develop and maintain web applications.
               </p>
               <button onClick={onClick} value={aboutMoreStatus} className="more_btn" id="about_more_btn">{aboutMoreStatus}</button>
            </div>
        </div>
        
        <div style={{display:'flex',flexDirection:'row'}}>
            <div className="about_empty">
            </div>
            <div style={{display:'none'}} ref={moreAboutRef} className="about_message_div_2">
               <p>a person who imagines how something could be made and draws plans for it</p>
               <p><b>Web design refers to the design of websites that are displayed on the
                    internet. It usually refers to the user experience aspects of website 
                    development rather than software development. A web designer works on 
                    the appearance, layout, and, in some cases, content of a website.
               </b></p>
            </div>
        </div>
    
    </div> 
    )
}
