const User = {}

User.get = async (req, res) => {
    return res.send({
        data: "hay"
    })
}

module.exports = User
