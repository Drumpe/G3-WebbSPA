import React, { Component } from 'react';
import '../pages/RightColumn.css';

export default class RightColumn extends Component {
    render() {
        return (
            <div className="right-column">
                <div className="futuristic-content card">
                    <video autoPlay loop muted>
                        <source src="/public/Images/Media1.mp4" type="video/mp4" />
                    </video>
                    <div className="text-overlay">
                        <p>Explore the unknown, push boundaries, and shape tomorrow.</p>
                        <a href="https://www.marvel.com/" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                            Läs mer
                        </a>
                    </div>
                </div>
                <div className="additional-content card">
                    <img src="/public/Images/Sem.jpg" alt="Discover More" className="additional-image" />
                    <h3>Vacaction for just 1$</h3>
                    <p>Check out our latest destinations and much more</p>
                    <a
                        href="https://www.ticket.se/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-info"
                        style={{marginLeft:'125px', width: '75px' }} // Adjust the width as needed
                    >
                        Utforska
                    </a>

                </div>
                </div>

            
        );
    }
}


