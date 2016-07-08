'use strict';

// var checkbox = document.createElement('input')
// checkbox.type = "checkbox"
// checkbox.name = "name"
// checkbox.value = "value"
// checkbox.id = "taskBox"
// checkbox.appendChild(li)

document.getElementById('btnAdd').addEventListener('click', function () {
  var todoList = document.getElementById('todoList');
  var newTask = document.getElementById('newTask').value;
  var li = document.createElement('li');
  li.classList.add('todoItems');
  li.innerHTML = newTask;
  todoList.appendChild(li);
});