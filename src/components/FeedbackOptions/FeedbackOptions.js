import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ addToGood, addToNeutral, addToBad }) => {
  return (
    <>
      <button className={styles.button} onClick={addToGood}>
        Good
      </button>
      <button className={styles.button} onClick={addToNeutral}>
        Neutral
      </button>
      <button className={styles.button} onClick={addToBad}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  addToGood: PropTypes.func.isRequired,
  addToNeutral: PropTypes.func.isRequired,
  addToBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
