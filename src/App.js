"use client"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Colours from './app/content/colours.js';
import Projects from './app/content/projects.json';
import Skills from './app/content/skills.json';
import AboutMeContent from './app/content/aboutme.json';
import Image from 'react-bootstrap/Image';
import { ReactSocialMediaIcons } from 'react-social-media-icons';
import ProjectLabelIcon from './app/projectLabelIcon';

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
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button {...props} onClick={handleClick}>
      More About Me
    </button>
  );
};

const ResumeButton = (props) => {
  return (
    <a {...props}>
      Resumé
    </a>
  )
}

const Navbar = () => {
  return (
    <StickyTopWrapper>
      <HeroColorWrapper>
        <HorizontalMarginLarge className='px-2 py-4'>
          <Row>
            <Col className='col-7'>
              <NameText>Cai Plank</NameText>
              <TitleText className='text-light'>Game Programmer</TitleText>
            </Col>
            <Col className='col-5 d-flex justify-content-end align-items-center'>
              <SocialButton icon="linkedin" url="https://www.linkedin.com/in/cai-plank/" />
              <SocialButton icon="github" url="https://github.com/NuiN99" isGitHub={true} />
              <StyledResumeButton href="caiplankresume.pdf" target="_blank" rel="noreferrer" />
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
      <HorizontalMarginLarge className='px-3 py-0'>
        <Row className='pb-4 mx-auto d-flex justify-content-center'>
          <Col lg={4} md={5} className="d-flex align-items-center justify-content-center">
            <StyledPortrait src="portrait.png" fluid />
          </Col>

          <Col lg={6} md={7} className='pt-3 text-center my-auto text-light'>
            <HeroAboutText>
              {AboutMeContent.hero}
            </HeroAboutText>
            <StyledAboutMeButton className='mt-3' />
          </Col>
          <div className='my-auto text-center pt-4 text-light'>
            <SkillsSection />
          </div>
        </Row>
      </HorizontalMarginLarge>
    </HeroColorWrapper>
  )
}

const SkillsSection = () => {
  return (
    <>
      {Skills.map((skill, index) => (
        <SkillLabel key={index} className='m-1'>
          {skill}
        </SkillLabel>
      ))}
    </>
  )
}

const ProjectsSection = () => {
  return (
    <BGColorWrapper className='pb-3'>
      <HorizontalMarginLarge className='px-2'>
        <ProjectsGrid isGameSection={true}/>
        <ProjectsGrid isGameSection={false}/>
      </HorizontalMarginLarge>
    </BGColorWrapper>
  );
}

const ProjectsGrid = ({ isGameSection }) => {
  const projectsArray = isGameSection ? Projects.games : Projects.tools;
  return (
    <>
      <ProjectSectionText className='text-center px-3 pt-3'>
        {isGameSection ? "Games" : "Systems & Tools"}
        <div className="container">
          {isGameSection ? <HorizontalDividerOrange /> : <HorizontalDividerPurple />}
        </div>
      </ProjectSectionText>

      <div className='container'>
        <Row className={'justify-content-start'}>
          {projectsArray.map((details, index) => (
            <Col lg={6} md={12} sm={12} xs={12} key={index} className="d-flex justify-content-center">
              <ProjectCard details={details} isGame={isGameSection}></ProjectCard>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

const ProjectCard = ({ details, isGame }) => {
  return (
    <HeroColorWrapper className='flex-shrink-0 m-3 w-100 text-light rounded-2'>
      <RelativeDiv>
    
        <ResponsiveIframe
          src={`https://www.youtube-nocookie.com/embed/${details.src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${details.src}&modestbranding=1&showinfo=0&rel=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Embedded YouTube video"
          sandbox="allow-same-origin allow-scripts allow-presentation"
        />
      </RelativeDiv>

      <div className='p-3'>
        {isGame ? <GameTitleText>{details.title}</GameTitleText> : <ToolTitleText>{details.title}</ToolTitleText>}
        <ProjectReasonText>{details.reason}</ProjectReasonText>

        <ProjectInfoOverlay className='d-flex align-items-center mt-1'>
          <ProjectLabel type="team" text={details.labels.team}></ProjectLabel>
          <ProjectLabel type="duration" text={details.labels.duration}></ProjectLabel>
          <ProjectLabel type="tools" text={details.labels.tools}></ProjectLabel>
        </ProjectInfoOverlay>

        <HorizontalDividerWhiteThin className='my-2' />

        <ProjectDescriptionText>{details.description}</ProjectDescriptionText>
      </div>
    </HeroColorWrapper >
  )
}

const ProjectLabel = ({type, text}) => {
  return(
    <>
      <ProjectLabelIcon type={type}/>
      <ProjectLabelText className='me-3 ms-1'>
        {text}
      </ProjectLabelText>
    </>
  )
}

const AboutMeSection = () => {
  return(
    <AboutMeColorWrapper className='p-5 pt-4'>
      <HorizontalMarginLarge className='mt-5 mx-lg-5 mx-md-0 mx-sm-0 mb-4'>
        <HorizontalMarginLarge className='px-lg-5 px-md-0 px-sm-0'>
          <div className='mx-auto'>
            <AboutMeIntroductionText className='h3'>
              Hey, I'm Cai! 
            </AboutMeIntroductionText>
            <HeroAboutText className='mx-auto mt-4'>
              {AboutMeContent.full1}
              <br/><br/>
              {AboutMeContent.full2}
            </HeroAboutText>
          </div>
        </HorizontalMarginLarge>
      </HorizontalMarginLarge>
    </AboutMeColorWrapper>
  );
}

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection/>
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

const AboutMeColorWrapper = styled.div`
  background-color: ${Colours.PURPLE};
  color: ${Colours.HERO};
`

const AboutMeIntroductionText = styled.div`
  color: ${Colours.HERO}
`

const NameText = styled.div`
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  color: ${Colours.ORANGE};
  line-height: 1em;
`;

const TitleText = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: white;
`;

const ProjectSectionText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`

const SkillLabel = styled.div`
  background-color: ${Colours.HERO};
  border: 3px solid ${Colours.ORANGE};
  border-radius: 1rem;
  color: white;
  padding: 6px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
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
  font-size: clamp(1rem, 2vw, 1.25rem);
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

const HorizontalDividerWhiteThin = styled.div`
  height: 2px;
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 0.25);
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
    background-color: ${Colours.PURPLE};
    border: 0px solid white;
    border-radius: 10rem;
    color: ${Colours.HERO};
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background-color: ${Colours.ORANGE};
    }
`

const StyledResumeButton = styled(ResumeButton)`
    background-color: ${Colours.PURPLE};
    border-radius: 0.5rem;
    color: ${Colours.HERO};
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background-color: ${Colours.ORANGE};
    }
`

const StyledPortrait = styled(Image)`
  border: 5px solid ${Colours.ORANGE};
  border-radius: 2rem;
  width: clamp(200px, 20vw, 100%);
  height: auto;
`;

const FluidVideo = styled.video`
  width: 100%;
  height: auto;
`

const ResponsiveIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  pointer-events: none;
`;

const ProjectInfoOverlay = styled.div`
  color: white; 
  bottom: 6px;
  width: 100%;
`

const RelativeDiv = styled.div`
  position: relative;
  margin-bottom: -9px;
`

const ProjectLabelText = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
`

export default App;
