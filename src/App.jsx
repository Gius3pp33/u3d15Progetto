import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MainSection from './components/MainSection';
import Player from './components/Player';
import './App.css';
import Sidebar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YourLibrary from './components/YourLibrary';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Container fluid className="main-container">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/your-library" element={<YourLibrary />} />
          </Routes>
        </Container>
        <Player />
      </BrowserRouter>
    </div>
  );
};

export default App;
