import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import AllList from "./pages/allpackages/List";
import Login from "./pages/login/Login";
import Package from './pages/Package/Package'
import RecList from "./pages/recommendation/List";
import Register from "./pages/register/register";
import FavList from "./pages/favorites/List"
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/packages" element={<List/>}/>
        <Route path="/packages/:id" element={<Package/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/allpackages" element={<AllList/>}/>
        <Route path="/recommendations" element={<RecList/>}/>
        <Route path="/favorites" element={user?<FavList/>:<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
