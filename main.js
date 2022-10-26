let arr = [];
let searchData = [];
getLocalStorage();
let addBtn = document.querySelector("#add-task");
let editBtn = document.querySelector("#edit-task");

let allCount = document.getElementById("all-count");
let activeCount = document.getElementById("active-count");
let completedCount = document.getElementById("completed-count");

document.querySelector("#add-task").onclick = function () {
  if (document.querySelector("#task-title").value.length == 0) {
    alert("Please enter the task title");
  } else {
    inputData();
    activeTask();
  }
};


// Task Input
function inputData() {
  let title = document.querySelector("#task-title").value;
  let description = document.querySelector("#task-description").value;
  let date = document.querySelector("#theDate").value;
  let obj = {
    objtitle: title,
    objdescription: description,
    objdate: date,
    isCompleted: false,
  };
  arr.push(obj);
  setLocalStorage();
  taskCount();
}


// Active Tasks
function activeTask() {
  document.querySelector("#active").innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].isCompleted == false) {
      document.querySelector("#active").innerHTML += `
        <!-- Add Task -->

            <div  class="d-flex justify-content-between align-items-center taskcontent mt-3 task-item" >
                <div class="form-check d-flex ms-4">
                    <div>
                        <input class="form-check-input rounded-circle " onclick='checkedTask(${i});' type="checkbox" value="" id="check${i}">
                    </div>
                    <div class="ms-3">
                        <label class="form-check-label" for="check">
                            <h1 class="task-title "> ${arr[i].objtitle} <img src="img/yellow-dot.png" ></h1>                         
                            <p class="date"><img src="img/calender-icon.png"> by ${arr[i].objdate} </p>                           
                        </label>
                    </div>
                </div>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal2${i}" ><img src="img/edit-icon.png"></button>
                <button class="delete me-4"><img src="img/delete-icon.png" data-bs-toggle="modal" data-bs-target="#exampleModaldel${i}"></i></button>
            </div>
        <!-- Edit Task -->
       
        <div>
            <div class="modal fade" id="exampleModal2${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel" >Edit Task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="mb-3">
                                <label for="task-title2" class="form-label modal-input-title">Title</label> 
                                <input type="text" class="form-control" id="task-title${i}" value="${arr[i].objtitle}">
                                <div class="invalid-feedback">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="task-description" class="form-label modal-input-title">Description</label>
                                <textarea class="form-control" id="task-description${i}" rows="3">${arr[i].objdescription} </textarea>
                            </div>
                            <label for="task-description" class="form-label modal-input-title ">Due date</label>
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
                    <button type="button" class="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
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
  document.querySelector("#task-title").value = "";
  document.querySelector("#task-description").value = "";
  document.querySelector("#theDate").value = "";
}

// Delete Tasks
function deleteItem(i) {
  arr.splice(i, 1);
  activeTask();
  completedTask();
  setLocalStorage();
  taskCount();
  console.log(arr);
  console.log("delete operation done");
}

// Edit Task
function editTask(i) {
  arr[i].objtitle = document.getElementById(`task-title${i}`).value;
  arr[i].objdescription = document.getElementById(`task-description${i}`).value;
  arr[i].objdate = document.getElementById(`theDate${i}`).value;
  activeTask();
  completedTask();
  console.log("Task Updated");
  console.log(arr);
  setLocalStorage();
}

//Sort By Title

function sortByTitle() {
  arr.sort(function (a, b) {
    if (a.objtitle.toLowerCase() < b.objtitle.toLowerCase()) return -1;
    if (a.objtitle.toLowerCase() > b.objtitle.toLowerCase()) return 1;
    return 0;
  });
  document.querySelector("#active").innerHTML = "";
  activeTask();
  completedTask();
  setLocalStorage();
}

// Sort By Date
function sortByDate() {
  arr.sort(function (a, b) {
    let dateA = new Date(a.objdate);
    let dateB = new Date(b.objdate);
    if (dateA < dateB) return -1;
    if (dateB > dateB) return 1;
    return 0;
  });
  document.querySelector("#active").innerHTML = "";
  activeTask();
  completedTask();
  setLocalStorage();
}

// Clicked Checkbox
function checkedTask(i) {
  cb = document.querySelector(`#check${i}`);
  arr[i].isCompleted = cb.checked;
  console.log(arr);
  console.log("checkbox checked");
    setLocalStorage();
    activeTask()
    completedTask()
    taskCount()
}

