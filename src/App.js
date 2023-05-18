import React, { useCallback, useState } from 'react';
import './pages/index.css';
import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import LoginModal from './components/modal/LoginModal';
import RegistrationModal from './components/modal/RegistrationModal';

function App() {
  const [login, setLogin] = useState(false);
  const [registration, setRegistration] = useState(false);
  const toggleLogin = useCallback(() => setLogin((e) => !e), []);
  const toggleRegistration = useCallback(() => setRegistration((e) => !e), []);

  return (
    <div className="App">
      <Header toggleLogin={toggleLogin} />
      <main className="main">
        <Cards />
      </main>
      {login === true && (
        <LoginModal
          toggleLogin={toggleLogin}
          toggleRegistration={toggleRegistration}
        />
      )}
      {registration && (
        <RegistrationModal
          toggleRegistration={toggleRegistration}
          toggleLogin={toggleLogin}
        />
      )}
    </div>
  );
}

export default App;
