function getDOB () {
let dob = new Date (document.getElementById('inputDob').value);
let currentDate = new Date (document.getElementById('cdate').value);

let age = currentDate.getFullYear() - dob.getFullYear();
let months = currentDate.getMonth() - dob.getMonth();

if (months < 0 || (months === 0 && currentDate.getDate() < dob.getDate())) {age--;}
} 
getDOB ();
