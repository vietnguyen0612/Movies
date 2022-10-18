import './App.scss'
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Intro from './components/intro/Intro';
import Content from './components/content/Content';
import Menu from './components/menu/Menu';
function App() {
  const [check, setCheck] = useState(false)
  return (
    <div className="App" >
      <Navbar check={check} setCheck={setCheck} />
      <Intro />
      <Content />
      <Menu />
    </div>
  );
}

export default App;
