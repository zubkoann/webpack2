import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

library.add(faSmile, faPlaneDeparture);

const Icon = ({ color }) => (
      <div>
      <FontAwesomeIcon icon={faPlaneDeparture} color={color} />
      <FontAwesomeIcon icon={faSmile} color={color} />
      </div>
);
Icon.defaultProps = {
  color: '#dd2de3',
};

export default Icon;
