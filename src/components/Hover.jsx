import { useRef } from "react";
import {useHover} from "../hooks/useHover";

export const Hover = () => {
    const ref = useRef();
    const isHover = useHover(ref);
    return (
        <>
            <p style={{marginBottom: 2}}>useHover</p>
            <div ref={ref} style={{width: 100, height: 100, backgroundColor: isHover ? 'blue' : 'yellow'}}>
            </div>
        </>
    )
}
