import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard, Home, LoginUsers, RegisterUsers } from "./pages";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="register" element={<RegisterUsers/>}/>
              <Route path="login" element={<LoginUsers/>}/>
            </Route>

            <Route path="/dashboard" element={<DashBoard/>}/>
          </Routes>
        </BrowserRouter>
       
    
      </header>
    </div>
  );
}

export default App;
