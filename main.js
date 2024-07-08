function calculateAge () {
let dob = new Date (document.getElementById('inputDob').value);
let currentDate = new Date (document.getElementById('cdate').value);

let age = currentDate.getFullYear() - dob.getFullYear();
let months = currentDate.getMonth() - dob.getMonth();
} 