import { Component } from "react";
import TodoItem from "../TodoItem";
import { v4 } from "uuid";
import "./index.css";

class TodoApp extends Component {
  state = { inputTodo: "", todoList: [] };

  onChangeInput = (event) => {
    this.setState({ inputTodo: event.target.value });
  };

  onAddTodo = () => {
    const { todoList, inputTodo } = this.state;
    const newTodo = {
      id: v4(),
      inputTodo,
    };
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, newTodo],
      inputTodo: "",
    }));
  };

  render() {
    const { inputTodo, todoList } = this.state;
    return (
      <div>
        <h1>Create Your Todo</h1>
        <div>
          <h3>Create Task</h3>
          <input
            type="text"
            value={inputTodo}
            onChange={this.onChangeInput}
            placeholder="Enter Todo you want to add?"
          />
          <button onClick={this.onAddTodo}>Add</button>
        </div>
        {todoList.length > 0 &&
          todoList.map((item) => <TodoItem item={item} key={item.id} />)}
      </div>
    );
  }
}

export default TodoApp;
