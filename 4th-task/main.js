let tasks = [];

const taskName = document.getElementById('taskName');
const taskType = document.getElementById('taskType');
const taskList = document.getElementById('taskList');
const searchBar = document.getElementById('searchBar');
const typeFilter = document.getElementById('typeFilter');

const btnSubmitTask = document.querySelector('.btn-submit');
btnSubmitTask.addEventListener('click', addTask);

function addTask() {
  const title = taskName.value;
  const type = taskType.value;

  if (!type) {
    alert('choose type');
    return;
  }

  const task = {
    title,
    type,
    dateAdded: new Date().toLocaleString(),
  };

  tasks.push(task);
  taskName.value = '';
  taskType.value = '';

  displayTasks();
  console.log('Task added:', task);
  alert(`Task added successfully
    ${task.title} of type: ${task.type} at ${task.dateAdded}
    `);
}

function displayTasks(filteredTasks = tasks) {
  taskList.innerHTML = '';
  let markup = '';

  filteredTasks.forEach((task, index) => {
    const className = task.type.toLowerCase().replace(' ', '-');
    markup += `
        <li class="task-item ${className}">
          <span>${task.title} (${task.type}) - Added: ${task.dateAdded}</span>
          <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        </li>
      `;
  });

  taskList.innerHTML = markup;

  const btnEdit = document.querySelectorAll('.edit');
  const btndelete = document.querySelectorAll('.delete');

  btnEdit.forEach((btn, i) =>
    btn.addEventListener('click', function () {
      editTask(i);
    })
  );
  btndelete.forEach((btn, i) =>
    btn.addEventListener('click', function () {
      deleteTask(i);
    })
  );
}

function editTask(index) {
  const newName = prompt('Enter new task name:');

  const newType = prompt('Enter new task type (Task/In Progress/Done):');

  if (
    newName &&
    ['task', 'in Progress', 'done'].includes(newType.toLocaleLowerCase())
  ) {
    tasks[index].title = newName.trim();
    tasks[index].type = newType;
    displayTasks();
    console.log('Task edited:', tasks[index]);
    alert('Task updated successfully!');
  } else {
    alert('Invalid input');
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
  console.log('tasks after deletion', tasks);
  alert('Task deleted!');
}

function filterTasks() {
  searchBar.value = '';
  const typeFilterValue = typeFilter.value;

  if (typeFilterValue !== 'all') {
    let filteredTasks = tasks.filter(task => task.type === typeFilterValue);
    displayTasks(filteredTasks);
  }
  if (typeFilterValue === 'all') {
    displayTasks();
  }
}

function searchTasks() {
  typeFilter.value = 'all';
  const searchTerm = searchBar.value.toLowerCase().trim();
  let filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm)
  );
  displayTasks(filteredTasks);
}

typeFilter.addEventListener('change', filterTasks);
searchBar.addEventListener('change', searchTasks);

displayTasks();
