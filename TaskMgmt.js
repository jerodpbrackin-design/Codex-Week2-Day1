let taskNames = [];
let taskDurations = [];
let report = [];


taskNames.push("Review Pull Requests");
taskDurations.push("1.5 hrs");

taskNames.push("Write Documentation");
taskDurations.push("4 hrs");

taskNames.push("Fix Database Bug");
taskDurations.push(".75 hrs");

taskNames.push("Client Meeting Prep");
taskDurations.push("2 hrs");

taskNames.push("Deploy New Feature");
taskDurations.push("3.5 hours");

console.table(taskNames);
console.table(taskDurations);

for (let i = 0; i < taskNames.length; i = i + 1) {
  const message = `Task: ${taskNames[i]} (${taskDurations[i]} hrs)`;
  report.push(message);
}

console.table(report);