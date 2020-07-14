import React from 'react'
import Text from 'react'
import { Table } from 'react-bootstrap'
import FilteredHeroes from './FilteredHeroes'
import FilteredItems from './FilteredItems'
import GameMode from './GameMode'
import { Navbar, NavItem, Nav, Button, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import constantgamemode from '../src/constants/ConstantGameMode.json'
import itemid from '../src/constants/ItemID.json'


class GameStats extends React.Component {
	constructor () {
		super()
		this.state = {
			gamedata: {'picks_bans': [], 'players':[],'items':[]},
			heroes: [],
			items: [],
			itemid: itemid
		} 
	}

	componentDidMount () {
		const matchid = this.props.match.params.matchid
		fetch(`https://api.opendota.com/api/matches/${matchid}`)
		.then(results => { return results.json() })
		.then((data) => {
			this.setState({
				gamedata: data
			})
		})


		fetch(`https://api.opendota.com/api/heroStats`)
		.then(results => { return results.json() })
		.then((data) => {
			this.setState({
				heroes: data
			})
		})

		fetch(`https://api.opendota.com/api/constants/items`)
		.then(results => { return results.json() })
		.then((data) => {
			this.setState({
				items: data
			})
		})


	}
	getTime = (duration) => {
    var minutes = Math.floor(duration / 60);
    var seconds = duration - minutes * 60;
    if (minutes.toString().length === 1 && seconds.toString().length === 1) {
      return '0' + minutes + ':0' + seconds
    }
    else if (minutes.toString().length === 2 && seconds.toString().length === 1) {
      return minutes + ':0' + seconds
    }
    else if (minutes.toString().length === 1 && seconds.toString().length === 2) {
      return '0' + minutes + ':' + seconds
    }
    else {
      return minutes + ':' + seconds
    }
  }

	render () {
		return (
			<div className='main-heroes'>
			<div style={{fontSize: 108}, {fontWeight: 'bold'}}>Match Analysis</div>
			<div style={{fontSize: 10},{fontWehght:'bold'}}>{this.state.gamedata.skill != 1 ? (this.state.gamedata.skill != 2 ? "Very High Skill" : "High Skill") : "Normal Skill"} Match</div>
			<div style={{fontSize: 10},{fontWehght:'bold'}}>Match time: {this.getTime(this.state.gamedata.duration)} </div>

			<hr/>

			<Table striped bordered condensed>
			<thead>
			<td> Team </td>
			<td> Heroes </td>
			<td> Score </td>
			<td> Outcome </td>

			</thead>
			<tbody>
			<tr>
			<td>
			<div style={{fontSize: 50}, {fontWeight: 'bold'}}>Radiant</div>
			</td>
			<td>
			<div className='heroes'>
			{this.state.gamedata.players.map((repo, index) => {return(
				<div key={index} >
				<div>
				{repo.player_slot <= 127 ? <FilteredHeroes hero_id={repo} heroes={this.state.heroes} /> : ""}                              
				</div>
				<div>
				{repo.player_slot <= 127 ? (repo.account_id < 1 ? "Unknown" : repo.personaname ) : ""}  
				</div>
				</div>
				)})}
			</div>
			</td>
			<td>
			{this.state.gamedata.radiant_score}
			</td>
			<td>
			{this.state.gamedata.radiant_win ? <div style={{fontWeight: 'bold'}}> Win </div> : "Loss"}
			</td>	
			</tr>
			<tr>
			<td>
			<div style={{fontSize: 50}, {fontWeight: 'bold'}}>Dire</div>
			</td>
			<td>
			<div className='heroes'>
			{this.state.gamedata.players.map((repo, index) => {return(
				<div key={index} >
				<div>
				{repo.player_slot > 127 ? <FilteredHeroes hero_id={repo} heroes={this.state.heroes} /> : ""}                              
				</div>
				<div>
				{repo.player_slot > 127 ? (repo.account_id < 1 ? "Unknown" : repo.personaname ) : ""}  
				</div>
				</div>
				)})}
			</div>
			</td>
			<td>
			{this.state.gamedata.dire_score}
			</td>
			<td>
			{!this.state.gamedata.radiant_win ? <div style={{fontWeight: 'bold'}}> Win </div> : "Loss"}
			</td>	
			</tr>
			
			</tbody>
			</Table>
			<div style={{fontSize: 108}, {fontWeight: 'bold'}}>Radiant Stats</div>
			<Table striped bordered condensed>
			<thead>
			<td> Player </td>
			<td> Hero </td>
			<td> Level </td>
			<td> Item Build  </td>
			<td> Kills </td>
			<td> Deaths </td>
			<td> Assists </td>
			<td> Last Hits/Denies </td>
			<td> Total Gold </td>
			<td> Total XP </td>
			</thead>
			{this.state.gamedata.players.map((repo,index) => {return(
				<tbody>
				<td>
				{repo.player_slot <= 127 ? (repo.account_id < 1 ? "Unknown" : repo.personaname ) : ""}  
				</td>
				<td>
				{repo.player_slot <=127 ? <FilteredHeroes hero_id={repo} heroes={this.state.heroes} /> : ""}
				</td>
				<td>
				{repo.player_slot <=127 ? repo.level : ""}
				</td>
				<td>
				 <div style={{textAlign:"left"}}>
				{(repo.player_slot <=127) && (repo.item_0 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_0]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot <=127) && (repo.item_1 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_1]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot <=127) && (repo.item_2 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_2]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot <=127) && (repo.item_3 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_3]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot <=127) && (repo.item_4 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_4]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot <=127) && (repo.item_5 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_5]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				</div>
				</td>
				<td>
				{repo.player_slot <=127 ? repo.kills : ""}

				</td>
				<td>
				{repo.player_slot <=127 ? repo.deaths : ""}
				</td>
				<td>
				{repo.player_slot <=127 ? repo.assists : ""}
				</td>
				<td>
				{repo.player_slot <=127 ? repo.last_hits+"/" : ""} {repo.player_slot <=127 ? repo.denies : ""}
				</td>
				<td>
				{repo.player_slot <=127 ? repo.total_gold : ""}
				</td>
				<td>
				{repo.player_slot <=127 ? repo.total_xp : ""}
				</td>
				</tbody>
				)})}
			</Table>

			<div style={{fontSize: 108}, {fontWeight: 'bold'}}>Dire Stats</div>
			<Table striped bordered condensed>
			<thead>
			<td> Player </td>
			<td> Hero </td>
			<td> Level </td>
			<td> Item Build </td>
			<td> Kills </td>
			<td> Deaths </td>
			<td> Assists </td>
			<td> Last Hits/Denies </td>
			<td> Total Gold </td>
			<td> Total XP </td>
			</thead>
			{this.state.gamedata.players.map((repo,index) => {return(
				<tbody>
				<td>
				{repo.player_slot > 127 ? (repo.account_id < 1 ? "Unknown" : repo.personaname ) : ""}  
				</td>
				<td>
				{repo.player_slot >127 ? <FilteredHeroes hero_id={repo} heroes={this.state.heroes} /> : ""}
				</td>
				<td>
				{repo.player_slot >127 ? repo.level : ""}
				</td>
				<td>
				 <div style={{textAlign:"left"}}>
				{(repo.player_slot >127) && (repo.item_0 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_0]}_lg.png`} style={{width: 40,height:30}} /> ) : ""}
				{(repo.player_slot >127) && (repo.item_1 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_1]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot >127) && (repo.item_2 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_2]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot >127) && (repo.item_3 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_3]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot >127) && (repo.item_4 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_4]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				{(repo.player_slot >127) && (repo.item_5 != 0) ? (<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[repo.item_5]}_lg.png`} style={{width: 40,height:30}}/> ) : ""}
				</div>

				</td>
				<td>
				{repo.player_slot >127 ? repo.kills : ""}

				</td>
				<td>
				{repo.player_slot >127 ? repo.deaths : ""}
				</td>
				<td>
				{repo.player_slot >127 ? repo.assists : ""}
				</td>
				<td>
				{repo.player_slot >127 ? repo.last_hits+"/" : ""} 	{repo.player_slot >127 ? repo.denies : ""}
				</td>
				<td>
				{repo.player_slot >127 ? repo.total_gold : ""}
				</td>
				<td>
				{repo.player_slot >127 ? repo.total_xp : ""}
				</td>

				</tbody>

				)})}
			</Table>
						<a href={`${this.state.gamedata.replay_url}`}><Button type="submit">Download Match Video (.dem Format) </Button></a>

			</div>
			)


		}
	}
	export default GameStats