module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const userExists = await db.find_username([username])

        if (userExists.length > 0) {
            return res.status(400).send('Username already in use')
        }

        const user = await db.register_user([username, password])
        if (user.length > 0) {
            let [user_obj] = user
            return res.status(201).send(user_obj)
        } else {
            return res.sendStatus(500)
        }
    }
}