import DragMove from "./DragMove"
import {useState} from "react"

export default function SpotifyPlayer({color}) {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  })
  const [isDragging, setIsDragging] = useState(false);
  const [loaded, setLoaded] = useState(false)

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  var ifrm = <iframe
    title="spotify"
    onLoad={() => setLoaded(true)}
    style={{borderRadius: "8px"}}
    src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
    width="100%"
    height="80"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
  </iframe>

  return (
    <DragMove onDragMove={handleDragMove} isDragging={isDragging} setIsDragging={setIsDragging}>
      <div
        className="spotify-player"
        style={{
          transform: `translateX(${translate.x}px) translateY(${translate.y}px) scale(${isDragging ? '101%' : '100%'})`,
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`
        }}>
          {!loaded && <em style={{transform: "scale(100%)", position: "absolute", textAlign: "center", left:"0", right:"0", margin:"30px auto"}}>vibes incoming...</em>}
          {ifrm}
      </div>
    </DragMove>
  )
}