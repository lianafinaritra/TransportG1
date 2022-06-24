import './App.css';
import Voyage from './Components/Voyage';
import Client from './Components/Client';
import Ville from './Components/Ville';
import Reservation from './Components/Reservation';
import Header from './Components/Header';
import Stats from './Components/Stats';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Reservation/>
    <div className="between shadow">
      <h1>Informations</h1>
    </div>
    <div className="big">
      <Voyage/>
      <Client/>
    </div>
    <Ville/>
    <div className="between shadow">
      <h1>Statistiques</h1>
    </div>
    <div className="bigtwo">
      <Stats/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
