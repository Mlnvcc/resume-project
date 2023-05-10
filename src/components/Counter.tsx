import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const clickButton = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button className={classes.btn} onClick={clickButton}>
                {count}
            </button>
        </div>
    )
}