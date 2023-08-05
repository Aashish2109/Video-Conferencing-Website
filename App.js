
import './App.css';
import Home from './component/home';
import {Routes,Route} from 'react-router-dom'
import Room from './component/Room';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomID'element={<Room/>}/>
        
      </Routes>
      </div>
    </>
  );
}

export default App;
