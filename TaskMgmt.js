const prompt = require('prompt-sync')();

let taskNames = [];
let taskDurations = [];
let report = [];

const numberOfTasks = parseInt(prompt("How many tasks do you want to enter? "), 10);

for (let i = 0; i < numberOfTasks; i++) {
  const name = prompt(`Enter the name for task #${i + 1}: `);
  const duration = prompt(`Enter the duration (in hours) for "${name}": `);

  taskNames.push(name);
  taskDurations.push(duration);
}

console.table(taskNames);
console.table(taskDurations);

for (let i = 0; i < taskNames.length; i++) {
  const message = `Task: ${taskNames[i]} (${taskDurations[i]} hrs)`;
  report.push(message);
}

console.table(report);