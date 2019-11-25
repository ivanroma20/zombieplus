

module.exports = {
    'pass not informed': (browser) => {
        let login = browser.page.login()
        login
            .with('ivanbeto20@gmail.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}

