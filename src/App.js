import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="hero mx-auto overflow-y-auto">
        <Nav />
        <Hero />
      </div>
      <section>
        <About />
      </section>
    </div>
  );
}

export default App;
