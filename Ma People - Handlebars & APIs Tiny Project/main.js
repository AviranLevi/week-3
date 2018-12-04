const dataInfo = (d) => {

    let data = {peopleData:d};

    let source = $('#people-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template(data);
    $("#peopleList").append(newHTML);
};

$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function (data) {
        dataInfo(data)
    },

    error: function () {
        console.log("You got an error biatch")
    }
});

