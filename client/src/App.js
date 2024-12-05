import { BrowserRouter, Routes, Route } from "react-router-dom"
//Browswe Router for multipage navigation in React
import Add from "./Pages/Add";
import Items from "./Pages/Items";
import Update from "./Pages/Update";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items/>}/> {/*renders component based on the URL*/}
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
