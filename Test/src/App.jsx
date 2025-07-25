import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CNavbar from './components/CNavbar'
import CFooter from './components/CFooter';
import TitleHomepage from './components/TitleHomepage';
import HomepageBody from './components/HomepageBody';

function App() {

  return (
    <>
      <CNavbar />
      <TitleHomepage />
      <HomepageBody />
      <CFooter />
    </>
  )
}

export default App
