import React from 'react';
import {isTaskOverdue} from "../HelperFunctions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

const OverdueIcon = ({task}) => {
  return (
    <>
      <div style={styles.iconColumn}>
        {isTaskOverdue(task) && <FontAwesomeIcon icon={faClock} style={styles.overdueIcon} />}
      </div>
    </>
  )
}

const styles = {
  overdueIcon: {
    color: 'red',
  },
}
export default OverdueIcon;
