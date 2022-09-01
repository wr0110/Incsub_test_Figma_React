import { Icon } from '@iconify/react';
import React from 'react';
import './_InfoMessage.sass';

interface IInfoMessage {
  message: string;
}

const InfoMessage: React.FC<IInfoMessage> = ({ message }) => {
  return (
    <div className="infoMessageContainer">
      <div className="icon">
        <Icon icon="ooui:notice" color={'red'} width={16} height={16} />
      </div>
      <div className="text">{message}</div>
    </div>
  );
};

export default InfoMessage;
