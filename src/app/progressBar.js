import React from 'react';
import Colours from '../colours';

const ProgressBar = ({ percent }) => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.progress, width: `${percent}%` }} />
    </div>
  );
};

const styles = {
  container: {
    height: '3px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: `${Colours.PURPLE}`,
    transition: 'width 0.3s ease',
    borderRadius: '5px'
  },
};

export default ProgressBar;