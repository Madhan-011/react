const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React.JS",
); //heading is an js object where render will connvert that react element (js object) into html tag.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
