import './controlbar.css'
function ControlBar({zawgyi,unicode,clearIt}) {

    const copyIt = (ref) => {
        ref.current.select()
        document.execCommand('copy');
    }
    return (
        <div>
            <input type="button" value="Copy Zawgyi" onClick={() => {copyIt(zawgyi)}}></input>
            <input type="button" value="Copy Unicode" onClick={() => {copyIt(unicode)}}></input>
            <input type="button" value="Clear" onClick={() => {clearIt()}}></input>
        </div>
    )
}

export default ControlBar;