import { RgbaColorPicker } from "react-colorful"
import { ThemeIcon } from "@mantine/core"
import { Photo, CircleX } from "tabler-icons-react"
import { useState } from "react"


export default function ColorPicker({color, setColor, textColor}) {
  const [isShown, setIsShown] = useState(false)

  return (
    <section>
      {!isShown
        ?
        <ThemeIcon size="xl" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={() => setIsShown(true)}>
          <Photo size={20} />
        </ThemeIcon>
        :
        <>
          <CircleX
            size={30}
            strokeWidth={2}
            color={"white"}
            style={{position: "absolute", right: "5px", top: "-30px"}}
            onClick={() => setIsShown(false)}
          />
          <div
            style={{
              padding: "10px",
              transform: "scale(100%)",
              borderRadius: "8px",
              backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
              width: "200px"
            }}>

              <RgbaColorPicker
                  color={color}
                  onChange={setColor}
                  textColor={textColor}
              />
          </div>
        </>}
    </section>
  )
}