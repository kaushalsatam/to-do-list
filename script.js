const date = new Date();

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let weekDay = week[date.getDay()];
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;

$("#day").text(weekDay + ",");
$("#date").text(currentDate);

let noOfTasks = 1;

$("button").on("click", () => {
    let task = prompt("Task name:");
    if(task !== null){
        $("span.start").remove();
        let taskAdd = '<div class="bg-sky-300 p-5 rounded-xl mb-4"><label for="task'+ noOfTasks + '" class="h-12 w-auto"><input type="checkbox" name="task" id="task'+ noOfTasks + '" class=" task-checkbox size-5 m-3" />'+ task + '</label></div>'
        $("form").append(taskAdd);
        noOfTasks++;
    }
});

