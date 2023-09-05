const inputBox= document.getElementById("input-box") ;
const listContainer = document.getElementById("list-cointainer");
const tasks= document.getElementsByClassName("tasks");

var totalTask;
var taskCompleted=0;
function addTask(){
    if(inputBox.value===''){
        alert("add something in the todoList!")
    }else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7"
        li.appendChild(span);
    }
    updatecounter()
    inputBox.value= "";
}

function updatecounter(){
    totalTask= listContainer.getElementsByTagName("li").length;
    taskCompleted= listContainer.getElementsByClassName("checked").length;

    // p.innerText = "You have completed " + taskCompleted + " out of " + totalTask;
    document.querySelector("p").innerHTML=`You have completed  ${taskCompleted} out of ${totalTask}`;


    console.log(taskCompleted+ " "+ totalTask);
}



inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
        updatecounter();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();

    }
    updatecounter();
}, false);
const numOfLis = document.querySelectorAll("li").length;

