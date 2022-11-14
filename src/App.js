import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="draw_text">
        <svg width="350" height="40">
          <text
            x="40"
            y="30"
            fill="#000"
            stroke="#c64242"
            id="text-logo"
            stroke-width="2"
            font-size="24"
          >
            HAPPY BIRTHDAY TO YOU!
          </text>
        </svg>
        <svg width="300" height="100">
          <text
            x="100"
            y="40"
            fill="#000"
            stroke="#c64242"
            id="text-logo"
            stroke-width="2"
            font-size="30"
          >
            18.11 - Pek Ut
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;
