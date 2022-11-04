import React, { useState, useEffect, useMemo } from 'react';

function Todo(props) {
    const [list, setList] = useState([])

    const todoInput = e => {
        let val = e.target.value;
        // if enter
        if (e.key === 'Enter') {
            let copy = [val, ...list];
            setList(copy);
            e.target.value = ''; // make default empty
        }
    }
    //console.log(list)

    const editAction = e => {

    }
    const deleteAction = e => {
        let copy = [...list];
        copy.shift(e)
        setList(copy);
        console.log(list)
    }


    return (
        <div id='Todo'>
            <input type="text" onKeyDown={todoInput} />
            <h2>
                List below
            </h2>
            {
                list != [] && (
                    <ul>
                        {list.map((v, i) => <li key={i}>
                            <span>{v}</span>
                            <button onClick={() => editAction(i)}>Edit</button>
                            <button onClick={() => deleteAction(i)}>Delete</button>
                        </li>)}
                    </ul>
                )
            }
        </div>
    );
}

export default Todo;