const userName = prompt('What is your name?');
const birthYear = Number(prompt('Enter your birth year:'));
const isStudent = confirm('Are you a student?');

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

let category = '';

if (age < 13) {
  category = 'Kid';
} else {
  if (age <= 17) {
    category = 'Teen';
  } else {
    if (age <= 59) {
      category = 'Adult';
    } else {
      category = 'Senior';
    }
  }
}

let message = `Hello ${userName}, you are ${age} years old. Category: ${category}.`;

if (isStudent) message = message + ` don't forget to study hard`;

console.log(message);

alert(message);

document.getElementById('name').innerText = userName;
document.getElementById('age').innerText = age;
document.getElementById('category').innerText = category;
