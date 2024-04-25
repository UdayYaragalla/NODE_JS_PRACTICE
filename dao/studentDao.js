const studentModel = require('../models/oneToMany/studentModel')
const studentDetails = require('../models/oneToMany/studentDetailsModel')
    
async function getList() {
    try {
        const list = await studentModel.findAll();
        console.log('Inside get------------',list)
        return list;
    } catch (error) {
        console.log('Error',error);
    }
}

async function addStudent(studentObj) {
    console.log(studentObj)
    const { studentName , studentLocation } = studentObj
    try {
        const existingStudent = await studentModel.findOne({
            where: { studentName: studentName }
        });

        if (existingStudent) {
            await studentDetails.create({
                studentLocation: studentLocation,
                student_id : existingStudent.studentId
            });
        } else {
            const student = await studentModel.create({
                studentName : studentName
            });
    
            if (student) {
                await studentDetails.create({
                    studentLocation: studentLocation,
                    student_id : student.studentId
                });
                return 'Student details added successfully';
            } else {
                return 'Student detils not added'
            }
        }
    } catch (error) {
        console.log('Error',error);
    }
}

module.exports = {
    getList,
    addStudent
}