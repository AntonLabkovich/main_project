import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {

    const [count, useCount] = useState(0);

    const onClickIncriment = () => {
        useCount(count => count ? count + 1 : count)
    }

    const onClickDicriment = () => {
        useCount(count - 1)
    }

    return (
        <div className={classes.button}>
            <button onClick={onClickIncriment}>Incriment</button>
            <span>{count}</span>
            <button onClick={onClickDicriment}>Dicriment</button>
        </div>
    )
}