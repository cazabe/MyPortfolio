import NavComponent from "./Components/Layout/Nav";
import Footer from "./Components/Layout/Footer";
import Content from "./Components/Pages/content";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="main">
          <NavComponent />
          <Content />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
