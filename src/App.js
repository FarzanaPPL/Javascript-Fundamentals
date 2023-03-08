import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import RandomJokes from "./components/RandomJokes";
import UserProfile from './components/UserProfile'
import Clock from './components/Clock'

const App=()=>(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route exact path='/' element={<RandomJokes />} />
    <Route exact path='/userprofile' element={<UserProfile />} />
    <Route exact path='/clock' element={<Clock />} />
    </Routes>
  </BrowserRouter>
)

export default App;
