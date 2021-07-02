import Footer from "./components/footer/footer";
import Projects from "./components/project/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="app">
      <div className="layer">
        <div className="content">
          <center>
            <div className="section">
              <Skills />
            </div>
            <div className="section">
              <Projects />
            </div>
            <div className="section">
              <Footer />
            </div>
          </center>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
