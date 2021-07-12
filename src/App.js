import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CreateTodoForm} from "./components/createTodoForm/CreateTodoForm";
import {Todos} from "./components/todos/Todos";
import {
    setAddTodos,
    setLoadingFalse,
    setLoadingTrue,
    setPushTodo,
    setRemoveTodo,
    setStatusTodo
} from "./redux/actionCreators/ActionCreators";


function App() {
    const {todos, todosLoading, todosRemove, todoStatus} = useSelector(store => store.todosReducer);
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos');
            const data = await resp.json();
            dispatch(setAddTodos(data))
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoadingFalse())
        }
    }

    useEffect
    (() => {
        fetchTodos();
    }, []);

    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;
        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();
        dispatch(setPushTodo(data))
    }

    const delTodo = async (id) => {
        const respon = await fetch('http://localhost:8888/delete-todo/' + id, {
            method: 'DELETE'
        })
        dispatch(setRemoveTodo(id))
    }


    const statusTodos = async (id, completed) => {
        const respon = await fetch('http://localhost:8888/update-todo/' + id, {
            method: 'PATCH',
            body: JSON.stringify(completed)
        })
        const data = await respon.json()
        dispatch(setStatusTodo(data, id, completed))
    }

    return (
        <div>
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <Todos todos={todos}
                   isLoading={todosLoading}
                   todoStatus={todoStatus}
                   delTodo={delTodo}
                   todosRemove={todosRemove}
                   statusTodos={statusTodos}/>
        </div>
    );
}

export default App;
