import {useScroll} from "../hooks/useScroll";

export const Scroll = () => {
    const {parentRef, childRef, todos} = useScroll();

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
