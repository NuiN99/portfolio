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
import { ReactSocialMediaIcons } from 'react-social-media-icons';
import ProgressBar from './app/progressBar';

const SocialButton = ({ icon, url, isGitHub = false }) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  return (
    <span onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>
      <ReactSocialMediaIcons
        icon={icon}
        url={url}
        borderWidth={0}
        iconColor={(isGitHub ? (isHighlighted ? Colours.ORANGE : Colours.PURPLE) : Colours.HERO)}
        backgroundColor={isGitHub ? Colours.HERO : (isHighlighted ? Colours.ORANGE : Colours.PURPLE)}
        size={isGitHub ? 60 : 40} />
    </span>
  )
}

const AboutMeButton = (props) => {
  return (
    <button {...props}>
      More About Me
    </button>
  )
}

const ResumeButton = (props) => {
  return (
    <a {...props}>
      Resume
    </a>
  )
}

const Navbar = () => {
  return (
    <StickyTopWrapper>
      <HeroColorWrapper>
        <HorizontalMarginLarge className='px-2 py-4'>
          <Row>
            <Col>
              <NameText>Cai Plank</NameText>
              <TitleText className='text-light'>Game Programmer</TitleText>
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
              <SocialButton icon="linkedin" url="https://www.linkedin.com/in/cai-plank/" />
              <SocialButton icon="github" url="https://github.com/NuiN99" isGitHub={true} />
              <StyledResumeAnchor href="caiplankresume.pdf" target="_blank" rel="noreferrer" />
            </Col>
          </Row>
        </HorizontalMarginLarge>
      </HeroColorWrapper>
    </StickyTopWrapper>
  )
}

const HeroSection = () => {
  return (
    <HeroColorWrapper>
      <HorizontalMarginLarge className='px-3 py-4'>
        <Row className='py-5'>
          <Col md={3}>
            <StyledImageOrangeBorder src="profile_picture.png" roundedCircle fluid />
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
  return (
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
          <ProgressBar percent={skill.percent} />
        </div>
      ))}
    </>
  )
}

const ProjectsSection = () => {
  const gamesIsOdd = Projects.games.length % 2 !== 0;
  const toolsIsOdd = Projects.tools.length % 2 !== 0;

  return (
    <BGColorWrapper>
      <HorizontalMarginLarge className='px-2'>

        <ProjectSectionText className='text-center px-3 pt-3'>
          Games
          <div className="container">
            <HorizontalDividerOrange />
          </div>
        </ProjectSectionText>

        <div className='container'>
          <Row className={`justify-content-center ${gamesIsOdd ? 'justify-content-md-start' : null}`}>
            {Projects.games.map((details, index) => (
              <Col lg={6} md={12} sm={12} xs={12} key={index} className="d-flex justify-content-center">
                <ProjectCard details={details} isGame={true}></ProjectCard>
              </Col>
            ))}
          </Row>
        </div>

        <ProjectSectionText className='text-center px-3 mt-4'>
          Systems & Tools
          <div className="container">
            <HorizontalDividerPurple />
          </div>
        </ProjectSectionText>

        <div className='container'>
          <Row className={`justify-content-center ${toolsIsOdd ? 'justify-content-md-start' : null}`}>
            {Projects.tools.map((details, index) => (
              <Col md={6} sm={12} xs={12} key={index} className="d-flex justify-content-center">
                <ProjectCard details={details} isGame={false}></ProjectCard>
              </Col>
            ))}
          </Row>
        </div>

      </HorizontalMarginLarge>
    </BGColorWrapper>
  );
}

const ProjectCard = ({ details, isGame }) => {
  return (
    <HeroColorWrapper className='flex-shrink-0 m-3 w-100 text-light rounded-2'>
      <RelativeDiv>
        <ProjectInfoOverlay className='px-3 py-1'>
        </ProjectInfoOverlay>
        <FluidVideo autoPlay loop muted playsInline className='rounded-top-2'>
          <source src={details.src} type="video/mp4" />
        </FluidVideo>
      </RelativeDiv>

      <div className='p-3'>
        {isGame ? <GameTitleText>{details.title}</GameTitleText> : <ToolTitleText>{details.title}</ToolTitleText>}
        <ProjectReasonText className='mb-3'>{details.reason}</ProjectReasonText>
        <ProjectDescriptionText>{details.description}</ProjectDescriptionText>
      </div>
    </HeroColorWrapper >
  )
}

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
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

const GameTitleText = styled.div`
  color: ${Colours.ORANGE};
  font-size: 1.5rem;
  font-weight: bold;
`

const ToolTitleText = styled.div`
  color: ${Colours.PURPLE};
  font-size: 1.5rem;
  font-weight: bold;
`

const ProjectDescriptionText = styled.div`
  color: white;
  font-size: 1rem;
`
const ProjectReasonText = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`

const HeroAboutText = styled.div`
  font-size: 1.25rem;
`

const HorizontalDividerOrange = styled.div`
  height: 3px;
  border-radius: 3rem;
  background-color: ${Colours.ORANGE};
  width: 100%;
`;

const HorizontalDividerPurple = styled.div`
  height: 3px;
  border-radius: 3rem;
  background-color: ${Colours.PURPLE};
  width: 100%;
`;

const HorizontalMarginLarge = styled.div`
  margin-right: 10rem;
  margin-left: 10rem;

  @media (max-width: 1200px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    margin-right: 0rem;
    margin-left: 0rem;
  }
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
  border: 5px solid ${Colours.ORANGE};
`

const FluidVideo = styled.video`
  width: 100%;
  height: auto;
`

const ProjectInfoOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white; 
  bottom: 6px;
  width: 100%; /* Fill the width of the parent */
`

const RelativeDiv = styled.div`
  position: relative;
  margin-bottom: -9px;
`

export default App;
