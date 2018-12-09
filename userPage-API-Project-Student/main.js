const renderer = new Renderer();
const api = new APIManager(renderer);
api.generateNewPage();

$("#gen-page").on("click",() => api.generateNewPage());
