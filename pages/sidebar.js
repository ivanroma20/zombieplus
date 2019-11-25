
var userActions = {
    expectLoggedUser: function (name) {
        return this
            .waitForElementVisible('@userInfo', 6000)
            .assert.containsText('@userInfo', 'Ivan')
    }
}

module.exports = {
    commands: [userActions],
    elements: {
        userInfo: '.user .info span'
    }
}