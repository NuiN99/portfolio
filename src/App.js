"use client"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './app/globals.css';
import React from 'react';
import { Container, Row, Col, Button, Card, Nav, Tab } from 'react-bootstrap';
import Colours from './colours.js';
import Projects from './app/projects/projects.json';
import Image from 'next/image';
import {ReactSocialMediaIcons} from 'react-social-media-icons';

const SocialButton = ({icon, url, isGitHub = false}) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  return (
    <span onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>
      <ReactSocialMediaIcons 
      icon={icon}
      url={url}
      borderWidth={0}
      iconColor={isHighlighted ? Colours.ORANGE : (isGitHub ? Colours.PURPLE : Colours.HERO)} 
      backgroundColor={isGitHub ? Colours.HERO : Colours.PURPLE} 
      size={isGitHub ? 60 : 40}/>
    </span>
  )
}

const GitHubButton = () => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  return (
    <span onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>
      <ReactSocialMediaIcons icon="github" url="https://github.com/NuiN99" borderWidth={0} iconColor={isHighlighted ? Colours.ORANGE : Colours.PURPLE} backgroundColor={Colours.HERO} size={60}/>
    </span>
  )
}

const LinkedInButton = () => {
  return (
    <ReactSocialMediaIcons icon="linkedin" url="https://www.linkedin.com/in/cai-plank/" borderWidth={0} iconColor={Colours.HERO} backgroundColor={Colours.PURPLE} size={40}/>
  )
}

const Navbar = () => {
  return (
    <>
      <HeroColorWrapper>
        <HorizontalMarginLarge className='p-4'>
          <Row>
            <Col>
              <NameText>Cai Plank</NameText>
              <TitleText className='text-light'>Game Programmer</TitleText>
            </Col>
            <Col>
              <FloatRight>
                <SocialButton icon="github" url="https://github.com/NuiN99" isGitHub={true}/>
                <SocialButton icon="linkedin" url="https://www.linkedin.com/in/cai-plank/"/>
              </FloatRight>
            </Col>
          </Row>
        </HorizontalMarginLarge>
      </HeroColorWrapper>
    </>
  )
}

const ProjectsSection = () => {
  return (
    <BGColorWrapper>
      <HorizontalMarginMedium>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          Projects.games.map((details, index) => {
            return (
              <ProjectCard details={details} key={index}></ProjectCard>
            );
          })
        }
      </div>
      </HorizontalMarginMedium>
    </BGColorWrapper>
  )
}

const ProjectCard = ({ details }) => {
  return (
    <Card className='flex-shrink-0 m-3' style={{ width: '35rem' }}>
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
  margin-right: 350px;
  margin-left: 350px;
`

const HorizontalMarginMedium = styled.div`
  margin-right: 128px;
  margin-left: 128px;
`

const FloatRight = styled.div`
  float: right;
`



export default App;
