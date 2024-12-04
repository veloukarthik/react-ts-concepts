
import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Todos() {
    const todos = useSelector((state: any) => state.todo.todos);
    const dispatch = useDispatch();
    const [input,setInput] = React.useState('');

    const addTodo = useCallback(() => {
        if(input === '') return;
        dispatch({ type: 'ADD_TODO', payload: input });
        setInput('');
    }, [todos,input]);

    return (
        <div className='container mx-auto py-4 lg:px-4'>
            <h1 className='text-6xl'>Todos</h1>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} className='border-2 border-gray-200 rounded-lg p-1' />
            <button onClick={()=>addTodo()} className='rounded-full py-2 px-4 bg-purple-600 text-white'>ADD TODO</button>
            <ul>
                {todos.sort().map((todo: any, index: number) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>);
}

export default Todos;