import React, { useState } from "react";
import "./inner.css"
import axios from 'axios';
import {Button} from 'antd'



const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
  baseURL: API_ROOT
})

export default ({hello, logout}) => {
  

  return (
    <div id="wrapper">
      <div id="content">
        <div id="header">
          <div id="logo">
            <h1>{hello}</h1>
            <div className="logout">
              <Button
                onClick={logout}
              >log out</Button>
            </div>
            <h4>have your punchline here</h4>
          </div>
          <div id="links">
            <ul>
              <li><button>Home</button></li>
              <li><button>Add New Patient</button></li>
              <li><button>New Health Record</button></li>
              <li><button>Contact us</button></li>
            </ul>
          </div>
        </div>    
        <div id="mainimg">
          <h3>inventions</h3>
          <h4>for a wireless world</h4>
        </div>
      <div id="contentarea">
        <div id="leftbar">
          <h2>hello!</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut id nisl nec leo congue fringilla. Suspendisse potenti. Phasellus sed velit eget sapien interdum ultrices. Nullam nec magna. Maecenas cursus. Etiam sapien neque, auctor eu, volutpat at, condimentum et, odio. Morbi id lorem. Nam urna ante, venenatis sed, molestie eu, dictum sit amet, tellus. Phasellus pellentesque magna vitae elit. In dignissim eleifend odio. Curabitur at libero. Donec est justo, pellentesque eu, vulputate feugiat, ultrices quis, nunc. Sed neque. Nulla egestas, risus id consectetuer ultrices, ante turpis posuere ligula, ac pulvinar tortor dui ac odio. Curabitur auctor urna sed purus. In varius.</p>
          <br />
          <p>Nulla sit amet magna non enim posuere porttitor. Vestibulum ante. Nam et nulla vestibulum libero facilisis aliquet. Vivamus ante velit, facilisis eu, pulvinar nec, ultricies vel, sem. Morbi ac velit. Sed est. Proin vehicula. Maecenas ac pede. Fusce rhoncus. Maecenas at quam. Aenean nunc felis, elementum vel, faucibus vitae, nonummy et, tellus. Nulla auctor venenatis urna. Donec accumsan urna sed libero. Fusce at mi eu leo sollicitudin adipiscing. Ut metus purus, gravida nec, scelerisque quis, venenatis non, ante. Aliquam a leo vel libero tempus scelerisque. Morbi iaculis. Ut libero. </p>
          <br />
          <br />
          <br />
        </div>
      <div id="rightbar">
        <h2>latest news</h2>
        <p><span class="orangetext">12/08/2006</span><br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Utid anisl nec leo congue fringilla. <br />
          <br />
          <span class="orangetext">10/08/2006</span><br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Utid anisl nec leo congue fringilla. <br />
          <br />
          <span class="orangetext">28/07/2006</span><br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Utid anisl nec leo congue fringilla. </p>
      </div>
    </div>
    <div id="bottom">
      <div id="email"><a href="mailto:info@yourcompany.com">info@yourcompany.com</a></div>
      <div id="validtext">
        <p>Valid <a href="http://validator.w3.org/check?uri=referer">XHTML</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a></p>
      </div>
    </div>
  </div>
</div>
  );  
}
