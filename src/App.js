// import './App.css';
import Register from './Components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Todo from './Components/Todo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
