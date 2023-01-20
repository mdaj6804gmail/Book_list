//Define Ui Element
let form = document.querySelector("#task_form");
let task_list = document.querySelector("#task_list");
let clear_btn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");

//Define event listeners
form.addEventListener("submit", addTask);
task_list.addEventListener("click", removeTask);
clear_btn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);
document.addEventListener('DOMContentLoaded', gettask)
//Define function
//add task

function addTask(e) {
    if (new_task.value === '') {
        alert('Add a Task');
    } else {

        //create a li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + "  "));
        let link = document.createElement('a');
        link.setAttribute('href', '#')
        link.innerHTML = '  X '
        li.appendChild(link);
        task_list.appendChild(li);
        storeTaskInlocalStorage(taskInput.value);
        new_task.value = '';
    }
    e.preventDefault();
}


// remove task
function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure you want to remove")) {
            let ele = e.target.parentElement;
            ele.remove();
            // console.log(ele)
            removeFormLS(ele);

        }
    }
}


// clearTask

function clearTask(e) {
    // task_list.innerHTML = '';

    // faster 
    while (task_list.firstChild) {
        task_list.removeChild(task_list.firstChild);
    }
    localStorage.clear();

}



//filterTask

function filterTask(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll("li").forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = 'none';
        }
    })
 
   console.log(text)
}



function storeTaskInlocalStorage(task) {
    let tsks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



function gettask() {
    let tsks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + "  "));
        let link = document.createElement('a');
        link.setAttribute('href', '#')
        link.innerHTML = '  X '
        li.appendChild(link);
        task_list.appendChild(li);
    })

}



function removeFormLS(taskItem) {
    let tsks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    let str = taskItem;
    li.removeChild(li.lastChild);

    tasks.forEach((task, index) => {
        if (li.textContent.trim() == task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks,json', JSON.stringify(tasks));

}

