module.exports = {
    '@tags': ['smoke', '404'],

    before: function (browser) {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('ivanbeto@gmail.com', 'pwd123')
        sidebar.expectLoggedUser('Ivan')
    },

    'Cuando yo busco un título no registrado': function (browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', 'Piratas del caribe')
            .click('@searchIcon')
    },

    'Entonces debo ver un mensaje de alerta': function (browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger','Puxa! não encontramos nada aqui :(')
    }
}