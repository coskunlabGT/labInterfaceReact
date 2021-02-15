import React from 'react'

function EZLabX() {
    return (
        <div className = "about">
            <div className = "ezlabx">
                <h1 className = "about-header">About EZLabX</h1>
                <p>EZLabX strives to facilitate day to day lab activities for both students and professors. <br />
                Our platform allows users to easily check lab inventory, request new inventory items, and view upcoming events/deadlines. <br />
                In addition, professors can readily approve order requests, monitor their lab cameras, and view students' progress.</p>
            </div>
            <div className = "team">
                <h1 className = "about-header">Meet the Team</h1>
                <div className = "top">
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Ahmet Coskun</h3>
                        <p>Advisor</p>
                    </div>
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Saurabh Doodhwala</h3>
                        <p>Advisor</p>
                    </div>
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Shubham Singhal</h3>
                        <p>Advisor</p>
                    </div>
                </div>
                <div className = "middle">
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Allison Fister</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Aryender Singh</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Ethan Xie</h3>
                        <p>Developer</p>
                    </div>
                </div>
                <div className = "bottom">
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Josh Patel</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Khusbu Patel</h3>
                        <p>Developer</p>
                    </div>
                    <div className = "content">
                        <img src = {require("./square.png")} alt = "Ahmet Coskun" className = "image"></img>
                        <h3>Kira Pancha</h3>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EZLabX