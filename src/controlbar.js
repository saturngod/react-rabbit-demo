import './ControlBar.css';
function ControlBar({zawgyi,unicode,clearIt}) {
    const copyToClipboard = (ref) => {
        ref.current.select()
        document.execCommand("copy")
    }
    return (
        <div className="row control-box">
           <div className="text-center">
                <input type="button" className="btn btn-secondary" value="Clear" onClick={() => {clearIt()}}></input>
                <input type="button" className="btn btn-primary" onClick={() => copyToClipboard(unicode)} value="Copy Unicode"></input>
                <input type="button" className="btn btn-primary" onClick={() => copyToClipboard(zawgyi)} value="Copy Zawgyi"></input>
                
            </div>
           

        </div>
    )
}

export default ControlBar;