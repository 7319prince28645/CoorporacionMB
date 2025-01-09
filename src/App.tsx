import "./App.css";
import Banner from "./Components/Banner";
import Business from "./Components/Business";
import Caring from "./Components/Caring";
import Community from "./Components/Community";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import OurClients from "./Components/OurClients";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <OurClients/>
      <Community/>
      <Business/>
      <Caring/>
      <Customers/>
      <Footer/>
    </div>
  );
}

export default App;
