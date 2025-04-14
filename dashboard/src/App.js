import Home from './Component/Home';
import Settings from './Component/Settings';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Sidenav from './Component/Sidenav';
import Analytics from './Component/Analytics';
import Product from './Component/Product';
import Products from './Component/Products/Products';
function App() {
  return (
    <div className="App" style={{ display: 'flex' ,marginTop:8}}>
      
      <BrowserRouter>
      <Sidenav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
