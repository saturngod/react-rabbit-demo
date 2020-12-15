import React, {useState,useRef} from "react";
import ControlBar from "./controlbar";

function RabbitBox() {
    var rabbit = require('./Rabbit').default;
  
  const [zawgyi, setZawgyi] = useState('');
  const [unicode, setUnicode] = useState('');

  
    const zawgyiTextRef = useRef(null);
    const unicodeTextRef =  useRef(null);

  const zawgyiChange = (e) => {
    setZawgyi(e.target.value)
    setUnicode(rabbit.zg2uni(e.target.value))
  }

  const unicodeChange = (e) => {
    
    setUnicode(e.target.value)
    setZawgyi(rabbit.uni2zg(e.target.value))
  }
  const clearIt = () => {
    setZawgyi("")
    setUnicode("")
  }

  return (
    <div className="App">
      Zawgyi
      <textarea ref={zawgyiTextRef} className="Zawgyi" id="zawgyi" onChange={zawgyiChange} value={zawgyi}></textarea>
      Unicode
      <textarea ref={unicodeTextRef} className="Unicode" id="unicode" onChange={unicodeChange} value={unicode}></textarea>

      <ControlBar zawgyi={zawgyiTextRef} unicode={unicodeTextRef} clearIt={clearIt}></ControlBar>
    </div>
  );
}

export default RabbitBox;