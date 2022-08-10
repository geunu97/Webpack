const App = () => {
  const element = document.createElement("div");
  element.innerHTML = "<h2>App 컴포넌트</h2>";

  return element;
};

document.body.appendChild(App());
