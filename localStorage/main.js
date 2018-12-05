let input = $("#input");
let wisdom = JSON.parse(localStorage.wisdom || "[]");

$("#button").on("click", function () {
    $("body").append(`<p>${input.val()}</p>`);
    wisdom.push({text: input.val()});
    localStorage.wisdom = JSON.stringify(wisdom);
});

wisdom.forEach(w => {
    $("body").append(`<p>${w.text}</p>`)
});

$("#delete-button").on("click", function () {
    localStorage.clear();
});

