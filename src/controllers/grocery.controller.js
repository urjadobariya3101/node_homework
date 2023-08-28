const { groceryService } = require('../services');

/** create grocery */
const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const grocery = await groceryService.createGrocery(reqBody);
        if (!grocery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Grocery create successfully!",
            data: { grocery }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get grocery list */
const getGroceryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await groceryService.getGroceryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get grocery list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete Grocery */
const deleteGrocery = async (req, res) => {
    try {
        const groceryId = req.params.groceryId;
        const groceryExists = await groceryService.getGroceryById(groceryId);
        if (!groceryExists) {
            throw new Error("Grocery not found!");
        }

        await groceryService.deleteGrocery(groceryId);
        res.status(200).json({
            success: true,
            message: "Grocery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery
}