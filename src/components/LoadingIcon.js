import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingIcon = () => {
  return (
    <div style={styles.loadingContainer}>
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '24px',
  },
};

export default LoadingIcon;
