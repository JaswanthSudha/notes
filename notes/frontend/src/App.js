import NotesListPage from "./pages/NotesListPage";
import {Route,HashRouter as Router,Routes} from 'react-router-dom'
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from 'react-bootstrap'
import {Button} from "react-bootstrap";
import './App.css'

function App(){
return (
  <div className="App">
  <Router>
    <Header/>
    <Routes>
      <Route path="/" Component={NotesListPage} ></Route>
      <Route path="/note/:id" Component={NotePage}></Route>
    </Routes>
  </Router>
  </div>
);
}
export default App;