// Completed tasks
function completedTask() {
  document.querySelector(".completed").innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].isCompleted == true) {
      document.querySelector("body > div > div.completed").innerHTML += ` 
            <!-- Add Tasks -->
            <div  class="d-flex justify-content-between align-items-center taskcontent mt-3 ">
                <div class="form-check d-flex ms-4">
                    <div>
                        <input class="form-check-input rounded-circle " onclick='checkedTask(${i});' type="checkbox" value="" id="check${i}" checked>
                    </div>
                    <div class="ms-3">
                        <label class="form-check-label" for="check">
                            <h1 class="task-title "> ${arr[i].objtitle} <img src="img/green-dot.png" ><h1>                         
                            <p class="date"><img src="img/calender-icon.png"> by ${arr[i].objdate}<p>                          
                        </label>
                    </div>
                </div>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal2${i}" ><img src="img/edit-icon.png"></i></button>
                <button class="delete me-4"><img src="img/delete-icon.png" data-bs-toggle="modal" data-bs-target="#exampleModaldel${i}"></i></button>
            </div>         
        
        <!-- Edit Task -->
       
        <div>
            <div class="modal fade" id="exampleModal2${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel" >Edit Task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="mb-3">
                                <label for="task-title2" class="form-label modal-input-title">Title</label> 
                                <input type="text" class="form-control" id="task-title${i}" value="${arr[i].objtitle}">
                                <div class="invalid-feedback">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="task-description" class="form-label modal-input-title">Description</label>
                                <textarea class="form-control" id="task-description${i}" rows="3">${arr[i].objdescription} </textarea>
                            </div>
                            <label for="task-description" class="form-label modal-input-title ">Due date</label>
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
                    <button type="button" class="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
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

// Local Storage
// Set Local Storage
function setLocalStorage() {
  localStorage.setItem("taskData", JSON.stringify(arr));
}

// Get Local Storage
function getLocalStorage() {
  arr = JSON.parse(localStorage.getItem("taskData")) || [];
}
activeTask();
completedTask();

// Diaplay All
function displayAll() {
  document.querySelector(".completed").style.display = "block";
  document.querySelector(".completed-tasks").style.display = "block";
  document.querySelector("#active").style.display = "block";
  document.querySelector(".active-tasks").style.display = "block";
}

// Diaplay Active
function displayActive() {
  document.querySelector("#active").style.display = "block";
  document.querySelector(".active-tasks").style.display = "block";
  document.querySelector(".completed").style.display = "none";
  document.querySelector(".completed-tasks").style.display = "none";
}

// Display Completed
function displayCompleted() {
  document.querySelector("#active").style.display = "none";
  document.querySelector(".active-tasks").style.display = "none";
  document.querySelector(".completed").style.display = "block";
  document.querySelector(".completed-tasks").style.display = "block";
}

// Task Count
function taskCount() {
  allCount.innerHTML = "0";
  activeCount.innerHTML = "0";
  completedCount.innerHTML = "0";
  for (i = 0; i < arr.length; i++) {
    allCount.innerHTML++;
    if (arr[i].isCompleted == false) {
      activeCount.innerHTML++;
    }
    if (arr[i].isCompleted == true) {
      completedCount.innerHTML++;
    }
  }
}
taskCount();

// Clear Completed Task
function clearCompleted() {
  for (j = 0; j < arr.length; j++) {
    if (arr[j].isCompleted == true) {
      arr.splice(j, 1);
      j--;
    }
    activeTask();
    completedTask();
    console.log(arr);
  }
  localStorage.setItem("taskData", JSON.stringify(arr));
}

// Search Task
function searchTask() {
  let searchBox = document.getElementById("search-task").value
  console.log(searchTask)
  searchResult = arr.filter(function (x, index) {
    ind = (x.objtitle.toLowerCase().includes(searchBox))
    if(ind){
        searchData.push(index)
    }
  })
  document.querySelector("#active").innerHTML = ""
  document.querySelector(".completed").innerHTML = ""
  for(i=0;i<searchData.length;i++){
    searchActive()
    searchCompleted()
     
   }
  searchData = []
}


// Search Active
function searchActive() {
  if (arr[searchData[i]].isCompleted == false) {
    document.querySelector("#active").innerHTML += `
          <div  class="d-flex justify-content-between align-items-center taskcontent mt-3 task-item" >
              <div class="form-check d-flex ms-4">
                  <div>
                      <input class="form-check-input rounded-circle " onclick='checkedTask(${i});' type="checkbox" value="" id="check${searchData[i]}">
                  </div>
                  <div class="ms-3">
                      <label class="form-check-label" for="check">
                          <h1 class="task-title "> ${arr[searchData[i]].objtitle} <img src="img/yellow-dot.png" ></h1>                         
                          <p class="date"><img src="img/calender-icon.png"> by ${arr[searchData[i]].objdate} </p>                           
                      </label>
                  </div>
              </div>
              <button class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal2${searchData[i]}" ><img src="img/edit-icon.png"></button>
              <button class="delete me-4"><img src="img/delete-icon.png" data-bs-toggle="modal" data-bs-target="#exampleModaldel${searchData[i]}"></button>
          </div> `
  }
}



// Search Completed
function searchCompleted() {
  if (arr[searchData[i]].isCompleted == true) {
    document.querySelector("#active").innerHTML += `
          <div  class="d-flex justify-content-between align-items-center taskcontent mt-3 task-item" >
              <div class="form-check d-flex ms-4">
                  <div>
                      <input class="form-check-input rounded-circle " onclick='checkedTask(${i});' type="checkbox" value="" id="check${searchData[i]}">
                  </div>
                  <div class="ms-3">
                      <label class="form-check-label" for="check">
                          <h1 class="task-title "> ${arr[searchData[i]].objtitle} <img src="img/yellow-dot.png" ></h1>                         
                          <p class="date"><img src="img/calender-icon.png"> by ${arr[searchData[i]].objdate} </p>                           
                      </label>
                  </div>
              </div>
              <button class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal2${searchData[i]}" ><img src="img/edit-icon.png"></button>
              <button class="delete me-4"><img src="img/delete-icon.png" data-bs-toggle="modal" data-bs-target="#exampleModaldel${searchData[i]}"></button>
          </div> `
  }
}