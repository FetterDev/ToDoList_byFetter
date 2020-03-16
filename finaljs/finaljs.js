




(function() {
    document.getElementById('newToDo').addEventListener('keydown', function(e) {
   if (e.keyCode === 13) {
   
let valueNewTask = function(){
    return (document.getElementById('newToDo')) ;
   }
   let a = valueNewTask();
   let inputValue = a.value ;
   
    let createNewTaskElement = function(inpVl){
        let listElmement = document.createElement('li');
        let checkBox = document.createElement("input");
        let spanElement = document.createElement("span");
        let imgButElm = document.createElement("img");
        imgButElm.src = 'img/delete.gif'
        listElmement.classList.add("task");
        imgButElm.classList.add("delete");
        spanElement.innerText =  inpVl;
        checkBox.type="checkbox";
        listElmement.appendChild(checkBox);
        listElmement.appendChild(spanElement);
        listElmement.appendChild(imgButElm);
        return (listElmement);
    }
    const item = createNewTaskElement(inputValue);
   document.getElementById("ListUL").appendChild(item);
   }
    });
  })();





var addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(inputValue);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}