import React from 'react';
import styled from 'styled-components';
import { Tools, PeopleFill, ClockFill } from 'react-bootstrap-icons';

const ProjectLabelIcon = ({ type }) => {
  let Icon;
  switch(type){
    case "tools": Icon = Tools; break;
    case "team": Icon = PeopleFill; break;
    case "duration": Icon = ClockFill; break;
  }

  return (
    <StyledLabelContainer>
      <StyledLabelSpan>
        <Icon/>
      </StyledLabelSpan>
    </StyledLabelContainer>
  );
};

const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLabelSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export default ProjectLabelIcon;