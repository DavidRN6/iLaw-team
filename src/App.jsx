import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-primary">
      <Header />
      <div className="container px-6 mx-auto bg-background">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
