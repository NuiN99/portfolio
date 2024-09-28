"use client"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Colours from './colours.js';
import Projects from './app/content/projects.json';
import Skills from './app/content/skills.json';
import AboutMeContent from './app/content/aboutme.json';
import Image from 'react-bootstrap/Image';
import {ReactSocialMediaIcons} from 'react-social-media-icons';
import ProgressBar from './app/progressBar';

const SocialButton = ({icon, url, isGitHub = false}) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  return (
    <span onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>
      <ReactSocialMediaIcons 
      icon={icon}
      url={url}
      borderWidth={0}
      iconColor={(isGitHub ? (isHighlighted ? Colours.ORANGE : Colours.PURPLE) : Colours.HERO)} 
      backgroundColor={isGitHub ? Colours.HERO : (isHighlighted ? Colours.ORANGE : Colours.PURPLE)} 
      size={isGitHub ? 60 : 40}/>
    </span>
  )
}

const AboutMeButton = (props) => {
  return(
    <button {...props}>
      More About Me
    </button>
  )
}

const ResumeButton = (props) => {
  return(
    <a {...props}>
      Resume
    </a>
  )
}

const Navbar = () => {
  return (
    <StickyTopWrapper>
      <HeroColorWrapper>
        <HorizontalMarginLarge className='p-4'>
          <Row>
            <Col>
              <NameText>Cai Plank</NameText>
              <TitleText className='text-light'>Game Programmer</TitleText>
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
                <SocialButton icon="linkedin" url="https://www.linkedin.com/in/cai-plank/"/>
                <SocialButton icon="github" url="https://github.com/NuiN99" isGitHub={true}/>
                <StyledResumeAnchor href="caiplankresume.pdf" target="_blank" rel="noreferrer"/>
            </Col>
          </Row>
        </HorizontalMarginLarge>
      </HeroColorWrapper>
    </StickyTopWrapper>
  )
}

const HeroSection = () => {
  return(
    <HeroColorWrapper>
      <HorizontalMarginLarge className='p-4'>
        <Row className='py-5'>
          <Col md={3}>
            <StyledImageOrangeBorder src="profile_picture.jpg" roundedCircle fluid/>
          </Col>
          <Col md={6} className='text-center px-5 my-auto text-light'>
            <HeroAboutText>
              {AboutMeContent.hero}
            </HeroAboutText>
            <StyledAboutMeButton className='mt-3' />
          </Col>
          <Col md={3} className='my-auto text-light'>
            <SkillsSection />
          </Col>
        </Row>
      </HorizontalMarginLarge>
    </HeroColorWrapper>
  )
}

const SkillsSection = () => {
  return(
    <>
      <SkillsHeaderText>
        Technical Skills
      </SkillsHeaderText>
      {Skills.map((skill, index) => (
        <div className='my-2' key={index}>
          <Row>
            <Col>
              <SkillText>
                {skill.name}
              </SkillText>
            </Col>
            <Col className='text-end'>
              <SkillText>
                {skill.proficiency}
              </SkillText>
            </Col>
          </Row>
          <ProgressBar percent={skill.percent}/>
        </div>
      ))}
    </>
  ) 
}

const ProjectsSection = () => {
  return (
    <BGColorWrapper>
      <HorizontalMarginLarge className='p-4'>

        <ProjectSectionText className='text-center px-3'>
          Games
          <HorizontalDivider />
        </ProjectSectionText>

        <div className='container'>
          <Row className="justify-content-center">
            {Projects.games.map((details, index) => (
              <Col md={6} sm={12} xs={12} key={index} className="d-flex justify-content-center">
                <ProjectCard details={details}></ProjectCard>
              </Col>
            ))}
          </Row>
        </div>
      </HorizontalMarginLarge>
    </BGColorWrapper>
  );
}

const ProjectCard = ({ details }) => {
  return (
        <HeroColorWrapper className='flex-shrink-0 m-3 text-light' style={{ width: '35rem' }}>
          
          <FluidVideo autoPlay loop muted playsInline>
              <source src={details.src} type="video/mp4" />
          </FluidVideo>
            
          <div className='m-3'>            
            <ProjectTitleText>{details.title}</ProjectTitleText>
            <ProjectDescriptionText>{details.description}</ProjectDescriptionText>
          </div>
      </HeroColorWrapper >
  )
}

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ProjectsSection />
    </>
  )
}

const StickyTopWrapper = styled.span`
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 999;
`

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

const ProjectSectionText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`

const SkillsHeaderText = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

const SkillText = styled.div`
  font-size: 1rem;
`

const ProjectTitleText = styled.div`
  color: ${Colours.ORANGE};
  font-size: 1.5rem;
  font-weight: bold;
`

const ProjectDescriptionText = styled.div`
  color: white;
  font-size = 1rem;
`

const HeroAboutText = styled.div`
  font-size: 1.25rem;
`

const HorizontalDivider = styled.div`
  height: 3px;
  border-radius: 3rem;
  background-color: ${Colours.ORANGE}
`

const HorizontalMarginLarge = styled.div`
  margin-right: 350px;
  margin-left: 350px;
`

const StyledAboutMeButton = styled(AboutMeButton)`
    background-color: ${Colours.HERO};
    border: 4px solid ${Colours.PURPLE};
    border-radius: 2rem;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;

    &:hover {
      border: 4px solid ${Colours.ORANGE};
      color: ${Colours.ORANGE};
    }
`

const StyledResumeAnchor = styled(ResumeButton)`
    background-color: ${Colours.HERO};
    border: 3px solid ${Colours.PURPLE};
    border-radius: 0.5rem;
    color: ${Colours.PURPLE};
    padding: 6px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;

    &:hover {
      border: 3px solid ${Colours.ORANGE};
      color: ${Colours.ORANGE};
    }
`

const StyledImageOrangeBorder = styled(Image)`
  border: 3px solid ${Colours.ORANGE};
`

const FluidVideo = styled.video`
  width: 100%;
  height: auto;
`

export default App;
