import React from "react";
import "./App.css";
import IframeResizer, { IFrameComponent } from "iframe-resizer-react";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const onMessage = (ev: { iframe: IFrameComponent; message: any }) => {
    console.log(JSON.stringify(ev.message));
    history.push(ev.message.pathname);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            minHeight: "5em",
            backgroundColor: "lightgray",
            boxSizing: "border-box",
          }}
        >
          <h1>I am the header</h1>
        </div>
        <div style={{ display: "flex", flexGrow: 1, boxSizing: "border-box" }}>
          <div
            style={{
              minWidth: "10em",
              backgroundColor: "lightgreen",
              boxSizing: "border-box",
            }}
          >
            left nav
          </div>
          <div style={{ width: "100%", flexGrow: 1, boxSizing: "border-box" }}>
            <IframeResizer
              src={`https://localhost${history.location.pathname}`}
              style={{
                width: "100%",
                minHeight: "100%",
                boxSizing: "border-box",
                border: 0,
              }}
              onMessage={onMessage}
            ></IframeResizer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
