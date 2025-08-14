
import './App.css';
import Navigation from './Navigation/Navigation';
import ContactHeader from './ContactHeader/ContactHeader';
import ContactForm from './ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <>
      <Navigation/>
       <main className="main_container">
        <ContactHeader />
        <ContactForm/>
      </main>
      </>
    </div>
  );
}

export default App;
