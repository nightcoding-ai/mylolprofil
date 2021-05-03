import React from 'react';
import '../../App.css';
import './Middle.css';
import video from '../../tempfiles/yone-fanart-login-screen-animation-loop-league-of-legends.mp4'
import axios from 'axios';

let data = Object;
class Middle extends React.Component{

  handleClick(){
    let server_selected = document.getElementById('servers').value;
    let summoner = document.getElementById('summoner').value;
    let section = document.getElementById('profile');
    let summonerId = String;
    const RiotSummoner = '.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
    const RiotFlex = ".api.riotgames.com/lol/league/v4/entries/by-summoner/";
    const RiotMastery = '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/';
    const API_DEV = '?api_key=RGAPI-dec6207c-df81-4d1c-90ca-aa82e8509177';

    axios.get(`https://`+server_selected+RiotSummoner+summoner+API_DEV)
      .then(res => {
        data = res.data;
        summonerId = res.data.id;
        section.innerHTML = "<div id='Level' class='level_profile'>"+String(data.summonerLevel)+
        "</div><div id='summoner_name' class='summoner_profile'>"+String(data.name)+"</div><div id='stats' class='stats_profile'></div>";
        //return axios.get(`https://`+server_selected+RiotMastery+summonerId+API_DEV);
        return axios.get(`https://`+server_selected+RiotFlex+summonerId+API_DEV);
        })
      .then(res => {
        data = res.data;
        const stats = document.getElementById('stats');
        for (let i = 0; i < data.length; i++) {
          if(data[i].queueType === "RANKED_SOLO_5x5"){
            stats.innerHTML += "Rang Solo/Duo: " + data[i].tier + " " + data[i].rank + "<br>";
            stats.innerHTML += "Pourcentage de victoire: "+ Math.round(data[i].wins/(data[i].wins+data[i].losses)*100)+"%<br>";
            stats.innerHTML += "Victoires:"+ String(data[i].wins) + " /Défaites: " + String(data[i].losses)+"<br>";
          }
          if (data[i].queueType === "RANKED_FLEX_SR"){
            stats.innerHTML += "Rang Flex: " + data[i].tier + " " + data[i].rank + "<br>";
            stats.innerHTML += "Pourcentage de victoire: "+ Math.round(data[i].wins/(data[i].wins+data[i].losses)*100)+"%<br>";
            stats.innerHTML += "Victoires:"+ String(data[i].wins) + " /Défaites: " + String(data[i].losses)+"<br>";
          }
          stats.innerHTML += "<br>";
        }
        return axios.get(`https://`+server_selected+RiotMastery+summonerId+API_DEV);
      })
      .then( res => {
        const stats = document.getElementById('stats');
        console.log(res.data);
        stats.innerHTML += "<H3>Top 3 des champions les plus joués :</H3>"
        for (let i = 0; i < 3; i++) {
          stats.innerHTML += "id du champion : " + String(res.data[i].championId) +", points de maitrise : "+ String(res.data[i].championPoints) +"<br>";
        }
      })
      .catch(error => {
        console.log(error.response);
        section.innerHTML = "<div id='stats' class='error'>Cet utilisateur n'existe pas.<br>Veuillez vérifier le pseudo et/ou le serveur.</div>";
      })
  }
  

  render(){
    return (
      <div className='mid-container'>
        <video src={video} autoPlay loop muted/>
        <div className="search" id="search">
            <select id='servers' className="servers">
                <option value="euw1">EUW</option>
                <option value="na1">NA</option>
                <option value="euna1">EUNA</option>
                <option value="tr1">TR</option>
                <option value="jp1">JP</option>
                <option value="oc1">OC</option>
                <option value="kr">KR</option>
                <option value="ru">RU</option>
            </select>

            <input
                type="search"
                id="summoner"
                className="input"
                aria-label="Search through site content"
                placeholder='Ton pseudo'
               />

            <button onClick={this.handleClick} className="Research">Rechercher</button>
        </div>
        <div id='profile'></div>
      </div>
    );
  }
}

export default Middle;
