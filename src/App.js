
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";
import MyButton from "./components/MyButton";

function App() {

  return (
      <BrowserRouter>
        <div className="App">
            <h2>App.js</h2>

            <MyButton text="버튼" onClick={()=>alert("버튼 클릭")} type={"positive"}></MyButton>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/new" element={<New/>}></Route>
                <Route path="/edit" element={<Edit/>}></Route>
                <Route path="/diary/:id" element={<Diary/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
