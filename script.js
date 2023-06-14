document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      var listItem = document.createElement("li");
      var deleteBtn = document.createElement("button");
      
      listItem.textContent = taskText;
      deleteBtn.innerHTML = "&#x2716;";
      deleteBtn.classList.add("delete-btn");
      
      deleteBtn.addEventListener("click", function() {
        listItem.remove();
      });
      
      listItem.appendChild(deleteBtn);
      document.getElementById("task-list").appendChild(listItem);
      
      taskInput.value = "";
    }
  });
  