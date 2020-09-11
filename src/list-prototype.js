'use strict';

/* List Prototype

  This object will contain all the methods for your many lists
  in your app you will use Object.create(listPrototype) to create many lists
  it will include all the functions you need for a list:
    logic
    views
    handlers

  You will need to use binding (or arrow functions) to connect handlers to views

*/

export const listPrototype = {
  printState: function () {
    console.log(this.state.name);
  },
  render: function () {
    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = this.state.name;
    buttonEl.addEventListener('click', this.printState.bind(this));
    return buttonEl;
  }
};
document.addEventListener("DOMContentLoaded", function () {
	const todo = Object.create(null);

	todo.newTodo = function (evt) {
		evt.preventDefault();
		const newTodo = document.getElementById("todo-item").value;
		const ul = document.getElementById("todo-view");
		const li = document.createElement("li");
		li.innerHTML = newTodo + '<span>x</span>';

		//using tertnary operator to add items to top of list if other items already exist
		(ul.childElementCount == 0) ? ul.appendChild(li) : ul.insertBefore(li, ul.firstChild);

		document.getElementById('todo-item').	value = "";

		const span = li.getElementsByTagName("span");

		span[0].addEventListener("click", todo.deleteTodo, false);
	}

	let todoCache = [];

	todo.deleteTodo = function () {
		todoCache.push(this.parentNode); 

		this.parentNode.parentNode.removeChild(this.parentNode); 

		return todoCache;
	}

	todo.undoDelete = function () {
		const ul = document.getElementById("todo-view");

		if (todoCache.length > 0 ) {
			var lastTodo = todoCache.length - 1;

			ul.appendChild(todoCache[lastTodo]);

			todoCache.pop();
		}
	}

	const todoSub = document.getElementById("submit-item");

	todoSub.addEventListener("click", todo.newTodo, false);

	const undo = document.getElementById('undo'); 

	undo.addEventListener("click", todo.undoDelete, false);
});
