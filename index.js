let tasks = ['running', 'reading']

const tasklistDOM = document.getElementById('text-list')

const dinoTask = {
  displayTasks: function() {
    tasklistDOM.innerHTML = ''
    tasks.forEach(task => {
      const liDOM = document.createElement('li')
      const textList = document.createTextNode(task)
      liDOM.appendChild(textList)
      tasklistDOM.appendChild(liDOM)
    })
  },

  addTask: function() {
    event.preventDefault()
    const submitText = document.getElementById('input-text').value
    if (submitText !== '') {
      tasks.push(submitText)
      dinoTask.displayTasks()
      document.getElementById('input-text').value = ''
    }
  },

  deleteTask: function() {
    console.log('delete task')
  }
}

dinoTask.displayTasks()
