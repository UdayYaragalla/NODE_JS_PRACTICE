const { Student, StudentDetails } = require('../models')

async function getList() {
    try {
        const list = await Student.findAll();
        return list;
    } catch (error) {
        console.log('Error', error);
    }
}

async function addStudent(studentObj) {
    console.log(studentObj)
    const { studentName, studentLocation } = studentObj
    try {
        const existingStudent = await Student.findOne({
            where: { studentName: studentName }
        });

        if (existingStudent) {
            await StudentDetails.create({
                studentLocation: studentLocation,
                student_id: existingStudent.studentId
            });
        } else {
            const student = await Student.create({
                studentName: studentName
            });

            if (student) {
                await StudentDetails.create({
                    studentLocation: studentLocation,
                    student_id: student.studentId
                });
                return 'Student details added successfully';
            } else {
                return 'Student detils not added'
            }
        }
    } catch (error) {
        console.log('Error', error);
    }
}

module.exports = {
    getList,
    addStudent
}