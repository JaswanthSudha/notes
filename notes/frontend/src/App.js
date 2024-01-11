import NotesListPage from "./pages/NotesListPage";
import {Route,HashRouter as Router,Routes} from 'react-router-dom'
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
function App(){
return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" Component={NotesListPage} ></Route>
      <Route path="/note/:id" Component={NotePage}></Route>
    </Routes>
  </Router>
);
}
export default App;