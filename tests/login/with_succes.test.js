

module.exports = {
    '@tags': ['smoke'],
    
    'success login': (browser) => {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('ivanbeto@gmail.com', 'pwd123')

        sidebar.expectLoggedUser('Ivan')
    }
}

