var addbtn=document.getElementById("button")
var taskInput=document.getElementById("input")
var tasklist=document.getElementById("ulli")

addbtn.addEventListener("click",function(){

    var task = taskInput.value
    addtask(task)
    taskInput.value=""
})
function addtask(task){
    var li=document.createElement("li")
    li.innerHTML=task
    tasklist.appendChild(li)
}

