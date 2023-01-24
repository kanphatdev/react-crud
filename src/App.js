
import User from "./component/User";
import UserCreate from "./component/UserCreate";
import UserUpdate from "./component/UserUpdate";
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    
    <div>
      <Routes>
      
        <Route path="create"  element={<UserCreate></UserCreate>}/>
        <Route path="/"  element={<User></User>}/>
        <Route path="update/"  element={<UserUpdate></UserUpdate>}/>
        
      </Routes>
   
    </div>
  );
}

export default App;
