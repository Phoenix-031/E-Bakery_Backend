import Sidebar from "./components/topbar/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import {Routes,Route} from 'react-router-dom';
import {UserList} from './pages/userList/UserList';


function App() {
  return (
      <Routes>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Route path="/users" element={<UserList/>}/>
      </div>
      </Routes>
  );
}

export default App;
