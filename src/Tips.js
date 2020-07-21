import React from 'react'
import { Link } from 'react-router-dom'
import tips from '../src/constants/Tips.json'

class Tips extends React.Component {
    


    render () {
        return (
				<div className='main-heroes'>
                <div style={{fontSize: 20, fontWeight: 'bold'}}>Dota 2 Tips</div>
                <hr/>
                <div style={{fontSize: 18, fontWeight: 'bold'}}>Beginner</div>
                <div>{tips.introduction.map(repo => 
                	<div  style={{fontSize: 14}}> <li> {repo} </li> </div>
                	)}
                </div>
                <hr/>

                <div style={{fontSize: 18, fontWeight: 'bold'}}>Intermediate</div>
                <div>{tips.intermediate.map(repo => 
                	<div  style={{fontSize: 14}}> <li> {repo} {"\n"} </li> </div>
                	)}
                </div>
                <hr/>
                <div style={{fontSize: 18, fontWeight: 'bold'}}>Advanced</div>
                <div>{tips.advanced.map(repo => 
                	<div  style={{fontSize: 14}}> <li> {repo} </li> </div>
                	)}
                </div>



            </div>            
            )
    }
    
}

export default Tips 