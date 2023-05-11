import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import NavigationBar from "./components/NavigationBar";


function App() {
  document.title = 'Movie App';
  return (
    <div>
      <div >
        <NavigationBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
