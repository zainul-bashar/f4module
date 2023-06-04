import React,{useState} from "react";
import { Routes,Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import './App.css';

function App() {
  const[id,setId] = useState(-1);
  return (
    <div>
      <h1 className="nav">Social Media App</h1>
      <Routes>
        <Route path="/" element={<HomePage setId={setId}/>}></Route>
        <Route path={`/item/${id}`} element={<DetailPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
