import pg from '../../lib/db'
let movieData = {}

module.exports = {

    before: function (browser) {

        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A squad mission to capture Rainha Vermelha and collect data about incident.'
        }

        pg.removeByTittle(movieData.title)

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('ivanbeto@gmail.com', 'pwd123')
        sidebar.expectLoggedUser('Ivan')


    },

    'when I make a record of a movie': function (browser) {
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')

    },

    'Then I should see the film in the list': function (browser) {
        let movie = browser.page.movie()

        //Visible => show the element in page also it see it
        // attribute display
        //Presente=> Only need show the element in page

        movie
            .useXpath()
            .waitForElementPresent('@list', 10000)
            .assert.containsText('@list', movieData.title)
    }
}