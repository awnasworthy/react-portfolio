import React from "react";
import codingResume from '../../assets/pdf/CodingResume.pdf';

const Resume = () => {
    return (
        <div id="resume" className="resume">
            <h2 className="title">Resume</h2>
            <h3>View my resume <a href={codingResume} target="_blank">here.</a></h3>
            <h3>Proficient in:</h3>
                <p>
                    HTML - CSS - JavaScript - React - MySQL - NoSQL - Node.js
                </p>
        </div>
    )
}

export default Resume;
    