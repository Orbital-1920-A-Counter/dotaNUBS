import React, { Component } from "react";
import { Link } from "react-router-dom";
import getData from "get_data";


export default class HeroesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchHero = this.onChangeSearchHero.bind(this);
    this.getHero = this.getHero.bind(this);
    this.setSelectedHero = this.setSelectedHero.bind(this);
    this.getInfo = this.getInfo.bind(this);
     this.state = {
      heroes: [],
      searchHero: "",
      id: 0,
      selectedHero : "",
      hero_data: [],
    };
  }

  onChangeSearchHero(e) {
    const searchHero = e.target.value;
    this.setState({
      searchHero: searchHero
    });
  }

  getHero() {
    getData.get_heroes()
    .then(response => {
      this.setState({
        heroes: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  } 

    setSelectedHero(n){
        this.setState({id :n});
    }
    getInfo(hero){
      
    }


  render() {
    const { heroes, searchHero, id, selectedHero } = this.state;

    return (
      <div>
     <div className="list row">
     <div className="col-md-8">
     <div className="input-group mb-1">
     <input type="text"  className="form-control" placeholder="Search by hero" value={this.searchHero} onChange={this.onChangeSearchHero}/>
     <button  className="btn btn-outline-secondary"  type="button"  onClick={this.getHero}> Search </button> 
     </div>
     </div>
     </div>
     <div className = "list-group">
     <div className="list-group">
     {heroes &&  heroes.map((heroes) => ( <li className={"list-group-item " +(heroes)}  onClick={() => alert(heroes.name)}> {heroes.localized_name}</li> ))}
      </div>
      </div>
      </div>
      )
  }
}
