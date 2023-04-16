import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types"
import propTypes from 'prop-types';

export const SecondsCounter  = ({ seconds, icon }) => {

    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setCount(count => count + 1);
    //   }, 1000);
  
    //   return () => clearInterval(intervalId);
    // }, []);

    return (
        <div className="card text-center bg-dark bg-gradient text-light" style={{minWidth: "5rem", minHeight: "5rem"}}>
            <div className="card-body">
                {
                    icon === 0 ? (<h1 className="card-title">{seconds}</h1>) : (<FontAwesomeIcon icon={faClock} size="3x" />)
                }     
            </div>
        </div>
    );
};

SecondsCounter.prototype = {
    seconds: PropTypes.number,
    icon: propTypes.number
}