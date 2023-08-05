import React from 'react';

const SuccessMessage = ({message}) => {
  return (
    <>
      <div style={styles.successMessage}>{message}</div>
    </>
  )
}
const styles = {
  successMessage: {
    color: 'green',
    marginBottom: '10px',
    backgroundColor: 'lightgreen',
  },
};

export default SuccessMessage;
