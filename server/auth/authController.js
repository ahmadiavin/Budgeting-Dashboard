const bcrypt = require('bcryptjs');

module.exports = {
    register: async function(req, res) {
        const {username, password, email} = req.body;
        const db = req.app.get('db');
        const result = await db.checkUser(username);
        if (+result[0].count > 0) {
            res.status(406).json({
                error: "Username Taken"
            })
        } else {
            const hash = await bcrypt.hash(password, 10)
            await db.addUser(username, email, hash)
            req.session.user = {
                username,
                email
            }
            res.status(200).json(req.session.user)
        }
    },

    login: async function(req, res) {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const userInfo = await db.getUserInfo(username)
        const correct = await bcrypt.compare(password, userInfo[0].password);
        if(correct === true) {
            req.session.user = {
                username,
                email: userInfo[0].email
            }
           res.status(200).json(req.session.user);
        } else {
            res.status(401).json({
                error: "Wrong Username or Password, try again"
            })
        }
        
    }
}