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
        let taskAdd = '<div id="task-container'+ noOfTasks +'" class="bg-sky-300 p-5 rounded-xl mb-4 flex items-center justify-between"><label for="task'+ noOfTasks + '" class="h-12 w-auto"><input type="checkbox" name="task" id="task'+ noOfTasks +'" class="task-checkbox size-5 m-3"/>'+ task + '</label><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2" id="svg'+ noOfTasks +'"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg></div>'
        $("form").append(taskAdd);
        noOfTasks++;
    }
});

// Wrong method
// $("#svg" + noOfTasks).on("click", () => {
//     $("#task-container" + noOfTasks).remove();
// });

// Event delegation for dynamically added elements
$("form").on("click", "[id^=svg]", function() {
    $(this).closest('div[id^="task-container"]').remove();
});
