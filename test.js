function search(){
    let searchInput = document.getElementById("exampleFormControlInput1").value
    console.log(searchInput)
     result = taskArray.filter(function(x,index) {
     ind = (x.title.toLowerCase().includes(searchInput))
     if(ind){
         filteredArray.push(index)
     }
    })
    document.querySelector('#duplicater').innerHTML = ""
    document.querySelector('#completed').innerHTML = ""
    for(i=0;i<filteredArray.length;i++){
     activeSearch()
     completedSearch()
      
    }
    filteredArray = []
 
 }
 //searched active 
 function activeSearch(){
     
     if(taskArray[filteredArray[i]].status == "active"){
         document.querySelector('#duplicater').innerHTML += `
                
         <div class="taskbox mt-2 d-flex justify-content-between" >
         <div class="checkbox-title d-flex align-items-center gap-4">
             <input class="form-check-input rounded-circle check ms-3 mt-0 mt-0" type="checkbox" id="${filteredArray[i]}"  onclick=checking(this.id)>
             <div class = "mt-3 ">
                 <div class="d-flex align-items-center gap-2 ">
                 <p class="addedtaskheading bold-head"> ${taskArray[filteredArray[i]].title}<p>
                 <div class="status"></div>
                 </div>
                 <p class="date"> By ${taskArray[filteredArray[i]].date} <p>
             </div>
             
        </div>
     
     
         <div class= "gap-3 d-flex">
             <button class="edit border border-0 bg-white" data-bs-toggle="modal" data-bs-target="#updateModal" onclick=editTask(${filteredArray[i]}) ><i class="bi bi-pencil-fill"></i></button>
             <button class="delete me-4 border border-0 bg-white class="bi bi-trash" data-bs-toggle="modal"  data-bs-target="#deletemodal" onclick=deleteIndex(${filteredArray[i]})  ><i class="bi bi-trash"></i></button>
         </div>
     
        </div>
         `
         }
 
 
 }
 
 //searched completed
 function completedSearch(){
 
     if(taskArray[filteredArray[i]].status == "completed"){
         document.querySelector('#completed').innerHTML += `
                
         <div class="taskbox mt-2 d-flex justify-content-between" >
         <div class="checkbox-title d-flex align-items-center gap-4">
             <input class="form-check-input rounded-circle check ms-3 mt-0 mt-0" type="checkbox" checked id="${filteredArray[i]}"   onclick=checking(this.id)>
             <div class = "mt-3 ">
                 <div class="d-flex align-items-center gap-2 ">
                 <p class="addedtaskheading bold-head"> ${taskArray[filteredArray[i]].title} <p>
                 <div class="status bg-success"></div>
                 </div>
                 <p class="date"> By ${taskArray[filteredArray[i]].date} <p>
             </div>
             
        </div>
     
     
         <div class= "gap-3 d-flex">
             <button class="edit border border-0 bg-white" data-bs-toggle="modal" data-bs-target="#updateModal" onclick=editTask(${filteredArray[i]}) ><i class="bi bi-pencil-fill"></i></button>
             <button class="delete me-4 border border-0 bg-white class="bi bi-trash" data-bs-toggle="modal"  data-bs-target="#deletemodal" onclick=deleteIndex(${filteredArray[i]})  ><i class="bi bi-trash"></i></button>
         </div>
     
        </div>
         `
         }
 
 
 }