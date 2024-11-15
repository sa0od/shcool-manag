









// subject = document.getElementById  ('subject');
// addbtn = document.getElementById('btnAdd');
// stdName = document.getElementById('stdName');
// email = document.getElementById('email');
// mobile = document.getElementById('phone');
// gender = document.getElementById('gender');
// dob = document.getElementById('dob');
// ddlSubjectName = document.getElementById('ddlSubjectName');
// stdModal = document.getElementById('AddStd');
// let table = document.getElementById('table');

// test = document.getElementById('test');

// students = [
//     // {
//     //     Fname: 'John',
//     //     Lname: 'Doe',
//     //     email: 'test@gamil.com',
//     //     mobile: '0562699411',
//     //     gender: 'male',
//     //     dob: '10-02-2024',
//     //     subject: 'Math'
//     // },
// ] 

// subjects = [
//     {
//         subjectName: 'C',
//         subjectDecount: 10,
//         subjectPrice: 2000
//     },
//     {
//         subjectName: 'HT',
//         subjectDecount: 10,
//         subjectPrice: 2300
//     },
//     {
//         subjectName: 'saaa',
//         subjectDecount: 15,
//         subjectPrice: 2300
//     },
// ];


// test.addEventListener('click',()=>{
//    for(let student of students){
//         console.log(student);
//         console.log(checkSubjectPrice(student));
      
    
//    }

// })
// function subjectDate(){
//     ddlSubjectName.innerHTML='';
//     for(let sub of subjects){
//         let selectSubject = 
//         ` 
            
//             <option  selected  value="${sub.subjectName}">${sub.subjectName}</option>
//         `;
//         ddlSubjectName.innerHTML += selectSubject;   
//     }
// }
// function fillTable(){
//     let ID = 1000
//     index=1;
//     table.innerHTML = "";
//     for(let student of students){
      
//         let content = 
//             `  
//                   <tr>
//                     <th scope="row">${index}</th>
//                     <td>${ID}</td>
//                     <td>${student.Fname} ${student.Lname}</td>
//                     <td>${student.email}</td>
//                     <td>${student.mobile}</td>
//                     <td>${student.gender}</td>
//                     <td>${student.dob}</td>
//                     <td>${student.subject}</td>
//                     <td>${student.subject}</td>
//                     <td>
//                         <span class="material-symbols-outlined">
//                             visibility
//                         </span>
//                         <span class="material-symbols-outlined">
//                             edit_note
//                         </span>
//                         <span class="material-symbols-outlined">
//                             delete
//                         </span>
//                     </td>
//                   </tr>
                 
            
         
//             `;
//             table.innerHTML += content;
//             index++ , ID++;
//     }
    
// };
// function fillOnPage(){
//     if(students.length){
//         fillTable();
//     }
//     else{
//         table.innerHTML = "<h2 class= r > There is No Task To Display!....</h2>"
//     }


// }
// function checkSubjectPrice(studentSubjectName){
//     for(let s of subjects){
//         if(s.subjectName == studentSubjectName){
//             return s.subjectPrice - (s.subjectPrice * s.subjectDecount / 100);
            
            
//     }

// }
// }
// addbtn.addEventListener('click',(subprice)=>{
//     console.log(ddlSubjectName.value);
//     let newTask = {
//         'Fname': firstName.value,
//         'Lname': lastName.value,
//         'email': email.value,
//         'mobile': phone.value,
//         'gender': gender.value,
//         'dob': dob.value,
//         'subject': ddlSubjectName.options[ddlSubjectName.selecedIndex],
//         'price': checkSubjectPrice(ddlSubjectName.value)
//     }
//     students.push(newTask);
//     //    alert('add sucs');
//     fillOnPage();
 
// });


// fillOnPage();

// fillTable();


// function fillTaskOnPage(){
//     allTask.innerHTML = ` All Task: ${tasks.length}`;
//     tasksContent.innerHTML = "";
//     for(let task of tasks){
//         let content = 
//         `   <div class="task">
//                 <div class="info">
//                         <p> ${task.title} </p>
//                         <h3> ${task.date} </h3>
//                 </div>

                    
//                     <div class="tools">
                    
//                         <span class="material-symbols-outlined done" >
//                             done
//                         </span>
//                         <span class="material-symbols-outlined edit ">
//                             edit_note
//                         </span>
//                         <span class="material-symbols-outlined delete">
//                             close
//                         </span>
//                     </div>
                

//                 </div>
//         `;

//         tasksContent.innerHTML += content;
//     }
// }
// fillTaskOnPage();
// addIcon.addEventListener('click',function(){
//    let newTask = {
//     "title": inputText.value,
//     "date": '13/10/2020',
//     "isComplete": false
//    }
//    tasks.push(newTask);
//    inputText.value = "";
//    fillTaskOnPage();
 
// });



//....................................................................................................................




// subject = document.getElementById  ('subject');
// addbtn = document.getElementById('btnAdd');
// stdName = document.getElementById('stdName');
// email = document.getElementById('email');
// mobile = document.getElementById('phone');
// gender = document.getElementById('gender');
// dob = document.getElementById('dob');
// subject = document.getElementById('subject');
// stdModal = document.getElementById('AddStd');
// let table = document.getElementById('table');

// test = document.getElementById('test');

// students = [
//     // {
//     //     Fname: 'John',
//     //     Lname: 'Doe',
//     //     email: 'test@gamil.com',
//     //     mobile: '0562699411',
//     //     gender: 'male',
//     //     dob: '10-02-2024',
//     //     subject: 'Math'
//     // },
// ] 

// subjects = ['HTML','C++'];


// test.addEventListener('click',()=>{
//    for(let student of students){
//         console.log(student);
    
//    }

// })
// let index=1;
// function fillTable(){
    
 
      
//         let content = 
//             `  
//                   <tr>
//                     <th scope="row">${index}</th>
//                     <td>${firstName.value}</td>
//                     <td>${lastName.value}</td>
//                     <td>${email.value}</td>
//                     <td>${phone.value}</td>
//                     <td>${gender.value}</td>
//                     <td>${dob.value}</td>
//                     <td>${subject.value}</td>
//                     <td>
//                         <span class="material-symbols-outlined">
//                             visibility
//                         </span>
//                         <span class="material-symbols-outlined">
//                             edit_note
//                         </span>
//                         <span class="material-symbols-outlined">
//                             delete
//                         </span>
//                     </td>
//                   </tr>
                 
            
         
//             `;
//             table.innerHTML += content;
//             index++;
    
    
// };
// function fillOnPage(){
//     if(students.length){
//         fillTable();
//     }
//     else{
//         table.innerHTML = "<h2 class= r > There is No Task To Display!....</h2>"
//     }


// }

// addbtn.addEventListener('click',()=>{
//     let newTask = {

//         'Fname': firstName.value,
//         'Lname': lastName.value,
//         'email': email.value,
//         'mobile': phone.value,
//         'gender': gender.value,
//         'dob': dob.value,
//         'subject': subject.value
        
//        }
//        students.push(newTask);
//     //    alert('add sucs');
//     fillOnPage();
      
// });