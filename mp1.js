const input = document.getElementById("taskInput");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const taskSpan = li.querySelector("span");

    completeBtn.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}