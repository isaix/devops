import React from 'react';
import './404.css'



function NotFoundPage() {



    return (
        <div className="not_found">
            <div className="mars"/>
            <img src="https://ncg-intra-fileupload.s3-eu-west-1.amazonaws.com/assets/404/404.svg" className="logo-404" alt={"404"}/>
            <img src="https://ncg-intra-fileupload.s3-eu-west-1.amazonaws.com/assets/404/meteor.svg" className="meteor" alt={"Meteor"}/>
            <p className="title">Oh no!!</p>
            <p className="subtitle">
                You’re either misspelling the URL <br/> or requesting a page that's no longer here. <br/> If you think you
            </p>
            <div align="center">
                <a className="btn-back" href="/">Back to homepage</a>
            </div>
            <img src="https://ncg-intra-fileupload.s3-eu-west-1.amazonaws.com/assets/404/astronaut.svg" className="astronaut" alt={"Astronaut"}/>
            <img src="https://ncg-intra-fileupload.s3-eu-west-1.amazonaws.com/assets/404/spaceship.svg" className="spaceship" alt={"Spaceship"}/>
        </div>

    )

};


export default NotFoundPage;
