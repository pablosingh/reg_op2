import Body from './components/Body';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated ? <Body/> : <LoginButton/>
  );
};

export default App;

// Archivos donde hay url para el deploy
// AddOp
// CardHolding
// CardTicker
// redux/holdings/actions
