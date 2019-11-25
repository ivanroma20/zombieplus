

module.exports = {
    'email not registred': (browser) => {
        let login = browser.page.login()
        login
            .with('ivanbeto20@gmail.com', 'pass123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}

