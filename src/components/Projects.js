import React,{useState} from 'react'
import { useSpring, animated } from 'react-spring'
import '../css/style.css'

export default function Projects() {
    
    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: 127,
      delay: 50,
      //config: config.molasses,
      //onRest: () => set(!flip),
    })

    const onMouseEnter=(e)=>{
      e.target.classList.add('project_div_event')
    }
    const onMouseLeave=(e)=>{
      e.target.classList.remove('project_div_event')
    }
    
    return (
        <div id="projects" className="project_outer">
            <div className="project_empty_div">

            </div>
            <div className="project_inner">
               <h1 className="project_title">Projects</h1>
               <div className="project_holder_div">
                  <div className="project_1_div" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
                    <h1>Store Web UI</h1>
                    <p>Project two description here</p>
                  </div>
                  <div className="project_2_div" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
                    <h1>York College</h1>
                    <p>Full website with LMS facilities for school</p>
                  </div>
                  <div className="project_count_div">
                    <h1>Total Projects</h1>
                    <animated.div style={{color:'white',fontSize:50,textAlign:'center'}}>{number.to(n => n.toFixed(0))}</animated.div>
                  </div>
               </div>
               <button  className="more_btn" id="projects_more_btn">more</button>
            </div>
        </div>
    )
}

