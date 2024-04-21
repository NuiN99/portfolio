"use client"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './app/globals.css';
import React from 'react';
import { Container, Row, Col, Button, Card, Nav, Tab } from 'react-bootstrap';
import Projects from './app/projects/projects.json';
import Image from 'next/image';

const TopSection = () => {
  return (
    <>
      <div className='bg-dark px-3 py-1'>
        <div className='m-5'>
          <Name className='text-light'>Cai Plank</Name>
          <HorizontalDivider className='bg-secondary' />
          <SubName className='text-light'>Game Programmer</SubName>
        </div>
      </div>

      <TabButtons />
    </>
  )
}

const TabButtons = () => {
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
  const [showGIFCover, setShowGIFCover] = React.useState(true);

  return (
    <Card className='flex-shrink-0 m-3' border='info' style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>{details.title}</Card.Title>

        {
          showGIFCover == true ?
            <Image
              src={details.gifCover}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Image Loading..."
              onMouseEnter={() => setShowGIFCover(false)} />
            : null
        }

        {
          showGIFCover == false ?
            <Image
              src={details.gif}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="GIF Loading..."
              onMouseLeave={() => setShowGIFCover(true)}
            />
            : null
        }

        <Card.Text>{details.description}</Card.Text>
        <a href={details.link} target="_blank">
          <Button variant="primary">itch.io</Button>
        </a>
      </Card.Body>
    </Card >
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
    </>
  )
}


const TopSectionBackerSmall = styled.div`
  height: 5rem;
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

const ImageTest = styled(Image)`
  object-fit: contain;
`



export default App;
