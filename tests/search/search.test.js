import pg from '../../lib/db'

let movieData = {}

module.exports = {

    before: function (browser) {

        movieData = {
            title: 'I am in love with a zombie ',
            status: 'Disponível',
            year: 2013,
            releaseDate: '01/05/2013',
            cast: ['Nicholas Hoult', 'Teresa Palmer', 'Analeign Tipton', 'Rob Corddry'],
            cover: 'meu-namo-zumbi.jpg',
            plot: 'In a post-apocalyptic world, a romantic zombie are in love with woman'
        }
        pg.removeByTittle(movieData.title).then(function () {
            pg.insertMovie(movieData)
        })

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('ivanbeto@gmail.com', 'pwd123')
        sidebar.expectLoggedUser('Ivan')
    },

    'when I make a search for title': function (browser) {
        let movie = browser.page.movie()

        movie
        .setValue('@searchInput', movieData.title)
        .click('@searchIcon')

    },

    'then a search title should be show in list': function (browser) {

        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@tr', 10000)
            .expect.elements('@tr').count.to.equal(1)
        movie
            .assert.containsText('@tr', movieData.title)

    }
}