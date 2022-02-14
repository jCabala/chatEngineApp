import MessageForm from './MessageForm';
import MessageSent from './MessageSent';
import MessageReceived from './MessageReceived';

//@TODO Add Message Component, LoadingSpinner, readRecipts

const ChatFeed = props => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (mess, isMyMessage) =>
    chat.people.map(
      (person, idx) =>
        person.last.read === mess.id && (
          <div
            key={`read_${idx}`}
            className='read-receipt'
            style={{
              float: isMyMessage ? 'right' : 'left',
              backgroundImage: `url(${person.person.avatar})`,
            }}
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
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {isMyMessage ? (
              <MessageSent message={message} />
            ) : (
              <MessageReceived
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className='read-receipts'
            style={{
              marginRight: isMyMessage ? '18px' : '0',
              marginLeft: isMyMessage ? '0px' : '69px',
            }}
          >
            {/* {renderReadReceipts(message, isMyMessage)} */}
          </div>
        </div>
      );
    });
  };

  if (!chat) return 'Loading...';

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat?.title}</div>
      </div>

      {renderMessages()}

      <div style={{ height: '100px' }} />

      <div className='message-form-container'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
