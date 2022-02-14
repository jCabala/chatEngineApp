import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = props => {
  const { chatId, creds } = props;

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue('');
  };

  const handleUpload = e =>
    sendMessage(creds, chatId, { files: e.target.files, text: '' });

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='message-input'
        placeholder='Send a message...'
        value={value}
        onChange={handleChange}
      />
      <label htmlFor='upload-button'>
        <span className='image-button'>
          <PictureOutlined className='image-button' />
        </span>
      </label>

      <input
        type='file'
        multiple={false}
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleUpload}
      />

      <button type='submit' className='send-button'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
  );
};

export default MessageForm;
