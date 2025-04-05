document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Function to save tasks to localStorage
  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Function to create a new task element
  const createTaskElement = (task) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    if (task.completed) {
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      li.classList.toggle('completed');
      saveTasks();
    });

    const span = document.createElement('span');
    span.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter((t) => t !== task);
      li.remove();
      saveTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    return li;
  };

  // Function to render all tasks
  const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
      taskList.appendChild(createTaskElement(task));
    });
  };

  // Add new task
  addButton.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
      const task = { text, completed: false };
      tasks.push(task);
      taskList.appendChild(createTaskElement(task));
      taskInput.value = '';
      saveTasks();
    }
  });

  // Add task on Enter key
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addButton.click();
    }
  });

  // Initial render
  renderTasks();
});
