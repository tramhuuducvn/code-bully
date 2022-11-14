import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="draw_text">
        <svg width="400" height="40">
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
        <svg width="400" height="100">
          <text
            x="64"
            y="40"
            fill="#000"
            stroke="#c64242"
            id="text-logo"
            stroke-width="2"
            font-size="32"
          >
            18.11 - Pek Ut
          </text>
        </svg>
        <div id="star-icon">
          <svg
            width="300"
            height="300"
            viewBox="-2 0 68 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.6028 1.68739C31.2108 -0.135432 33.7892 -0.135432 34.3972 1.68739L40.6877 20.5447C40.9601 21.3612 41.7243 21.9119 42.585 21.9119H62.8272C64.7774 21.9119 65.5744 24.4179 63.9826 25.5444L47.6975 37.0689C46.9781 37.578 46.6767 38.4982 46.9556 39.3343L53.1972 58.0449C53.8088 59.8783 51.7223 61.4268 50.1447 60.3103L33.6553 48.6413C32.963 48.1514 32.037 48.1514 31.3447 48.6413L14.8553 60.3103C13.2777 61.4268 11.1912 59.8783 11.8028 58.0449L18.0444 39.3343C18.3233 38.4982 18.0219 37.578 17.3025 37.0689L1.01744 25.5444C-0.574443 24.4179 0.222584 21.9119 2.17275 21.9119H22.415C23.2757 21.9119 24.0399 21.3612 24.3123 20.5447L30.6028 1.68739Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
