import './App.css';
import FlightSelection from './components/FlightSelection';
import Footer from './components/Footer';
import Header from './components/Header';
import Passenger from './components/Passenger';
import TripSelection from './components/TripSelection';

function App() {

    return (
        <div className="container">
            <Header />
            <div className="flight-form">
                <div className="content clearfix">
                    <TripSelection />
                    <FlightSelection />
                    <Passenger />
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default App;
