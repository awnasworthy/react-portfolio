import React, { useState } from 'react';

const Projects = () => {

const [currentProject, setCurrentProject] = useState();

const [projects] = useState ([
    {
        name: 'RunBuddy',
        github: 'https://github.com/awnasworthy/RunBuddy',
        deploy: 'https://awnasworthy.github.io/RunBuddy/',
        image: 'mydreampassport'
    },
    {
        name: 'The Throwback Generator',
        github: 'https://github.com/awnasworthy/throwback-generator',
        deploy: 'https://awnasworthy.github.io/throwback-generator/',
        image: 'mydreampassport'
    },
    {
        name: 'My Dream Passport',
        github: 'https://github.com/ElleAK/My-Dream-Passport',
        deploy: 'https://my-dream-passport.herokuapp.com/',
        image: 'mydreampassport'
    },
    {
        name: 'Budget Tracker',
        github: 'https://github.com/awnasworthy/budget-tracker',
        deploy: 'https://enigmatic-dusk-30595.herokuapp.com/',
        image: 'mydreampassport'
    },
    {
        name: 'The Weather Dashboard',
        github: 'https://github.com/awnasworthy/weather-dashboard',
        deploy: 'https://awnasworthy.github.io/weather-dashboard/',
        image: 'mydreampassport'
    },
    {
        name: 'Ecommerce Back End',
        github: 'https://github.com/awnasworthy/ecommerce',
        deploy: 'See Github for Demo',
        image: 'mydreampassport'
    }
]);

return (
    <div>
        {projects.map((project) => (
            <div>
                <h2>{ project.name }</h2>
                <p>Find the Repo <a href={ project.github } target="_blank">here!</a> </p>
                <p>Project Deployed <a href={ project.deploy } target="_blank">here!</a></p>
            </div>
        ))}
    </div>
)

}

export default Projects;