import DragMove from "./DragMove"
import {useState, useEffect} from "react"

export default function Quote({color}) {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  })
  const [isDragging, setIsDragging] = useState(false);
  const [quotesData, setQuotesData] = useState(null);

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(response => {
        setQuotesData(response[Math.floor(Math.random() * response.length)])
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <DragMove onDragMove={handleDragMove} isDragging={isDragging} setIsDragging={setIsDragging}>
      <div style={{maxWidth: '400px'}}>
        {quotesData && <div
        className="spotify-player"
        style={{
          transform: `translateX(${translate.x}px) translateY(${translate.y}px) scale(${isDragging ? '101%' : '100%'})`,
          padding: "10px",
          backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
          borderRadius: "8px"
        }}>
          <h1 style={{fontSize: "14px", margin: "0"}}>"{quotesData.text}"</h1>
          <em style={{fontSize: "10px"}}>-{quotesData.author || "some dude/chick"}</em>
        </div>}

      </div>
    </DragMove>
  )
}