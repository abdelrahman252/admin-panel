import React, { useContext } from 'react'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import List from './pages/list/List.jsx'
import Single from './pages/single/Single.jsx'
import New from './pages/new/New.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './formSource.js'
import "./pages/style/dark.css"
import { DarkModeContext } from './pages/context/darkModeContext.js'


function App() {
  const {darkMode}= useContext(DarkModeContext);

  return (
    <div className={darkMode ?"app dark":"app"}>

    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home/> } />
        <Route path="login" element={<Login/> }/>
        <Route path="users">
          <Route index element={<List/> } />
          <Route path=":userId" element={<Single/> }/>
          <Route path="new" element={<New inputs={userInputs} title={"add new user"}/> }/>
        </Route>
        <Route path="products" >
          <Route index element={<List/> } />
          <Route path=":productId" element={<Single/> }/>
          <Route path="new" element={<New inputs={productInputs} title={"add new product"}/> }/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
