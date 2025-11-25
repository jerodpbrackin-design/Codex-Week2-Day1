const prompt = require('prompt-sync')();

let tasks = [];

const numberOfTasks = parseInt(prompt("How many tasks do you want to enter? "), 10);

for (let i = 0; i < numberOfTasks; i++) {
  const name = prompt(`Enter the name for task #${i + 1}: `);
  const durationStr = prompt(`Enter the duration (in hours) for "${name}": `);

  // Grab numeric hours from strings like "3.5 hrs", "2 hours", etc.
  const hours = parseFloat(durationStr);

  tasks.push({
    name,
    durationStr,
    hours
  });
}

// Sort descending by numeric hours
tasks.sort((a, b) => b.hours - a.hours);

console.table(tasks.map(t => t.name));
console.table(tasks.map(t => t.durationStr));

let report = tasks.map(t => `Task: ${t.name} (${t.durationStr} hrs)`);

console.table(report);
