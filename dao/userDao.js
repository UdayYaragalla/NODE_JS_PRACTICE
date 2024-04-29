const { user } = require('../models')

async function getUsers() {
    try {
        const list = await user.findAll();
        return list;
    } catch (error) {
        throw new Error('Error while fetching user data')
    }
}

async function addUser(userObj) {
    try {
        await user.create(userObj);
        return "User added successfully."
    } catch (err) {
        console.log("err", err);
    }
}

async function updateUser(userId, userObj) {
    try {
        const [numRowsAffected, updatedRows] = await user.update(userObj, {
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
        const deletedRow = await user.destroy({
            where: {
                user_id: id
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
