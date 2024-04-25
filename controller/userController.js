const userDao = require('../dao/userDao')

module.exports = {
    getList:  async (request, response) => {
        const users = await userDao.getUsers();
        response.send(users)
    },
    addUser: async (request, response) => {
        console.log("list---------in dsfjsd",request.body);

        const userObj = request.body
        const result = await userDao.addUser(userObj);
        response.send(result)
    },
    modifyUser: async (request, response) => {
        const userObj = request.body
        const userId = request.params.userId
        const result = await userDao.updateUser(userId,userObj);
        response.send(result)
    },
    deleteUser: async (request, response) => {
        const userId = request.params.userId
        const result = await userDao.deleteUser(userId);
        response.send(result)
    }
}

