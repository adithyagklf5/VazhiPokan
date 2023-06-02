import About from './components/about/About';
import Create from './components/create/Create';
import Update from './components/update/Update';
import Read from './components/read/Read';
import Login from './components/login/Login';
import RegisterPage from './components/register/register';
import Userpage from './components/userpage/userpage';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AuthContextProvider from './components/context/AuthContext';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <Routes>
          <Route path="/userpage" element={<Userpage />} />
            <Route path="/read" element={<Read />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
