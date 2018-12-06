class APIManager {
/*    constructor() {
    }*/
    getUsers() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            method: "GET",
            success: function(data) {
                render.renderUsers(data.results[0]);
                render.renderFriends(data.results.slice(1, 7));
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
            success: function(data) {
                render.renderQuote(data);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getPokemon() {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 800) + "/",
            method: 'GET',
            success: function(data) {
                render.renderPokemon(data)
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
            success: function(data) {
                render.renderMeat(data)
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