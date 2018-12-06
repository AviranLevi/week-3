const render = new Renderer();
const api = new APIManager();
api.generateNewPage();

$("#gen-page").on("click", function () {
   api.generateNewPage();
});