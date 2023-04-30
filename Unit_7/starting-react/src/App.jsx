// Using import keyword to connect to and bring in CSS from CSS file
import "./App.css";
//importing the header component, "from" keyword is use to bring in/ref the file path
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutMe/AboutMe";

// This is a Functional Component? it is declared with the function keyword, the name of the function is the component name(Capitalized/PascalCase)
function App() {
  // Functional Components have a single return
  return (
    // JSX will only allow ONE JSX ELEMENT to be returned (that element can contain many child elements)
    <div className="App">
      {/* To use an imported component: it gets written/called as a self closing tag */}
      <Header />
      {<AboutMe />}
      {<Footer />}
    </div>
  );
}

// How the functional component get exported: export default component-name/ function-name (Needs to match!)
export default App;
