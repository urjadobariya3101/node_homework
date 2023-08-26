const { jwelleryService } = require('../services');

/** create jwellery */
const createJwellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jwellery = await jwelleryService.createJwellery(reqBody);
        if (!jwellery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Jwellery create successfully!",
            data: { jwellery }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get jwellery list */
const getJwelleryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await jwelleryService.getJwelleryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get jwellery list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete jwellery */
const deleteJwellery = async (req, res) => {
    try {
        const jwelleryId = req.params.jwelleryId;
        const jwelleryExists = await jwelleryService.getJwelleryById(jwelleryId);
        if (!jwelleryExists) {
            throw new Error("Jwellery not found!");
        }

        await jwelleryService.deleteJwellery(jwelleryId);
        res.status(200).json({
            success: true,
            message: "Jwellery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createJwellery,
    getJwelleryList,
    deleteJwellery
}