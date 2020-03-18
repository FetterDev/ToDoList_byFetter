(function() {
    document.getElementById('newToDo').addEventListener('keydown', function(e) {
   if (e.keyCode === 13) {
   
let valueNewTask = function(){
    return (document.getElementById('newToDo')) ;
   }
   let a = valueNewTask();
   let inputValue = a.value ;
   if (!inputValue=="")  {

       let createNewTaskElement = function(inpVl){
           let listElmement = document.createElement('li');
           let checkBox = document.createElement("input");
           let inputElement = document.createElement("input");
           let imgButElm = document.createElement("img");
           imgButElm.src = 'img/delete.gif'
           listElmement.classList.add("task");
           inputElement.classList.add("spanCheker");
           inputElement.addEventListener("dblclick",editBlock); 
           imgButElm.classList.add("delete");
           inputElement.value =  inpVl;
           checkBox.type="checkbox";
           checkBox.addEventListener("click",chBox);
           checkBox.classList.add("chBoxCheck");
           listElmement.appendChild(checkBox);
           listElmement.appendChild(inputElement);
           listElmement.appendChild(imgButElm);
           return (listElmement);
       }
      const item = createNewTaskElement(inputValue);
      document.getElementById("ListUL").appendChild(item);
      document.getElementById('newToDo').value = "";

      let close = document.querySelectorAll(".delete");
      function removeBlock() {
          this.parentNode.remove();
      
      }
      close.forEach((item) => {
          item.addEventListener("click",removeBlock);
      });

      function editBlock(event) {
        event.currentTarget.disabled = false;
      }
      function chBox(event){
  
        if (event.currentTarget.checked){
            document.getElementById("doneTsk").appendChild(item);
        }
        else{
            document.getElementById("ListUL").appendChild(item);
        }
       
    }
    

      
   }
   }
    });
  })();

 

   