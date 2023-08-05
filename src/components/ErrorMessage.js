import React from 'react';

const ErrorMessage = ({message }) => {
  return (
    <>
      <div style={styles.errorMessage}>{message}</div>
    </>
  )
}

const styles = {
errorMessage: {
  color: 'red',
    marginBottom: '10px',
  backgroundColor: '#f0a5b1',
},
};
export default ErrorMessage;
