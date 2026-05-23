document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
            addtask(taskInput.value);
            taskInput.value = '';
    })

    function addtask(task){
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        })

        li.appendChild(deleteButton);
        taskList.appendChild(li)
    }
})