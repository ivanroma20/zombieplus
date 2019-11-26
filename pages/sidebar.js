
var userActions = {
    expectLoggedUser: function (name) {
        return this
            .waitForElementVisible('@userInfo', 10000)
            .assert.containsText('@userInfo', 'Ivan')
    }
}

module.exports = {
    commands: [userActions],
    elements: {
        userInfo: '.user .info span'
    }
}