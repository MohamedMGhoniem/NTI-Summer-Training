const userName = prompt('Enter your userName:');
const age = Number(prompt('Enter your age:'));
const experience = Number(prompt('Enter your years of experience:'));
const selfRating = Number(prompt('Rate yourself from 1 to 10:'));
const baseSalary = 40000;

let jobCategory = '';
if (experience < 2) {
  jobCategory = 'Junior';
} else if (experience <= 5) {
  jobCategory = 'Mid-Level';
} else if (experience <= 10) {
  jobCategory = 'Senior';
} else {
  jobCategory = 'Expert';
}

let performance = '';
switch (true) {
  case selfRating >= 9:
    performance = 'Excellent';
    break;
  case selfRating >= 7:
    performance = 'Good';
    break;
  case selfRating >= 5:
    performance = 'Average';
    break;
  default:
    performance = 'Needs Improvement';
}

let bonusPercentage = 0;
if (experience <= 2) bonusPercentage = 0.1;
else if (experience <= 5) bonusPercentage = 0.15;
else bonusPercentage = 0.2;

const bonus = bonusPercentage * baseSalary;

const finalSalary = baseSalary + bonus;

const hour = new Date().getHours();

let shift = '';

if (hour >= 9) {
  if (hour < 18) {
    shift = 'day shift';
  } else {
    shift = 'night shift';
  }
} else {
  shift = 'night shift';
}

document.getElementById('name').innerText = userName;
document.getElementById('age').innerText = age + ' years';
document.getElementById('experience').innerText = experience + ' years';
document.getElementById('jobCategory').innerText = jobCategory;
document.getElementById('rating').innerText = selfRating + '/10';
document.getElementById('performance').innerText = performance;
document.getElementById('baseSalary').innerText = baseSalary.toLocaleString();
document.getElementById('bonus').innerText = bonus.toLocaleString();
document.getElementById('bonusPercent').innerText =
  (bonusPercentage * 100).toFixed(0) + '%';
document.getElementById('finalSalary').innerText = finalSalary.toLocaleString();
document.getElementById('shift').innerText = shift;

const summary = `
      Name: ${userName}
      Age: ${age}
      Experience: ${experience} years (${jobCategory})
      Self-Rating: ${selfRating} (${performance})
      Base Salary: $${baseSalary}
      Bonus: $${bonus} (${(bonusPercentage * 100).toFixed(0)}%)
      Final Salary: $${finalSalary}
      Shift: ${shift}
    `;
console.log(summary);

alert(summary);
