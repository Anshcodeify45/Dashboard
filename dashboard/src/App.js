import Home from './Component/Home';
import Settings from './Component/Settings';
import About from './Component/About';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Sidenav from './Component/Sidenav';
import Analytics from './Component/Analytics';
function App() {
  return (
    <div className="App" style={{ display: 'flex' ,marginTop:8}}>
      
      <BrowserRouter>
      <Sidenav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
