const model = require('../models/userModel')

async function getUsers() {
    try {
        const list = await model.findAll();
        return list;
    } catch (error) {
    }
}

async function addUser(userObj) {
    try {
        await model.create(userObj);
        return "User added successfully."
    } catch (err) {
        console.log("err", err);
    }
}

async function updateUser(userId,userObj) {
    try {
        const [numRowsAffected, updatedRows] = await model.update(userObj, {
            where: { user_id: userId },
            returning: true, // Return the updated rows
            plain: true // Return only the updated row, not an array
        });
        if (numRowsAffected === 0) {
            throw new Error('User not found');
        }
        console.log("User updated successfully:", updatedRows);
        return "user updated successfully.";
    } catch (err) {
        console.log("err", err);
    }
}

async function deleteUser(id) {
    try {
        const deletedRow = await model.destroy({
            where: {
                user_id : id
            }
        })
        if (deletedRow > 0) {
            return "user deleted successfully.";
        }
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};
