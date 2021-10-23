// const app = document.getElementById('app');

// if (app) {
//   const h1 = document.createElement('h3');

//   h1.textContent = 'Tình yêu như chiếc bánh kem';

//   app.appendChild(h1);
//}

function createTodoListElement(todo) {
  if (!todo) return null;

  const liElement = document.createElement('li');
  liElement.textContent = todo.title;
  liElement.dataset.id = todo.id;

  return liElement;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;

  const ulElement = document.getElementById(ulElementId);

  if (ulElement) {
    todoList.forEach((subject) => {
      const li = createTodoListElement(subject);

      ulElement.appendChild(li);
    });
  }
}

//main
(() => {
  const todoList = [
    { id: 1, title: 'Learn Javascript' },
    { id: 1, title: 'Learn ReactJs' },
    { id: 1, title: 'Learn NextJs' },
  ];

  renderTodoList(todoList, 'todoList');
})();
