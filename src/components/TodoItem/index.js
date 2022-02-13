import "./index.css";

const TodoItem = (props) => {
  const { item } = props;

  return (
    <div>
      <h1>{item.inputTodo}</h1>
    </div>
  );
};

export default TodoItem;
