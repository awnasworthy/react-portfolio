import React, { useState } from 'react';
import runbuddy from '../../assets/images/runbuddy.png';
import throwback from '../../assets/images/throwback.png';
import mydreampassport from '../../assets/images/mydreampassport.png';
import budget from '../../assets/images/budgettracker.PNG';
import ecommerce from '../../assets/images/ecommerce.PNG';
import weather from '../../assets/images/WeatherDashScreenshot.PNG';
import finders from '../../assets/images/fk3.PNG';

const Projects = () => {

return (
    <div className='projects'>
            <div>
                <img src={runbuddy}/>
                <h2>Run Buddy</h2>
                <p>Find the Repo <a href='https://github.com/awnasworthy/RunBuddy' target="_blank">here!</a> </p>
                <p>Project Deployed <a href='https://awnasworthy.github.io/RunBuddy/' target="_blank">here!</a></p>
            </div>
            <div>
                <img src={throwback}/>
                <h2>The Throwback Generator</h2>
                <p>Find the Repo <a href='https://github.com/awnasworthy/throwback-generator' target="_blank">here!</a> </p>
                <p>Project Deployed <a href='https://awnasworthy.github.io/throwback-generator/' target="_blank">here!</a></p>
            </div>
            <div>
                <img src={mydreampassport}/>
                <h2>My Dream Passport</h2>
                <p>Find the Repo <a href='https://github.com/ElleAK/My-Dream-Passport' target="_blank">here!</a> </p>
                <p>Project Deployed <a href='https://my-dream-passport.herokuapp.com/' target="_blank">here!</a></p>
            </div>
            <div>
                <img src={budget}/>
                <h2>Budget Tracker</h2>
                <p>Find the Repo <a href='https://github.com/awnasworthy/budget-tracker' target="_blank">here!</a> </p>
                <p>Project Deployed <a href='https://enigmatic-dusk-30595.herokuapp.com/' target="_blank">here!</a></p>
            </div>
            <div>
                <img src={weather}/>
                <h2>The Weather Dashboard</h2>
                <p>Find the Repo <a href='https://github.com/awnasworthy/weather-dashboard' target="_blank">here!</a> </p>
                <p>Project Deployed <a href='https://awnasworthy.github.io/weather-dashboard/' target="_blank">here!</a></p>
            </div>
            <div>
                <img src={ecommerce}/>
                <h2>Ecommerce Back End</h2>
                <p>Find the Repo <a href='https://github.com/awnasworthy/ecommerce' target="_blank">here!</a> </p>
                <p>See GitHub for demo video!</p>
            </div>
            <div>
                <img src={finders}/>
                <h2>Finders Keepers</h2>
                <p>Find the Repo <a href='https://github.com/NicoleSharrock/finders-keepers' target="_blank">here!</a> </p>
                <p>Project Deployed <a href='https://morning-garden-68781.herokuapp.com/' target="_blank">here!</a></p>
            </div>
    </div>
)

}

export default Projects;