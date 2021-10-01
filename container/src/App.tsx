import React from "react";
import logo from "./logo.svg";
import "./App.css";
//@ts-ignore
import CounterAppTwo from "app2/CounterAppTwo";
//@ts-ignore
import CounterAppOne from "app1/CounterAppOne";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <React.Suspense fallback="Loading header...">
        <div
          style={{
            border: "1px dashed black",
            height: "50vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>CONTAINER</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                marginRight: "2rem",
                padding: "2rem",
                border: "1px dashed black",
              }}
            >
              <h2>APP-1</h2>
              <CounterAppOne />
            </div>
            <div style={{ border: "1px dashed black", padding: "2rem" }}>
              <h2>APP-2</h2>
              <CounterAppTwo />
            </div>
          </div>
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
