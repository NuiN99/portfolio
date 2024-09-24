"use client"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './app/globals.css';
import React from 'react';
import { Container, Row, Col, Button, Card, Nav, Tab } from 'react-bootstrap';
import Colours from './colours.js';
import Projects from './app/projects/projects.json';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <HeroColorWrapper>
        <HorizontalMarginLarge className='p-3'>
          <NameText>Cai Plank</NameText>
          <TitleText className='text-light'>Game Programmer</TitleText>
        </HorizontalMarginLarge>
      </HeroColorWrapper>
    </>
  )
}

const ProjectsSection = () => {
  return (
    <BGColorWrapper>
      <HorizontalMarginLarge>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          Projects.games.map((details, index) => {
            return (
              <ProjectCard details={details} key={index}></ProjectCard>
            );
          })
        }
      </div>
      </HorizontalMarginLarge>
    </BGColorWrapper>
  )
}

const ProjectCard = ({ details }) => {
  return (
    <Card className='flex-shrink-0 m-3' style={{ width: '30rem' }}>
      <Card.Body>
        <Image
              src={details.gif}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="GIF Loading..."
        />
        <div className='py-1'></div>
        <Card.Title>{details.title}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
        <a href={details.link} target="_blank">
          <Button variant="primary">itch.io</Button>
        </a>
      </Card.Body>
    </Card >
  )
}

const App = () => {
  return (
    <>
      <Navbar />
      <ProjectsSection />
    </>
  )
}

const HeroColorWrapper = styled.div`
  background-color: ${Colours.HERO};
`

const BGColorWrapper = styled.div`
  background-color: ${Colours.BG};
`

const NameText = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: ${Colours.ORANGE};
  line-height: 1em;
`

const TitleText = styled.div`
  font-size: 1.5rem;
`

const HorizontalDivider = styled.div`
  height: 3px;
  border-radius: 3rem;
`

const HorizontalMarginLarge = styled.div`
  margin-right: 256px;
  margin-left: 256px;
`



export default App;
