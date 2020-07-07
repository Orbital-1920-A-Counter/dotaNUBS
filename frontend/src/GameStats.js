import React from 'react'
import { Table } from 'react-bootstrap'
import FilteredHeroes from './FilteredHeroes'
import FilteredItems from './FilteredHeroes'
import GameMode from './GameMode'
import constantgamemode from '../src/constants/ConstantGameMode.json'

class GameStats extends React.Component {
	constructor () {
		super()
		this.state = {
			gamedata: [],
			picks_bans: []
		} 
	}

	componentDidMount () {
		const matchid = this.props.match.params.matchid
		fetch(`https://api.opendota.com/api/matches/${matchid}`)
		.then(results => { return results.json() })
		.then((data) => {
			this.setState({
				gamedata: data,
				picks_bans: data.picks_bans
			})
		})

	}

	render () {
		return (
			<div className='main-heroes'>
		   <div style={{fontSize: 48}}>Match Analysis</div>

			<hr/>
			<div className='heroes'>
				
					<div  className='hero-list' >
					{(this.state.picks_bans)}
					</div>
			</div>
			</div>
			)
	}
}
export default GameStats