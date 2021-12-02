import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import './App.css'
import LoginForm from './components/LoginForm';
function App() {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (

    <ChatEngine
      height="100vh"
      projectID="bffdc60c-f312-47ed-bba0-6441a2a2a701"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
