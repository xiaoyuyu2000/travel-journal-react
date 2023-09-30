import React from "react"

export default function Navbar() {
    return (
        <section className="navbar">
            <img className="navbar--logo" src={"/src/assets/logo.JPG"}></img>
            <p className="navbar--text">my travel journal.</p> 
        </section>
    )
}