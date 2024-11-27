import Main from './Main/Main.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Workers from './pages/Workers/Workers.jsx';
import Guilds from './pages/Guilds/Guilds.jsx';
import WorkerInfo from './pages/WorkerInfo/WorkerInfo.jsx';
import GuildMembers from './pages/GuildMembers/GuildMembers.jsx';

import './index.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Navigate to='main' replace/>} />
          <Route path='main' element={<MainPage />} />
          <Route path='workers' element={<Workers />} />
          <Route path='workers/:id' element={<WorkerInfo />} />
          <Route path='guilds' element={<Guilds />} />
          <Route path='guilds/:guildName' element={<GuildMembers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
