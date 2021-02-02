import './InputBox.css';
import {useState} from 'react';
import {useContext} from 'react';


function InputBox() {

  let TODO_STATUS = useContext(TODO_STATUS);
  let STATUS_MODE = useContext(STATUS_MODE);
  let TEXT_MODE = useContext(TEXT_MODE);

  const [todos, setTodos] = useState([]);
  


  const onKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      
        addTodo(event.target.value);
    }
  };

  const getNewTodoID = (todos) => {
    return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  };

  const addTodo = (text) => {
    const todo = {
    id: getNewTodoID(todos),
    text: text,
    textMode: TEXT_MODE.READ,
    status: TODO_STATUS.ACTIVE,
  };

  setTodos(todo);
};

  return (
    <>
      <div id='todos-wrapper'>
        <div class='input-box-wrapper'>
          <input type='checkbox' id='main-check-box' />
          <label for='main-check-box'>
            <i id='main-checkbox-icon' class='fas fa-chevron-down'></i>
          </label>
          <input
            id='addition-input'
            type='text'
            placeholder='What needs to be done?'
            onKeyDown={onKeyDown}
          />
        </div>

        <ul id='todo-list'>
            {todos.map((todo) => {
                <li className='todo' id={todo.id}></li>
            })}
        </ul>

        <div id='buttom_bar'>
          <span id='active-count'>0 items left</span>
          <button id='all-btn'>All</button>
          <button id='active-btn'>Active</button>
          <button id='completed-btn'>Completed</button>
          <button id='clear-btn'>Clear completed</button>
        </div>
      </div>
    </>
  );
}

export default InputBox;
