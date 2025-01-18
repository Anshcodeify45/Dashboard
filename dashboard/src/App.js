import Home from './Component/Home';
import Settings from './Component/Settings';
import About from './Component/About';
import {Routes,Route,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
