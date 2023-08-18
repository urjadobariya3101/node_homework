const { userService } = require('../services');

/** create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        // const userExists = await userService.getUserByEmail(reqBody.email);
        // if (userExists) {
        //     throw new Error("Something went wrong, please try again or later!");
        // }

        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "User create successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get user list */
const getUserList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await userService.getUserList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get user list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createUser,
    getUserList
}