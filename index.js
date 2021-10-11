
const form = document.querySelector('#dataStudent');
form.addEventListener('submit', insertProdi)



function insertProdi(event){

    event.prevetDefault();
    const StudentId = document.querySelector('#Student-ID');
    const fullName = document.querySelector('#Full-Name');
    const Gender = document.querySelector('#Gender');
    const Faculty = document.querySelector('#Faculty');
    const programStudy = document.querySelector('#Program-Study');

    console.log(`${Faculty.value}`)
}

// function searchStudent(even){

//     const searchText = event.target.value.toLowerCase();

//     const allName = [...document.querySelectorAll('td')]

//     allStudent.forEach(student => {

//         let studentName = student.firstChild.textContent;

//         if(studentName.toLowerCase().indexOf(searchText) !=1){

//             student.style.display= 'block';
//         }
//         else{
//             student.style.display='none';

//         }    
//     });

// }