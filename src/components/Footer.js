import React,{useEffect,useState} from 'react'
import fb from '../images/facebook.png'
import lin from '../images/linkedin.png'

export default function Footer() {
    var news = ["Developer","Designer","Creator","Williom McLuhan"]
    var i = 0
    var [add,setAdd] = useState('')
    useEffect(()=>{
       setInterval(()=>{
           if(i < news.length){
               setAdd(news[i])
               i++
           }else{
               i=0
               setAdd(news[i])
           }
         },5000)
    },[])
    return (
        <div className="footer_root_div">
          <div className="footer_empty_div">
             <h1 className="footer_carousel">{add}</h1>
          </div>
          <div className="footer_outer">
             <div className="footer_inner_1">
                 <p>All Rights Received &copy;</p>
                 <p>foxbot IT solutions 2020-2021</p>
             </div>
             <div className="footer_inner_2">
             </div>
             <div className="footer_inner_3">
                 <a href="#"><img className="social_icons" src={fb} /></a>
                 <a href="#"><img className="social_icons" src={lin} /></a>
             </div>
          </div>
        </div>
    )
}
