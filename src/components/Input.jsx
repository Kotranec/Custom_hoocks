import {useInput} from "../hooks/useInput";

export const Input = () => {
    const inputState = useInput('');
    return (
        <>
            <p style={{marginBottom: 2}}>useInput</p>
            <input type='text' {...inputState}/>
            <button onClick={() => alert(inputState.value)}>Click</button>
        </>
    );
}

  