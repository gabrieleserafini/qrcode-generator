import QrCodeGenerator from "./components/QrCodeGenerator";
import Logo from "./favicon.png";

function App() {
  
  return (
    <div>
      <div className="logo" onClick={() => window.location.reload()}><img src={Logo} alt="logo" /><h2>Inflead</h2></div>
      <QrCodeGenerator/>
    </div>
  );
}

export default App;
