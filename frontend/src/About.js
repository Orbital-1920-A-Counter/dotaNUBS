import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
    render () {
        return (
<div className='main-heroes'>
                <div style={{fontSize: 18, fontWeight: 'bold'}}>About DotaNUBS</div>
                <hr/>

                <p> DotaNUBS is a NUS CP2106 Project by Dick Jessen William and Mario Lorenzo.
                 This project uses React.js for the frontend and deploys OpenDoTA API to fecth data.  </p>
            </div>            
            )
    }
    
}

export default About 