import React, {useState,useRef} from "react";
import './RabbitBox.css';
import ControlBar from './ControlBar';
import {zg2uni,uni2zg} from './Rabbit';

function RabbitBox() {
    
    const [zawgyi,setZawgyi] = useState('');
    const [unicode,setUnicode] = useState('');

    const zawgyiRef = useRef(null);
    const uniRef = useRef(null);

    const uniChange = (e) => {
        setUnicode(e.target.value)
        setZawgyi(uni2zg(e.target.value))
    }

    const zawgyiChange = (e) => {
        setZawgyi(e.target.value)
        setUnicode(zg2uni(e.target.value))
    }

    const clearIt = () => {
        setZawgyi("")
        setUnicode("")
    }

    return (
        <div className="rabbit-box">
            <div className="row">
                <div className="col-md">
                    <p>Unicode</p>
                    <textarea ref={uniRef} className='unicode' onChange={uniChange} value={unicode}></textarea>
                </div>
                <div className="col-md">
                    <p>Zawgyi</p>
                    <textarea ref={zawgyiRef} className='zawgyi' onChange={zawgyiChange} value={zawgyi}></textarea>
                </div>
            </div>   
            <ControlBar zawgyi={zawgyiRef} unicode={uniRef} clearIt={clearIt}></ControlBar>
        </div>
        )
    }
    
    export default RabbitBox;