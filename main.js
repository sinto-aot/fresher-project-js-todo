let arr = [];

let addBtn = document.querySelector('#add-task')
let editBtn = document.querySelector('#edit-task')
document.querySelector('#add-task').onclick = function() {
    if (document.querySelector('#task-title').value.length == 0) {
        alert("Enter The task name")
    } else {
        acceptData();
        addTask();
        add.setAttribute("data-bs-dismiss", "modal")
    }
}



function acceptData(){
    let title = document.querySelector('#task-title').value;
    let description = document.querySelector('#task-description').value;
    let date = document.querySelector('#theDate').value;
    let obj = {
        objtitle: title,
        objdescription: description,
        objdate: date,
        isCompleted: false
    }
    arr.push(obj)
    console.log(arr);
}


function addTask(){
    document.querySelector('#active').innerHTML = ""
    for (i = 0; i < arr.length; i++) {
        if (arr[i].isCompleted == false) {
            document.querySelector('#active').innerHTML += ` 
        <!-- Add Task -->
            <div  class="d-flex justify-content-between align-items-center taskcontent mt-3 ">
                <div class="form-check d-flex ms-4">
                    <div>
                        <input class="form-check-input rounded-circle " onclick='acceptcheckbox(${i});completedTask();addTask()' type="checkbox" value="" id="check${i}">
                    </div>
                    <div class="ms-3">
                        <label class="form-check-label" for="check">
                            <h1 class="addedtaskheading ">
                            ${arr[i].objtitle}
                            <h1>
                            <p class="date">${arr[i].objdate} 
                            <p>
                        </label>
                    </div>
                </div>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal2${i}" ><i class="bi bi-pencil-fill"></i></button>
                <button class="delete me-4"><i class="bi bi-trash" data-bs-toggle="modal" data-bs-target="#exampleModaldel${i}" ></i></button>
            </div>

        
        <!-- Edit Task -->
       
        <div>
            <div class="modal fade" id="exampleModal2${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- pop up add task form -->
                            <form>
                            <div class="mb-3">
                                <label for="task-title2" class="form-label">Title*</label> 
                                <input type="text" class="form-control" id="task-title${i}" value="${arr[i].objtitle}">
                                <div class="invalid-feedback">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="task-description" class="form-label">Description</label>
                                <textarea class="form-control" id="task-description${i}" rows="3">${arr[i].objdescription} </textarea>
                            </div>
                            <label for="task-description" class="form-label">Due date</label>
                            <input type="date"  class="form-control mt-2 mb-3" id="theDate${i}" value="${arr[i].objdate}"></input>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit"  class="btn btn-primary" data-bs-dismiss="modal" onclick='editTask(${i})' id="edit-task">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Delete Task -->

        <div class="modal fade" id="exampleModaldel${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-header border-0 pt-4 d-flex justify-content-center">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Task?</h1>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                        <p>Are you sure you want to delete this task?</p>
                    </div>
                    <div class="modal-footer border-0 pb-5 d-flex justify-content-center gap-3">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick='deleteItem(${i})'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        }
    }

    clear();

}

// Clear The Fields
function clear() {
    document.querySelector('#task-title').value = "";
    document.querySelector('#task-description').value = "";
    document.querySelector('#theDate').value = "";
}

// Delete Tasks
function deleteItem(i) {
    arr.splice(i, 1)
    addTask()
    completedTask()
    console.log(arr)
    console.log("delete operation done")

}

// Edit Tasks
// let editTask = (i) => {
//     arr[i].objtitle = document.getElementById(`#task-title${i}`).value;
//     arr[i].objdescription = document.getElementById(`#task-description${i}`).value;
//     arr[i].objdate = document.getElementById(`#theDate${i}`).value;
//     console.log('edit done')
//     console.log(arr)
//     addTask()
//     completedTask()
// }

function editTask(i){
    // arr[i].objtitle = document.getElementById(`task-title${i}`).value
    arr[i].objtitle = document.getElementById(`task-title${i}`).value
    arr[i].objdescription = document.getElementById(`task-description${i}`).value
    arr[i].objdate = document.getElementById(`theDate${i}`).value
    addTask()
    completedTask()
    console.log("Task Updated")
    console.log(arr)
}


//Sort By Title
function sortByTitle() {
    arr.sort(function(a,b) {
        if (a.objtitle.toLowerCase() < b.objtitle.toLowerCase()) return -1;
        if (a.objtitle.toLowerCase() > b.objtitle.toLowerCase()) return 1;
        return 0;
    });
    document.querySelector('#active').innerHTML = ""
    addTask();
    completedTask();

}

// Sort By Date
function sortByDate() {
    arr.sort(function(a,b) {
        let datea = new Date(a.objdate);
        let dateb = new Date(b.objdate);
        if (datea < dateb) return -1;
        if (datea > dateb) return 1;
        return 0;
    });
    document.querySelector('#active').innerHTML = ""
    addTask();
    completedTask();

}

// Clicked Checkbox
function acceptcheckbox(i) {
    cb = document.querySelector(`#check${i}`);
    arr[i].isCompleted = cb.checked
    console.log(arr);
    console.log("checkbox checked")

}




// Completed tasks
function completedTask(){
    document.querySelector('body > div > div.completed').innerHTML = ""
    for (i = 0; i < arr.length; i++) {
        if (arr[i].isCompleted == true) {
            document.querySelector('body > div > div.completed').innerHTML += ` 
            <!-- Add Tasks -->
            <div  class="d-flex justify-content-between align-items-center taskcontent mt-3 ">
                <div class="form-check d-flex ms-4">
                    <div>
                        <input class="form-check-input rounded-circle " onclick='acceptcheckbox(${i});completedTask();addTask()' type="checkbox" value="" id="check${i}" checked>
                    </div>
                    <div class="ms-3">
                        <label class="form-check-label" for="check">
                            <h1 class="addedtaskheading ">
                            ${arr[i].objtitle}
                            <h1>
                            <p class="date">${arr[i].objdate} 
                            <p>
                        </label>
                    </div>
                </div>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal2${i}" ><i class="bi bi-pencil-fill"></i></button>
                <button class="delete me-4"><i class="bi bi-trash" data-bs-toggle="modal" data-bs-target="#exampleModaldel${i}" ></i></button>
            </div>  
        
        
        <!-- Edit Task -->
       
        <div>
            <div class="modal fade" id="exampleModal2${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="task-title2" class="form-label">Title*</label> 
                                    <input type="text" class="form-control" id="task-title${i} " value="${arr[i].objtitle}">
                                    <div class="invalid-feedback">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="task-description" class="form-label">Description</label>
                                    <textarea class="form-control" id="task-description${i}" rows="3" placeholder="Add your task description.">${arr[i].objdescription} </textarea>
                                </div>
                                <label for="task-description" class="form-label">Due date</label>
                                <input type="date"  class="form-control mt-2 mb-3" id="theDate${i}" value="${arr[i].objdate}"></input>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit"  class="btn btn-primary" data-bs-dismiss="modal" onclick='editTask(${i})'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Delete Task -->

        <div class="modal fade" id="exampleModaldel${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-header border-0 pt-4 d-flex justify-content-center">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Task?</h1>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                        <p>Are you sure you want to delete this task?</p>
                    </div>
                    <div class="modal-footer border-0 pb-5 d-flex justify-content-center gap-3">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick='deleteItem(${i})'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        }

    }
}




function displaynone() {
    document.querySelector('.completed').style.display = "none";
    document.querySelector('.completed-tasks').style.display = "none";
    document.querySelector('#active').style.display = "block";
    document.querySelector('.active-tasks').style.display = "block";
}

function completeddisnone() {
    document.querySelector('#active').style.display = "none";
    document.querySelector('.active-tasks').style.display = "none";
    document.querySelector('.completed').style.display = "block";
    document.querySelector('.completed-tasks').style.display = "block";
}

function displayblock() {
    document.querySelector('.completed').style.display = "block";
    document.querySelector('.completed-tasks').style.display = "block";
    document.querySelector('#active').style.display = "block";
    document.querySelector('.active-tasks').style.display = "block";
}

function clearCompleted() {
    deleteItem();
}


// var mydate = new Date(arr[i].objdate);
// var month = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
// var bydate = month + ' ' + mydate.getFullYear();