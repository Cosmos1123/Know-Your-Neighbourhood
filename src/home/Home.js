import React, { Component } from 'react';
import './Home.css';
import img2 from '../img/img2.jpeg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                  
                    <h1 className="home-title"> KNOW YOUR NEIGHBORHOOD</h1>
                    <div className="container">
                        
                        <img src={img2} alt="Online Store"></img>
                    </div>
            </div>
        )
    }
}

export default Home;