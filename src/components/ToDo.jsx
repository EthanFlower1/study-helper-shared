import { Transition, Button, Checkbox, Textarea } from '@mantine/core';
import { useState } from "react"

export default function ToDo({value, handleTyping, checked, deleteTodo}) {

  const [isHovered, setIsHovered] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  // const []

  const todoStyles = {
    borderRadius: "5px",
    borderStyle: "none",
    margin: "5px",
    // height: "30px",
    textAlign: "align-left",
    width: "180px",
    resize: "none",
    textDecorationLine: isFinished ? "line-through" : "none",
    marginTop: "8px"
    // overflowX: "visible"
  }

  return (
    <form
      className={'todo-item'}
      onSubmit={e => e.preventDefault()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-between"

      }}
    >
        <Checkbox onClick={()=>setIsFinished(prevIsFinished => !prevIsFinished)}/>
        <Textarea
          className={'todo-text-field'}
          value={value}
          onChange={handleTyping}
          style={todoStyles}
          placeholder={"hello world"}
          autosize
          minRows={1}
          maxRows={4}
          styles={{
            defaultVariant: {color: "red"}
          }}

          // size={4000}
          // onFocus={}
        />
        <Transition
          mounted={isHovered}
          transition="slide-left"
          duration={400}
          timingFunction="ease"
          >
          {(styles) => <Button
            color="red"
            style={styles}
            onClick={deleteTodo}
            compact
            >Delete</Button>}
        </Transition>
    </form>
  )
}