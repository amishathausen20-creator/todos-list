import { useState } from "react";
import "./App.css";

function App() {
  let [todoList, setTodoList] = useState([]);

  let saveTodoList = (event) => {
    event.preventDefault();
    let todoName = event.target.todoName.value;
    if (!todoList.includes(todoName)) {
      let finalDoList = [...todoList, todoName];
      setTodoList(finalDoList);
    } else {
      alert("Todo Name All ready Exist...");
    }
  };

  let list = todoList.map((value, index) => {
    return (
      <TodoListItem
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="app">
      <div>
        <h3 className="title">ToDo List</h3>
        <form onSubmit={saveTodoList}>
          <input type="text" name="todoName" />
          <button type="submit" className="button">
            Save
          </button>
        </form>
        <div className="outerDiv">
          <ul>{list}</ul>
        </div>
      </div>
    </div>
  );
}
export default App;

function TodoListItem({ value, indexNumber, todoList, setTodoList }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todoList.filter((v, i) => i !== indexNumber);
    setTodoList(finalData);
  };
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completeTodo" : ""} onClick={checkStatus}>
      {indexNumber + 1} {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
