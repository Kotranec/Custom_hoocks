import { useState } from "react";
import {useScroll} from "../hooks/useScroll";

export const Scroll = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 10;
    
    const {parentRef, childRef} = useScroll(limit, page, fetchTodos);

    function fetchTodos(limitFetch, pageFetch) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limitFetch}&_page=${pageFetch}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1);
            })
    }

    return (
        <>
            <p style={{marginBottom: 2}}>useScroll</p>
            <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
                {todos.map(todo =>
                    <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                        {todo.id}. {todo.title}
                    </div>
                )}
                <div ref={childRef} style={{height: 20, background: 'green', color: 'yellow', textAlign: 'center'}}>
                    Loading...
                </div>
            </div>
        </>
    );
};
