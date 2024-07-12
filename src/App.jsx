import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MainSection from './components/MainSection';
import Player from './components/Player';
import './App.css';
import Sidebar from './components/SideBar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Container fluid>
        <MainSection />
      </Container>
      <Player />
    </div>
  );
};

export default App;
