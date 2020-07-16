import React from 'react'
import { Table } from 'react-bootstrap'
import FilteredHeroes from './FilteredHeroes'
import itemid from '../src/constants/ItemID.json'

class HeroStats extends React.Component {
	constructor () {
		super()
		this.state = {
			heroData: [],
			singleHeroData: [],
			matchups: [],
			wr : {winrate: ''},
			heroes : [],
			bestplayer :[],
            itempopularity:{'start_game_items':[] , 'early_game_items':[] , 'mid_game_items':[], 'late_game_items':[] },
            startgameitems: [],
            earlygameitems: [],
            midgameitems: [],
            lategameitems:[]
        }
    }

    componentDidMount() {
      const heroid = this.props.match.params.heroid
      fetch(`https://api.opendota.com/api/heroStats`)
      .then(results => { return results.json() })
      .then((data) => {
         this.setState({
            heroes: data,
            heroData: data.filter(
               (filtered => {
                  return filtered.id === parseInt(this.props.match.params.heroid)
              })
               )
        })
     })

      fetch(`https://api.opendota.com/api/heroes`)
      .then(results => { return results.json() })
      .then((data) => {
         this.setState({
            singleHeroData: data.filter(
               (filtered => {
                  return filtered.id === parseInt(this.props.match.params.heroid)
              })
               )
        })
     })

      fetch(`https://api.opendota.com/api/heroes/${heroid}/matchups`)
      .then(results => { return results.json() })
      .then((data) => {
         this.setState({
            matchups: data
        })
     })


      fetch(`https://api.opendota.com/api/heroes/${heroid}/ItemPopularity`)
      .then(results => { return results.json() })
      .then((data) => {
        this.setState({
            itempopularity: data,
            startgameitems: data.start_game_items,
            earlygameitems: data.early_game_items,
            midgameitems: data.mid_game_items,
            lategameitems: data.late_game_items


        })
    })



  }
  heroRoles = (role) => {
      var roles = '';        
      for (var i = 0; i < role.length; i++) {
         if (i === role.length-1) {                
            roles = roles + role[i]
        } else {
            roles = roles + role[i] + ' - '
        }
    }
    return roles
}

heroPrimaryAttr = (attr) => {
  if (attr === 'str') {
     return 'Strength'
 } else if (attr === 'agi') {
     return 'Agillity'
 } else if (attr === 'int') {
     return 'Intellect'
 }
}


render() {        
  return (
     <div className='main-herostats'>                                                 
     {this.state.heroData.map(                    
        ((repo, index)=> {                            
           return (
              <div key={index}>
                                <img src={`https://api.opendota.com${repo.img}`} alt='hero' style={{borderRadius: 5}}/>
                                <div style={{fontSize: 48}}>{repo.localized_name}</div>
                                <div>Primary Attribute:  {this.state.singleHeroData.map(rep => {return this.heroPrimaryAttr(rep.primary_attr)})}</div>
                                <div style={{textTransform: "uppercase"}}>{this.heroRoles(repo.roles)}</div>                                
                                <hr />
                                <div style={{fontSize: 24}}>
                                    <img src={`https://api.opendota.com${repo.icon}`} alt='icon' /> Hero stats detail
                                    </div>
                                    <br />
                                    <Table striped bordered condensed>                                
                                    <tbody>
                                    <tr>
                                    <td><span>HP: </span> <span>{repo.base_hp}</span></td>
                                    <td><span>Strength: </span> <span>{repo.base_str}</span></td>
                                    <td><span>Attack range: </span> <span>{repo.attack_range}</span></td>
                                    </tr>
                                    <tr>
                                    <td><span>HP Regen: </span> <span>{repo.base_health_regen}</span></td>
                                    <td><span>Agillity: </span> <span>{repo.base_agi}</span></td>
                                    <td><span>Attack rate: </span> <span>{repo.attack_rate}</span></td>
                                    </tr>
                                    <tr>
                                    <td><span>MP: </span> <span>{repo.base_mana}</span></td>
                                    <td><span>Intellect: </span> <span>{repo.base_int}</span></td>
                                    <td><span>Attack type: </span> <span>{repo.attack_type}</span></td>
                                    </tr>
                                    <tr>
                                    <td><span>MP Regen: </span> <span>{repo.base_mana_regen}</span></td>
                                    <td><span>Base Armor: </span> <span>{repo.base_armor}</span></td>
                                    <td><span>Move Speed: </span> <span>{repo.move_speed}</span></td>
                                    </tr>          
                                    </tbody>                              
                                    </Table>
                                    <hr />

                                    <div style={{fontSize: 18}}>Pro Player Matchups</div>
                                    <Table style={{ width: 900 }} responsive hover>
                                    <thead>
                                    <tr>
                                    <td><b> ENEMY HERO </b></td>
                                    <td><b> MATCHES </b></td>
                                    <td><b> WINS </b></td>
                                    <td><b>WIN RATE </b></td>
                                    </tr>
                                    </thead>         
                                    {this.state.matchups.map( repo => {
                                    	return(
                                      <tbody key={repo.match_id} >
                                      <td>
                                      <FilteredHeroes hero_id={repo} heroes={this.state.heroes} /> 
                                      </td>
                                      <td>
                                      {repo.games_played}
                                      </td>
                                      <td>
                                      {repo.wins}
                                      </td>
                                      <td>
                                      <div 
                                      style={{
                                         color: repo.wins /(repo.games_played) *100 > 50 ? 'green' : 'red'}}
                                         >
                                         <p> {parseFloat(repo.wins/(repo.games_played)*100).toFixed(2)} </p> 
                                         </div>                                	
                                         </td>
                                         </tbody>
                                         )

                                     }) }
                                     </Table>                   



                                     </div>
                                     )
                                 })
                                 )}
                                 <div style={{fontSize: 18}}>Recommended Items</div>
                                 <Table striped bordered condensed>
                                 <thead>
                                 <td> Before Game </td>
                                 <td> Early Game </td>
                                 <td> Mid Game </td>
                                 <td> Late Game </td>
                                 </thead>
                                    <tbody>
                                    <td>
                                    <div align='center'>
                                    <tr>
                                    {Object.keys(this.state.startgameitems)[0] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[0]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.startgameitems)[1] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[1]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[2] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[2]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[3] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[3]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.startgameitems)[4] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[4]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.startgameitems)[5] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[5]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[6] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[6]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[7] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[7]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.startgameitems)[8] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[8]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.startgameitems)[9] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[9]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[10] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[10]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[11] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[11]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.startgameitems)[12] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[12]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.startgameitems)[13] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[13]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[14] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[14]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[15] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[15]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.startgameitems)[16] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[16]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.startgameitems)[17] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[17]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[18] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[18]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.startgameitems)[19] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.startgameitems)[19]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    </div>

                                    </td>
                                    <td>
                                                                        <div align='center'>

                                    <tr>
                                    {Object.keys(this.state.earlygameitems)[0] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[0]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.earlygameitems)[1] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[1]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[2] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[2]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[3] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[3]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.earlygameitems)[4] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[4]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.earlygameitems)[5] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[5]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[6] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[6]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[7] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[7]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.earlygameitems)[8] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[8]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.earlygameitems)[9] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[9]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[10] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[10]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[11] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[11]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.earlygameitems)[12] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[12]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.earlygameitems)[13] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[13]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[14] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[14]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[15] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[15]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.earlygameitems)[16] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[16]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.earlygameitems)[17] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[17]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[18] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[18]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.earlygameitems)[19] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.earlygameitems)[19]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    </div>
                                    </td>
                                    <td>
                                                                        <div align='center'>

                                    <tr>
                                    {Object.keys(this.state.midgameitems)[0] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[0]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.midgameitems)[1] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[1]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[2] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[2]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[3] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[3]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.midgameitems)[4] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[4]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.midgameitems)[5] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[5]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[6] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[6]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[7] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[7]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.midgameitems)[8] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[8]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.midgameitems)[9] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[9]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[10] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[10]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[11] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[11]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.midgameitems)[12] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[12]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.midgameitems)[13] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[13]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[14] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[14]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[15] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[15]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.midgameitems)[16] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[16]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.midgameitems)[17] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[17]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[18] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[18]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.midgameitems)[19] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.midgameitems)[19]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    </div>
                                    </td>
                                    <td>
                                                                        <div align='center'>

                                    <tr>
                                    {Object.keys(this.state.lategameitems)[0] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[0]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.lategameitems)[1] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[1]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[2] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[2]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[3] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[3]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.lategameitems)[4] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[4]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.lategameitems)[5] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[5]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[6] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[6]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[7] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[7]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.lategameitems)[8] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[8]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.lategameitems)[9] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[9]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[10] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[10]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[11] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[11]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                     <tr>
                                    {Object.keys(this.state.lategameitems)[12] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[12]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.lategameitems)[13] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[13]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[14] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[14]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[15] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[15]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    <tr>
                                    {Object.keys(this.state.lategameitems)[16] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[16]]}_lg.png`} style={{width: 40,height:30}}/> : ""} 
                                    {Object.keys(this.state.lategameitems)[17] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[17]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[18] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[18]]}_lg.png`} style={{width: 40,height:30}}/> : ""}
                                    {Object.keys(this.state.lategameitems)[19] > "" ?<img src={`https://api.opendota.com/apps/dota2/images/items/${itemid[Object.keys(this.state.lategameitems)[19]]}_lg.png`} style={{width: 40,height:30}}/>  : ""}                                  
                                    </tr>
                                    </div>
                                    </td>
                                    </tbody>

                                    </Table>

                                    </div>

                                    )
                                }
                            }

                            export default HeroStats