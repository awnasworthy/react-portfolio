import React from 'react';
import myFace from '../../assets/images/myface.jpg';

const About = () => {
    return (
        <div className='about-me' id='about-me'>
            <h2 className='title'>About Me</h2>
            <img src={myFace} className='face-img'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis.</p>
        </div>
    )
}

export default About;