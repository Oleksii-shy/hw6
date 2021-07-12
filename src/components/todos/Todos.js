import React from "react";

export const Todos = ({todos, isLoading, delTodo, statusTodos, todoStatus}) => {
    if(isLoading) return <h1>LOADING...</h1>
    return (
        <div>
            {todos.map(todo => (
                <React.Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}
                        <button onClick={
                            () => {
                                statusTodos(todo.id, todo.completed)
                            }
                        }>status
                        </button>
                        <div>
                            <button onClick={
                                () => delTodo(todo.id)

                            }>delet todo
                            </button>
                        </div>
                    </div>
                    <hr/>
                </React.Fragment>
            ))}
        </div>
    )
}