import { useState, useEffect } from 'react';
import './App.css';
import NightSwitch from './components/NightSwitch'
import ToDoList from "./components/ToDoList"
import SpotifyPlayer from "./components/SpotifyPlayer"
import Quote from "./components/Quote"
import ColorPicker from "./components/ColorPicker"

function App() {

  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 0.5 });
  const [textColor, setTextColor] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const luminance = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b)/255;
    setTextColor(luminance > 0.5 ? "black" : "white")
  }, [color])

  return (
    <div className="app" style={{color: textColor}}>
      <img
        className="selectDisable"
        src={require(!checked ? './assets/night.jpeg' : './assets/day.jpeg')}
        alt=''
        style={{
          width: "100vw",
          height: "100vh",
          Zindex: "-90000000",
          position: "absolute",
          objectFit: "cover",
          userSelect: "none"
        }}
      />
      <div style={{
          position: "absolute",
          top: "10px",
          right: "5px"
      }}>
        <NightSwitch
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <section style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100vh"
      }}>
        <div style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "row",
          gap: "100px",
          marginLeft: "20px"
          }}>
          <SpotifyPlayer
            color={color}
            textcolor={textColor}
          />
          <ToDoList
            checked={checked}
            color={color}
            textColor={textColor}
          />
          <Quote
            color={color}
            textColor={textColor}
          />
        </div>
        <div style={{
          position: "absolute",
          bottom: "5px",
          right: "5px"
        }}>
          <ColorPicker
            color={color}
            setColor={setColor}
            textColor={textColor}
          />
        </div>
        <div style={{
          position: "absolute",
          bottom: "5px",
          left: "5px",
          color: "white",
          fontSize: "12px"
        }}>
          <em><a href="https://github.com/arangotang">Andres Arango</a> x <a href="https://github.com/ethanflower1">Ethan Flower</a></em>
        </div>
      </section>
    </div>
  )
}

export default App;