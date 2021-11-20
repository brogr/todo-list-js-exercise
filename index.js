// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  // taskTitles.push(title);
  // taskComplete.push(false);

  // use an object to keep track of the state:
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // mark task as completed
    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
}





// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task2.logState();

// console.log(tasks);
