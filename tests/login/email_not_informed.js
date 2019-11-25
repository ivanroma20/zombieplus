

module.exports = {
    'disabled': true,
    'email not informed': (browser) => {
        let login = browser.page.login()
        login
            .with('', 'pass123')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}

