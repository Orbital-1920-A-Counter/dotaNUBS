import React from 'react'
import { Link } from 'react-router-dom'

class Pro extends React.Component {
    constructor () {
        super()
        this.state = {
            pro: []
        }
    }
    
    componentDidMount () {
        fetch(`https://api.opendota.com/api/proPlayers`)
        .then(results => { return results.json() })
        .then((data) => {
            this.setState({
                pro: data
            })
        })        
    }

    render () {
        return (
            <div className='main-heroes'>
                <div style={{fontSize: 18, fontWeight: 'bold'}}>Pro Players</div>
                <hr/>
                <div className='heroes'>
                    {this.state.pro.map((repo, index) => {
                        return (
                            <div key={index} className='hero-list' >
                                <div>{repo.personaname}</div>
                                <div>
                                    <Link to={`/match/${repo.account_id}`}>
                                        <img alt='Hero'  
                                            src={`${repo.avatarmedium}`} 
                                            style={{width: 150}}
                                        />
                                    </Link>                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    
}

export default Pro