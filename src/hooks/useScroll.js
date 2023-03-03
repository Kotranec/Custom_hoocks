import {useEffect, useRef} from "react";

export const useScroll = (limit, page, callback) => {
    const parentRef = useRef();
    const childRef = useRef();
    const observer = useRef();    

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                setTimeout(() => callback(limit, page), 1000);
            }
        }, options)

        observer.current.observe(childRef.current)

        return function () {
            observer.current.unobserve(childRef.current)
        };
    });

    return {parentRef, childRef};
};