
        
       
    
    
    var list = document.getElementById('list');

    function addTodo(){
    var todo_item = document.getElementById('todo-item')
    var database = firebase.database().ref('todos')
    var key = database.push().key
    var todo ={
        value: todo_item.value,
        key: key
    }
    console.log(key);

    //Create List
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    

    




    //Delete Button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    delBtn.setAttribute("class","dbtn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    li.appendChild(delBtn)
    
    // Edit Button..
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","EditItem(this)")
    li.appendChild(editBtn);
    
    list.appendChild(li)
    todo_item.value = " "
    console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}
function EditItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit value", val)
    e.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll(){
    list.innerHTML = " "
}