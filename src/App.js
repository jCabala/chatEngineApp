import { ChatEngine } from 'react-chat-engine';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/styles/Global';
import theme from './Components/styles/theme';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import configData from './config.json';
import './App.css';

//@TODO - check chatFeed, styledComponents

const App = () => {
  //if (!localStorage.getItem('ChatAppUsername')) return <LoginForm />;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ChatEngine
        height='100vh'
        projectID={configData.CHAT_ENGINE_ID}
        userName='John Doe'
        userSecret='123123'
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      />
    </ThemeProvider>
  );
};

export default App;
