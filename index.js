let tasks = ['running', 'reading']

const tasklistDOM = document.getElementById('textlist')
window.onload = function() {}
const dinoTask = {
  displaytask: function() {
    tasklistDOM.innerHTML = ''
    tasks.forEach(task => {
      const liDOM = document.createElement('li')
      const textlist = document.createTextNode(task)
      liDOM.appendChild(textlist)
      tasklistDOM.appendChild(liDOM)
    })
  },

  addTask: function() {
    event.preventDefault()
    const submitText = document.getElementById('input-text').value
    if (submitText !== '') {
      tasks.push(submitText)
      dinoTask.displaytask()
      document.getElementById('input-text').value = ''
    }
  },
  deleteTask: function() {
    event.preventDefault()
    const deleteTask = document.createElement('delete')
  }
}
dinoTask.displaytask()
