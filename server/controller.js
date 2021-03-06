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
            req.session.userid = user_obj.id
            return res.status(201).send(user_obj)
        } else {
            return res.sendStatus(500)
        }
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const user = await db.find_username([username])

        if (user.length === 0) {
            return res.status(400).send('Username not found')
        }
        if (user[0].password !== password) {
            return res.status(401).send('Incorrect password')
        }

        let [user_obj] = user
        req.session.userid = user_obj.id
        res.status(200).send(user_obj)
    },

    //-------TEST OUT THIS ENDPOINT FIRST---------
    getAllPosts: async (req, res) => {
        const db = req.app.get('db')
        const id = req.session.userid
        const {userposts, search} = req.query
        
        if (JSON.parse(userposts)){
            if (search) {
                const posts = await db.search_posts_by_title([search])
                res.status(200).send(posts)
            } else {
                const posts = await db.get_all_posts()
                res.status(200).send(posts)
            }
        } else {
            if (search) {
                const posts = await db.search_posts_by_title_userless([search, id])
                res.status(200).send(posts)
            } else {
                const posts = await db.get_all_posts_userless([id])
                res.status(200).send(posts)
            }
        }
    },

    getAPost: async (req, res) => {
        const db = req.app.get('db')
        const {postid} = req.params

        const post = await db.get_one_post([postid])
        let [postObj] = post
        res.status(200).send(postObj)
    },

    createPost: async (req, res) => {
        const db = req.app.get('db')
        const {title, img, content} = req.body
        const id =  req.session.userid

        await db.create_post([title, content, img, id])
        res.sendStatus(200)
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUserInfo: async (req, res) => {
        const db = req.app.get('db')
        const id = req.session.userid

        const [userInfo] = await db.get_user_info([id])
        res.status(200).send(userInfo)
    }
}