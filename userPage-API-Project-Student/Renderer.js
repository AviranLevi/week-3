class Renderer {
    constructor () {
        Handlebars.registerHelper('toUpper', function (str) {
            return str.replace(/^\w/, c => c.toUpperCase());
        });
    }

    render (data, container, templateDIV) {
        $(container).empty();
        let source = $(templateDIV).html();
        let template = Handlebars.compile(source);
        let newHTML = template(data);
        $(container).append(newHTML);
    }
}

