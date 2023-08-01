import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Single from "./Single";

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='contactView/:id' element={<Single></Single>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  )
}

export default App;
