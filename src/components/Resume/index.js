import React from "react";
import codingResume from '../../assets/pdf/CodingResume.pdf';

const Resume = () => {
    return (
        <div id="resume" className="resume">
            <h2 className="title">Resume</h2>
            <p>View my resume <a href={codingResume} target="_blank">here.</a></p>
            <p>Proficient in:</p>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    React
                </li>
                <li>
                    MySQL
                </li>
                <li>
                    NoSQL
                </li>
                <li>
                    Node.js
                </li>
            </ul>
        </div>
    )
}

export default Resume;
    