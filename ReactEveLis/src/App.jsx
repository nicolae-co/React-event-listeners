import './App.css'

function App() {

  function handleClick(){
    console.log("I was clicked")
  }
  function handleOnMouseHover(){
    console.log("I was hovered")
  }

  return (
    <div className="container">
            <img onMouseOver={handleOnMouseHover} src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
  )
}

export default App
