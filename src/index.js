import { Example } from "./example.js";
import { App } from "./App.js";
import "./css/style.css";

const Index = () => {
  const element = document.createElement("div");
  element.innerHTML = "<h2>Index 컴포넌트</h2>";
  element.className = "index";

  return element;
};

document.body.appendChild(Index());
document.body.appendChild(App());
document.body.appendChild(Example());
