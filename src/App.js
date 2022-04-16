import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo " alt="logo" />
        </header>{" "}
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>{" "}
        <footer className="App-footer">
          <small>
            This project was coded by Mitra Toghtamesh and is{" "}
            <a
              href="https://github.com/mitra0079/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open - sourced{" "}
            </a>{" "}
            on Github and{" "}
            <a
              href="https://nostalgic-dijkstra-4dccf1.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify{" "}
            </a>{" "}
          </small>{" "}
        </footer>{" "}
      </div>{" "}
    </div>
  );
}
