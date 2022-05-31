import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import GlobalStyle from "./theme/GlobalStyle.js";

function App() {
  const [login, setLogin] = useState(false);

  let content = login ? (
    <>
      <Shop />
      <button className="ui-button" onClick={() => setLogin(false)}>
        Выйти
      </button>
    </>
  ) : (
    <>
      <h2>Нужно залогиниться!</h2>
      <button className="ui-button" onClick={() => setLogin(true)}>
        Войти
      </button>
    </>
  );

  return (
    <div className="ui-container">
      <GlobalStyle />
      {content}
    </div>
  );
}

render(<App />, document.querySelector("#root"));
