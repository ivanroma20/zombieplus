

module.exports = {
    'pass incorrect': (browser) => {
        let login = browser.page.login()
        login
            .with('ivanbeto@gmail.com', 'pass123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}

