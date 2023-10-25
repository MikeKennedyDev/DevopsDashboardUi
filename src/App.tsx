import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  const sampleProjects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' }
  ];

  const sampleUser = {
    id: 1,
    name: 'Mike Kennedy'
  };

  return (
    <div>
      <CssBaseline />
      <Header
      projects={sampleProjects}
      user={sampleUser}
      notificationsCount={5}
      />
      <MainContent/>
    </div>
  );
};

export default App;
