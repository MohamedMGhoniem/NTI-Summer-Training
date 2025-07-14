const tempInput = prompt('what is the temperature?');
const temperature = Number(tempInput);

const condition =
  temperature < 0
    ? 'Freezing cold'
    : temperature <= 15
    ? 'Cold'
    : temperature <= 25
    ? 'Mild'
    : temperature <= 35
    ? 'Warm'
    : 'Hot';

let safety;
if (temperature < -5 || temperature > 40) {
  safety = 'Dangerous temperature';
} else {
  safety = 'Safe temperature';
}

const advice =
  temperature >= 16 && temperature <= 25
    ? 'Perfect for outdoor activities!'
    : temperature > 30
    ? 'Stay hydrated!'
    : '';

const output = `
                Condition: ${condition}
                Safety: ${safety}
                Advice: ${advice}`;

console.log(output);
alert(output);
document.getElementById('result').innerText = output;
