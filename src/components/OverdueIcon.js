import React from 'react';
import {isTaskOverdue} from "../HelperFunctions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

const OverdueIcon = ({task}) => {
  return (
    <>
      <span style={styles.iconColumn}>
        {isTaskOverdue(task) && <FontAwesomeIcon icon={faClock} style={styles.overdueIcon} />}
      </span>
    </>
  )
}

const styles = {
  overdueIcon: {
    color: 'red',
    marginRight: '10px',
  },
}
export default OverdueIcon;
