import React from 'react';
import { Message, MessageImg } from './styles/Messages.styled';
import theme from './styles/theme';

//@TODO styed comp theme

const MessageSent = ({ message }) => {
  if (message.attachments.length > 0) {
    return (
      <MessageImg
        isMyMessage={true}
        src={message.attachments[0].file}
        alt='message-attachment'
      />
    );
  }

  return (
    <Message
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: theme.colors.messageSend,
      }}
    >
      {message.text}
    </Message>
  );
};

export default MessageSent;
