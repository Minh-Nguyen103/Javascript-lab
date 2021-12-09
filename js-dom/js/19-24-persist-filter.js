function getAllTodoElements() {
  return document.querySelectorAll('#todoList > li');
}

function isMatchSearchTerm(liElement, searchTerm) {
  if (!liElement) return false;

  //search is empty -> show all
  //searchTerm !== empty > filter todo

  if (searchTerm === '') return true;

  const titleElement = liElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

function isMatchFilterStatus(liElement, filterStatus) {
  return filterStatus === 'all' || liElement.dataset.status === filterStatus;
}

function isMatch(liElement, params) {
  return (
    isMatchSearchTerm(liElement, params.get('searchTerm')) &&
    isMatchFilterStatus(liElement, params.get('status'))
  );
}

// function searchTodo(searchTerm) {
//   const todoElementList = getAllTodoElements();

//   for (const todoElement of todoElementList) {
//     const needToShow = isMatch(todoElement, searchTerm);

//     todoElement.hidden = !needToShow;
//   }
// }

function initSearchInput(params) {
  //find search term input
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;

  if (params.get('searchTerm')) {
    searchInput.value = params.get('searchTerm');
  }

  //attach change event
  //đồi với dạng input type là text, chỉ trigger sự kiện change khi giá trị có thay dổi và click ra ngoài (hoặc là thay đổi rồi nhần enter)
  //muốn trigger sự kiện change với input type là text thì ta sử dụng event là input

  //đổi với input type là checkbox, radio, dropdown select thì trigger sự kiện change ngay khi click

  searchInput.addEventListener('input', () => {
    if (!searchInput.value) {
      removeFilter('searchTerm');
    } else {
      handleFilterChange('searchTerm', searchInput.value);
    }
  });
}

// function filterTodo(filterStatus) {
//   const todoElementList = getAllTodoElements();

//   for (const todoElement of todoElementList) {
//     const needToShow = filterStatus === 'all' || todoElement.dataset.status === filterStatus;

//     todoElement.hidden = !needToShow;
//   }
// }

function initFilterStatus(params) {
  //find select
  const filterStatusSelect = document.getElementById('filterStatus');
  if (!filterStatusSelect) return;

  if (params.get('status')) {
    filterStatusSelect.value = params.get('status');
  }

  //attach event change
  filterStatusSelect.addEventListener('change', () => {
    handleFilterChange('status', filterStatusSelect.value);
  });
}

function checkParams(liElement, params) {
  if (!params.get('searchTerm')) {
    return isMatchFilterStatus(liElement, params.get('status'));
  }

  return isMatch(liElement, params);
}

function handleFilterChange(filterName, filterValue) {
  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);

  history.pushState({}, '', url);

  const todoElementList = getAllTodoElements();
  // console.log(url.searchParams.toString());

  if (
    // !url.searchParams.toString() ||
    url.searchParams.toString().includes('searchTerm') &&
    url.searchParams.toString().includes('status')
  ) {
    for (const todoElement of todoElementList) {
      const needToShow = isMatch(todoElement, url.searchParams);

      todoElement.hidden = !needToShow;
    }
  } else if (url.searchParams.toString().includes('searchTerm')) {
    for (const todoElement of todoElementList) {
      const needToShow = isMatchSearchTerm(todoElement, url.searchParams.get('searchTerm'));

      todoElement.hidden = !needToShow;
    }
  } else if (url.searchParams.toString().includes('status')) {
    for (const todoElement of todoElementList) {
      const needToShow = isMatchFilterStatus(todoElement, url.searchParams.get('status'));

      todoElement.hidden = !needToShow;
    }
  }

  // for (const todoElement of todoElementList) {
  //   const needToShow = isMatch(todoElement, url.searchParams);

  //   todoElement.hidden = !needToShow;
  // }
}

function removeFilter(filterName) {
  const url = new URL(window.location);
  url.searchParams.delete(filterName);

  history.pushState({}, '', url);

  const todoElementList = getAllTodoElements();

  for (const todoElement of todoElementList) {
    const needToShow = isMatchFilterStatus(todoElement, url.searchParams.get('status'));

    todoElement.hidden = !needToShow;
  }
}

//MAIN
(() => {
  const params = new URLSearchParams(window.location.search);
  initSearchInput(params);
  initFilterStatus(params);
})();
