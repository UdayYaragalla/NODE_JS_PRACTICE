const { response } = require('express');
const studentDao = require('../dao/studentDao')

module.exports = {
    getList: async (request, response) => {
        const result = await studentDao.getList();
        response.send(result);
    },
    addStudent: async (request, response) => {
        const studentObj = request.body
        const result = await studentDao.addStudent(studentObj)
        response.send(result)
    }
}