import Box from "./components/box"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          CryptoTop10
        </h1>
      </header>
      <Box rank="1" name="Bitcoin" price="40000"/>
      <Box rank="2" name="Ethereum" price="2800"/>
      <Box rank="3" name="BNB" price="400"/>
      <Box rank="4" name="Solana" price="99"/>
      <Box rank="5" name="XRP" price="0.64"/>
      <Box rank="6" name="Terra" price="89"/>
     
    </div>
  );
}

export default App;
