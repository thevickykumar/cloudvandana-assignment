document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const emptyMessage = document.querySelector('.empty-message');
    
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
      
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
      
      // Remove empty message if it exists
      if (emptyMessage) {
        emptyMessage.remove();
      }
      
      // Create new list item
      const li = document.createElement('li');
      
      // Create task text span
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-btn';
      
      // Add event listener to delete button
      deleteButton.addEventListener('click', function() {
        li.remove();
        
        // If no tasks left, show empty message
        if (taskList.children.length === 0) {
          const newEmptyMessage = document.createElement('li');
          newEmptyMessage.className = 'empty-message';
          newEmptyMessage.textContent = 'No tasks yet. Add a task to get started!';
          taskList.appendChild(newEmptyMessage);
        }
      });
      
      // Append elements to list item
      li.appendChild(taskSpan);
      li.appendChild(deleteButton);
      
      // Append list item to task list
      taskList.appendChild(li);
      
      // Clear input field
      taskInput.value = '';
      
      // Focus on input field for next entry
      taskInput.focus();
    }
    
    // Add task when Add button is clicked
    addButton.addEventListener('click', addTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });