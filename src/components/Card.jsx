import React from "react"

export default function Card(props) {
  console.log(props)
  return (
    <section className="card">
      <div className="card--container">
        <img className="card--image" src={props.item.img}></img>
        <div className="card--context">
          <div className="card--summary">
            <img className="card--location" src="../assets/location.jpg"></img>
            <p className="card--country">{props.item.country}</p>
            <u className="card--map">View on Google Maps</u>
          </div>
          <h1>{props.item.title}</h1>
          <h5>{props.item.dates}</h5>
          <p>{props.item.describe}</p>
        </div>
      </div>
    </section>

  )
}