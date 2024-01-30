import './App.css';
import Card from './components/card/card';
import Header from './components/header/header';
import Search from './components/search/search';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Card></Card>
    </div>
  );
}

export default App;
