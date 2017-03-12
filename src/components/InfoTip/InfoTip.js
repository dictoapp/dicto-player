import React from 'react';

import './InfoTip.scss';

const InfoTip = ({
  onClick
}) => {
  return (
    <span
      className="dicto-player-InfoTip"
      onClick={onClick}>
    i
  </span>);
};

export default InfoTip;
