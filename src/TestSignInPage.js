import React, { useState } from 'react'
import GoogleBtn from './GoogleBtn.js'
import { Container, Row, Col } from 'coolgrid'

function TestSignInPage() {
  const [isLogined, setIsLogined] = useState(false);
  const setLoggedIn = () => {
    console.log(isLogined)
    setIsLogined(true)
  }
  const setLoggedOut = () => {
    console.log(isLogined)
    setIsLogined(false)
  }
  return (
    <GoogleBtn isLogined={isLogined} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut}/>
  )

  // const Element = () => (
  //   <Container>
  //     <Row size={{ xs: 12, sm: 6, md: 3 }}>
  //       <Col>Column 1</Col>
  //       <Col size={4}>Column 2</Col>
  //       <Col>Column 3</Col>
  //       <Col size={3}>Column 4</Col>
  //     </Row>
  //   </Container>
  // )
  // return (
  //   <Container>
  //     <Row size={{ xs: 12, sm: 6, md: 3 }}>
  //       <Col>Column 1</Col>
  //       <Col size={4}>Column 2</Col>
  //       <Col>Column 3</Col>
  //       <Col size={3}>Column 4</Col>
  //     </Row>
  //   </Container>
  // );
}

export default TestSignInPage;
