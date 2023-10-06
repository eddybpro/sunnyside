import "./App.css";
import Audience from "./components/Audience";
import Brand from "./components/Brand";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import GraphicPhoto from "./components/GraphicPhoto";
import Header from "./components/Header";
import Photos from "./components/Photos";

function App() {
  return (
    <>
      <Header />
      <main>
        <Brand />
        <Audience />
        <GraphicPhoto />
        <Clients />
        <Photos />
      </main>
      <Footer />
    </>
  );
}

export default App;
