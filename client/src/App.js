import './App.css';
import Book from './components/book.js'
import Content from './components/content.js';
import Home from './components/home.js';
import About from './components/about.js';
import Service from './components/service.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Home />
      <Content />
      <Book />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
