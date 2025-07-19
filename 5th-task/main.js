'use strict';

const btnStart = document.getElementById('startBtn');
const countdownEl = document.getElementById('countdown');
const messageEl = document.getElementById('message');

const form = document.getElementById('countdownForm');
const errorDiv = document.getElementById('error');
const searchInput = document.getElementById('search');
const eventListDiv = document.getElementById('eventList');

let interval;
let events = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const eventName = document.getElementById('eventName').value.trim();
  let timeRemaining = Number(document.getElementById('timeRemaining').value);

  if (!eventName) {
    errorDiv.textContent = 'Event Name cannot be empty.';
    errorDiv.style.display = 'block';
    return;
  }
  if (timeRemaining <= 0) {
    errorDiv.textContent = 'Time Remaining must be a positive number.';
    errorDiv.style.display = 'block';
    return;
  }

  errorDiv.style.display = 'none';
  events.push({ name: eventName, time: timeRemaining });
  updateEventList();

  clearInterval(interval);
  messageEl.innerHTML = '';
  countdownEl.style.display = 'block';

  view(timeRemaining);

  interval = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(interval);
      countdownEl.style.display = 'none';
      messageEl.innerHTML = "Time's up";
    } else {
      view(timeRemaining);
    }
  }, 1000);

  form.reset();
});

function view(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  countdownEl.innerHTML = `${mins}:${secs}`;
}

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  updateEventList(searchTerm);
});

function updateEventList(searchTerm = '') {
  eventListDiv.innerHTML = '';
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm)
  );

  if (filteredEvents.length === 0) {
    eventListDiv.textContent = 'No events found.';
    return;
  }

  filteredEvents.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.className = 'event-item';
    eventItem.textContent = `Event: ${event.name}`;
    eventListDiv.appendChild(eventItem);
  });
}
