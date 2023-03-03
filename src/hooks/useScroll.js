import {useState, useEffect, useRef} from "react";

export const useScroll = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const parentRef = useRef();
    const childRef = useRef();
    const observer = useRef();
    const limit = 10;

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1);
            })
    }

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                fetchTodos(page, limit);
            }
        }, options)

        observer.current.observe(childRef.current)

        return function () {
            observer.current.unobserve(childRef.current)
        };
    });

    return {parentRef, childRef, todos};
};