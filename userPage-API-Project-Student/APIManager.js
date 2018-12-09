class APIManager {
    constructor(renderer) {
        this.renderer = renderer;

    }
    getUsers() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            method: "GET",
            success: data => {
                this.renderer.render(data.results[0], ".user-container", "#user-template");

                let friendsData = data.results.slice(1,7);
                friendsData = {friendsData};

                this.renderer.render(friendsData, ".friends-container", "#user-friends-template");
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getQuote() {
        $.ajax({
            url: 'https://talaikis.com/api/quotes/random/',
            method: 'GET',
            success: data => {
                this.renderer.render(data, ".quote-container", "#quote-template");
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getPokemon() {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151) + "/",
            method: 'GET',
            success: data => {
                this.renderer.render(data, ".pokemon-container", "#pokemon-template")
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getMeat() {
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&paras=2',
            method: 'GET',
            success: data => {
                let dataO = {data};
                console.log(dataO);
                this.renderer.render(dataO, ".meat-container", "#meat-template")
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    generateNewPage() {
        this.getUsers();
        this.getQuote();
        this.getPokemon();
        this.getMeat();
    }
}