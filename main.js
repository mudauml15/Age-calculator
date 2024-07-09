function getDOB () {
let dob = new Date (document.getElementById('inputDob').value);
let currentDate = new Date (document.getElementById('cdate').value);

let age = currentDate.getFullYear() - dob.getFullYear();
let months = currentDate.getMonth() - dob.getMonth();


if (dob < currentDate){
    age--;
    document.getElementById ('currentAge').innerHTML = `You are ${age} years old`;
}
else if (dob > currentDate) { 
    
    document.getElementById ('currentAge').innerHTML = `Enter valid date of birth `;
}
} 
getDOB ();


