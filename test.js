// function search(){
//     let searchInput = document.getElementById("exampleFormControlInput1").value
//     console.log(searchInput)
//      result = taskArray.filter(function(x,index) {
//      ind = (x.title.toLowerCase().includes(searchInput))
//      if(ind){
//          filteredArray.push(index)
//      }
//     })
//     document.querySelector('#duplicater').innerHTML = ""
//     document.querySelector('#completed').innerHTML = ""
//     for(i=0;i<filteredArray.length;i++){
//      activeSearch()
//      completedSearch()
      
//     }
//     filteredArray = []
 
//  }
//  //searched active
//  function activeSearch(){
     
//      if(taskArray[filteredArray[i]].status == "active"){
//          document.querySelector('#duplicater').innerHTML += `
                
//          <div class="taskbox mt-2 d-flex justify-content-between" >
//          <div class="checkbox-title d-flex align-items-center gap-4">
//              <input class="form-check-input rounded-circle check ms-3 mt-0 mt-0" type="checkbox" id="${filteredArray[i]}"  onclick=checking(this.id)>
//              <div class = "mt-3 ">
//                  <div class="d-flex align-items-center gap-2 ">
//                  <p class="addedtaskheading bold-head"> ${taskArray[filteredArray[i]].title}<p>
//                  <div class="status"></div>
//                  </div>
//                  <p class="date"> By ${taskArray[filteredArray[i]].date} <p>
//              </div>
             
//         </div>
     
     
//          <div class= "gap-3 d-flex">
//              <button class="edit border border-0 bg-white" data-bs-toggle="modal" data-bs-target="#updateModal" onclick=editTask(${filteredArray[i]}) ><i class="bi bi-pencil-fill"></i></button>
//              <button class="delete me-4 border border-0 bg-white class="bi bi-trash" data-bs-toggle="modal"  data-bs-target="#deletemodal" onclick=deleteIndex(${filteredArray[i]})  ><i class="bi bi-trash"></i></button>
//          </div>
     
//         </div>
//          `
//          }
 
 
//  }
 
//  //searched completed
//  function completedSearch(){
 
//      if(taskArray[filteredArray[i]].status == "completed"){
//          document.querySelector('#completed').innerHTML += `
                
//          <div class="taskbox mt-2 d-flex justify-content-between" >
//          <div class="checkbox-title d-flex align-items-center gap-4">
//              <input class="form-check-input rounded-circle check ms-3 mt-0 mt-0" type="checkbox" checked id="${filteredArray[i]}"   onclick=checking(this.id)>
//              <div class = "mt-3 ">
//                  <div class="d-flex align-items-center gap-2 ">
//                  <p class="addedtaskheading bold-head"> ${taskArray[filteredArray[i]].title} <p>
//                  <div class="status bg-success"></div>
//                  </div>
//                  <p class="date"> By ${taskArray[filteredArray[i]].date} <p>
//              </div>
             
//         </div>
     
     
//          <div class= "gap-3 d-flex">
//              <button class="edit border border-0 bg-white" data-bs-toggle="modal" data-bs-target="#updateModal" onclick=editTask(${filteredArray[i]}) ><i class="bi bi-pencil-fill"></i></button>
//              <button class="delete me-4 border border-0 bg-white class="bi bi-trash" data-bs-toggle="modal"  data-bs-target="#deletemodal" onclick=deleteIndex(${filteredArray[i]})  ><i class="bi bi-trash"></i></button>
//          </div>
     
//         </div>
//          `
//          }
 
 
//  }





function deleteModal() {
    document.querySelector("#active").innerHTML += `
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
    
    `
}