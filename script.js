
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;
    if (task === "") {
      alert("