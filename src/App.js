import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Users from './Users';
import Form from './Form';
import ProForm from './ProForm';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Products';

function App() {
  return (
    <BrowserRouter>
      <div id='wrapper'>
        <Sidebar />
        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Navbar />
            <div className='container-fluid'>
              <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/form" element={<Form />} />
                <Route path="/pro-form" element={<ProForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
