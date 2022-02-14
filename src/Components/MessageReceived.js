import React from 'react';
import { Message, MessageImg } from './styles/Messages.styled';
import theme from './styles/theme';

const MessageReceived = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className='message-row'>
      {isFirstMessageByUser && (
        <div
          className='message-avatar'
          style={{ backgroundImage: `url(${message.sender.avatar})` }}
        />
      )}

      {message.attachments.length > 0 ? (
        <MessageImg
          src={message.attachments[0].file}
          alt='message-attachment'
          isMyMessage={false}
          isFirst={isFirstMessageByUser}
        />
      ) : (
        <Message
          style={{
            float: 'left',
            backgroundColor: theme.colors.messageReceived,
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
          }}
        >
          {message.text}
        </Message>
      )}
    </div>
  );
};

export default MessageReceived;
