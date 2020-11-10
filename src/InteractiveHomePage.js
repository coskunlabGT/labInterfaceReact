import React, { useState } from 'react'
import GoogleBtn from './GoogleBtn.js'
import { Container, Row, Col } from 'coolgrid'
import GridLayout from 'react-grid-layout'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import Calendar from 'react-calendar'
import labPic from './lab.jpg'

function InteractiveHomePage() {
  const layout = [
      {i: 'a', x: 0, y: 0, w: 0.5, h: 6, static: true},
      {i: 'b', x: 0.75, y: 0, w: 1, h: 9, static: true},
      {i: 'c', x: 2, y: 0, w: 0.5, h: 6, static: true},
      {i: 'd', x: 0, y: 6, w: 0.5, h: 6, static: true},
      {i: 'e', x: 0.75, y: 9, w: 1, h: 9, static: true},
      {i: 'f', x: 2, y: 6, w: 0.5, h: 6, static: true},
      {i: 'g', x: 0, y: 12, w: 0.5, h: 6, static: true},
      {i: 'h', x: 2, y: 12, w: 0.5, h: 6, static: true},
    ];
  return (
    <GridLayout className="layout" layout={layout} cols={3} rows={1} rowHeight={30} width={2000}>
      <div key="a" style={{outline:'5px solid black'}}>
        <h4>Welcome to Coskun Lab! </h4>
        <p>
          We will have a nice welcome message here
        </p>
      </div>
      <div key="b">
        <img src= {labPic} alt="lab pic" />
      </div>
      <div key="c" style={{outline:'5px solid black'}}>
        <p>
          The date is {new Date().getMonth()+1}-{new Date().getDate()}-{new Date().getFullYear()}.
          The time is {new Date().getHours() % 12}:{new Date().getMinutes()}.
        </p>
      </div>
      <div key="d" style={{outline:'5px solid black'}}>
        <h4>Lab Members</h4>
        <p>
          We can put all the lab members names here.
          We can also include pictures.
        </p>
      </div>
      <div key="e" style={{outline:'5px solid black'}}>
        This is grid E.
      </div>
      <div key="f" style={{outline:'5px solid black'}}>
        <p>
          Motivtional Quotes
        </p>
      </div>
      <div key="g" style={{outline:'5px solid black'}}>
        <Calendar value={new Date()}/>
      </div>
      <div key="h" style={{outline:'5px solid black'}}>
        <p>
          Grid H
        </p>
      </div>
    </GridLayout>
  )
}

export default InteractiveHomePage;
