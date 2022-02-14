import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import configData from './config.json';
import './App.css';

//@TODO - check chatFeed, styledComponents

const App = () => {
  //if (!localStorage.getItem('ChatAppUsername')) return <LoginForm />;

  return (
    <ChatEngine
      height='100vh'
      projectID={configData.CHAT_ENGINE_ID}
      userName='jCabala'
      userSecret='123123'
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
