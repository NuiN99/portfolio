"use client"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'
import './app/globals.css'
import React from 'react';
import { Container, Row, Col, Button, Card, Nav, Tab } from 'react-bootstrap';
import Image from 'next/image'
import pfp from './app/media/pfp.jpg';
import Projects from './app/projects/projects.json'

const TopSection = () => {
  return (
    <>
      <TopSectionBacker className='bg-dark p-5'>
        <div className='m-5'>
          <Name className='text-light'>Cai Plank</Name>
          <HorizontalDivider className='bg-secondary' />
          <SubName className='text-light'>Game Programmer</SubName>
        </div>
      </TopSectionBacker>
    </>
  )
}

const TabSection = () => {
  return (
    <Tab.Container id="bottom-tabs-example" defaultActiveKey="Games">
      <Row>
        <Col>
          <div className='bg-dark w-100'>
            <Nav fill variant="tabs bg-dark border-0 w-50 mx-auto" defaultActiveKey="Games">
              <Nav.Item className='mx-1'>
                <Nav.Link eventKey="Games" className='text-dark bg-light'>Games</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-1'>
                <Nav.Link eventKey="Tools" className='text-dark bg-light'>Tools</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-1'>
                <Nav.Link eventKey="About" className='text-dark bg-light'>About</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tab.Content className='bg-light'>
            <Tab.Pane eventKey="Games">
              <GameShowcases />
            </Tab.Pane>
            <Tab.Pane eventKey="Tools">

            </Tab.Pane>
            <Tab.Pane eventKey="About">

            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}


const ShowcaseCard = ({ details }) => {
  return (
    <Card className='flex-shrink-0 m-3' border='info' style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>{details.title}</Card.Title>
        <video src={details.video} className="card-img-top" muted autoPlay loop></video>
        <Card.Text>{details.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}


const GameShowcases = () => {
  return (
    <div className='d-flex flex-wrap bg-light'>
      {
        Projects.games.map((details, index) => {
          return (
            <ShowcaseCard details={details} key={index}></ShowcaseCard>
          );
        })
      }
    </div>
  )
}


const App = () => {
  return (
    <>
      <TopSection />
      <TabSection />
    </>
  )
}

const TopSectionBacker = styled.div`
  height: 20rem;
`

const Name = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

const SubName = styled.div`
  font-size: 2rem;
`

const HorizontalDivider = styled.div`
  height: 3px;
  border-radius: 3rem;
`

export default App;
