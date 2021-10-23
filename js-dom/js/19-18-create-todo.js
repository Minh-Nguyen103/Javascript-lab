function createTodoElement(todo) {
  if (!todo) return null;

  //find template
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  //clone li element
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;
  todoElement.dataset.status = todo.status;

  //render todo status
  const divElement = todoElement.querySelector('div.todo');
  if (!divElement) return null;

  const alertClass = todo.status === 'completed' ? 'alert-success' : 'alert-secondary';
  divElement.classList.remove('alert-secondary');
  divElement.classList.add(alertClass);

  //update content where needed
  const titleElement = todoElement.querySelector('.todo__title');
  if (titleElement) titleElement.textContent = todo.title;

  //render style for button
  // console.log(todo);
  const newText = todo.status === 'pending' ? 'Finish' : 'Reset';
  const newBtnClass = todo.status === 'pending' ? 'btn-success' : 'btn-dark';

  //TODO: attach events for  buttons
  //add click event for mark-as-done button
  const markAsDoneButton = todoElement.querySelector('.mark-as-done');
  markAsDoneButton.textContent = newText;
  markAsDoneButton.classList.remove('btn-success', 'btn-dark');
  markAsDoneButton.classList.add(newBtnClass);
  if (!markAsDoneButton) return null;
  markAsDoneButton.addEventListener('click', () => {
    const currentStatus = todoElement.dataset.status;
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';

    //get current todo list
    //update status of current todo
    //save to local storage

    const todoList = getTodoList();
    const index = todoList.findIndex((x) => x.id === todo.id);

    if (index >= 0) {
      todoList[index].status = newStatus;
      localStorage.setItem('todo_list', JSON.stringify(todoList));
    }

    //update style finish button
    const newText = todoElement.dataset.status === 'pending' ? 'Reset' : 'Finish';
    const newBtnClass = todoElement.dataset.status === 'pending' ? 'btn-dark' : 'btn-success';

    markAsDoneButton.textContent = newText;
    markAsDoneButton.classList.remove('btn-success', 'btn-dark');
    markAsDoneButton.classList.add(newBtnClass);

    //update data-status on li element
    todoElement.dataset.status = newStatus;

    //update alertClass accordingly
    const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-secondary';
    divElement.classList.remove('alert-success', 'alert-secondary');
    divElement.classList.add(newAlertClass);
  });

  //add click event for remove button
  const removeButton = todoElement.querySelector('.remove');
  if (removeButton) {
    removeButton.addEventListener('click', () => {
      const todoList = getTodoList();
      const newTodoList = todoList.filter((x) => x.id !== todo.id);
      console.log(newTodoList);

      localStorage.setItem('todo_list', JSON.stringify(newTodoList));

      todoElement.remove();
    });
  }

  return todoElement;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;

  //find ul element
  //loop through todoList
  //each todo -> create li element -> append to ul

  const ulElement = document.getElementById(ulElementId);

  if (!ulElementId) return;

  for (const todo of todoList) {
    const liElement = createTodoElement(todo);
    ulElement.appendChild(liElement);
  }
}

function getTodoList() {
  try {
    return JSON.parse(localStorage.getItem('todo_list')) || [];
  } catch {
    return [];
  }
}

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoList = getTodoList();

  //get form values
  const todoInput = document.getElementById('todoText');
  if (!todoInput) {
    //Không dùng alert trong dự án thực tế
    alert('Todo Input Not Found');
    return;
  }

  const todoText = todoInput.value;

  //validate form values
  //check empty
  if (!todoText) {
    alert("Input can' be empty");
    return;
  }

  const lowerCaseTodoText = todoText.toLowerCase();
  //Title is unique
  for (let index = 0; index < todoList.length; index++) {
    if (todoList[index].title.toLowerCase() === lowerCaseTodoText) {
      alert('Title have existing');
      return;
    }
  }

  const newTodo = {
    id: createTodoId(),
    title: todoText,
    status: 'pending',
  };

  //save

  todoList.push(newTodo);
  localStorage.setItem('todo_list', JSON.stringify(todoList));

  //apply DOM changes
  const newLiElement = createTodoElement(newTodo);
  const ulElement = document.getElementById('todoList');
  if (ulElement) ulElement.appendChild(newLiElement);

  //reset form
  const todoForm = document.getElementById('todoFormId');
  todoForm.reset();
}

function createTodoId() {
  const todoList = getTodoList();
  return todoList[todoList.length - 1].id + 1;
}

(() => {
  // const todoList = [
  //   { id: 1, title: 'Javascript', status: 'pending' },
  //   { id: 2, title: 'ReactJs', status: 'completed' },
  //   { id: 3, title: 'NextJs', status: 'pending' },
  // ];

  const todoList = getTodoList();

  renderTodoList(todoList, 'todoList');

  //register submit event for todo form
  const todoForm = document.getElementById('todoFormId');
  if (todoForm) {
    todoForm.addEventListener('submit', handleTodoFormSubmit);
  }
})();

// const a = 'minh   nguyen     hahaha';
// const split = a.split(' ');
// for (let index = 0; index < split.length; index++) {
//   if (split[index][0]) {
//     split[index] = `${split[index][0].toUpperCase()}${split[index].slice(1).toLowerCase()}`;
//   }
// }
// const filterSplit = split.filter((x) => x !== '');

// console.log(filterSplit.join(' '));
