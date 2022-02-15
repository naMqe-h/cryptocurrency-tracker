import { AllCurrencies } from "./components/AllCurrencies";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="w-screen overflow-hidden flex flex-col container mx-auto px-24 mt-12">
      <Navbar />
      <AllCurrencies />
    </div>
  );
}

export default App;
