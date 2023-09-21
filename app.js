const TodoList = [{name:" ",

                  duedate:" "}];
console.log(TodoList);
render();
function render(){
let ToDoListHTML = '';
for(let i =1;i<TodoList.length;i++){
  const objecttodo = TodoList[i];
  const {name,duedate} = objecttodo;//destructuring
  const html = `<div>${name}</div>
                <div>${duedate}</div>
                <button onclick="TodoList.splice(${i},1);
                render();"class="jsbtn">
                Delete
                </button>
                `;
  ToDoListHTML += html;

}
document.querySelector('.js-to-do-list').innerHTML = ToDoListHTML;
}

function addToDo(){
  const input = document.querySelector('.todo-placeholder');
  const date_ = document.querySelector('.date')
  const task = input.value;
  const duedate_ = date_.value;
  TodoList.push({name:task,duedate:duedate_});
  input.value = '';
  render();

}
