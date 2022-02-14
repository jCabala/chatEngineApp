import MessageForm from './MessageForm';
import MessageSent from './MessageSent';
import MessageReceived from './MessageReceived';
import { Feed, ChatTitle, ChatFormContainer } from './styles/ChatFeed.styled';

import {
  MessageWrapper,
  MessageBlock,
  ReadRecipts,
  ReadRecipt,
} from './styles/Messages.styled';

import { Gap } from './styles/Helper.styled';

//@TODO Add Message Component, LoadingSpinner, readRecipts

const ChatFeed = props => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (mess, isMyMessage) =>
    chat.people.map(
      (person, idx) =>
        person.last.read === mess.id && (
          <ReadRecipt
            key={`read_${idx}`}
            isMyMessage={isMyMessage}
            avatar={person.person.avatar}
          />
        )
    );

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <MessageWrapper key={`msg_${index}`}>
          <MessageBlock>
            {isMyMessage ? (
              <MessageSent message={message} />
            ) : (
              <MessageReceived
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </MessageBlock>
          <ReadRecipts isMyMessage={isMyMessage}>
            {/* {renderReadReceipts(message, isMyMessage)} */}
          </ReadRecipts>
        </MessageWrapper>
      );
    });
  };

  if (!chat) return 'Loading...';

  return (
    <Feed>
      <ChatTitle>{chat?.title}</ChatTitle>

      {renderMessages()}

      <Gap />

      <ChatFormContainer>
        <MessageForm {...props} chatId={activeChat} />
      </ChatFormContainer>
    </Feed>
  );
};

export default ChatFeed;
