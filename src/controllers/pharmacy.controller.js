const { pharmacyService } = require('../services');

/** create pharmacy */
const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await pharmacyService.createPharmacy(reqBody);
        if (!pharmacy) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Pharmacy create successfully!",
            data: { pharmacy }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get pharmacy list */
const getPharmacyList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await pharmacyService.getPharmacyList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get pharmacy list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete pharmacy */
const deletePharmacy = async (req, res) => {
    try {
        const pharmacyId = req.params.pharmacyId;
        const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
        if (!pharmacyExists) {
            throw new Error("Pharmacy not found!");
        }

        await pharmacyService.deletePharmacy(pharmacyId);
        res.status(200).json({
            success: true,
            message: "Pharmacy delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**pharmacy update by id */
const updateDetails = async (req, res) => {
    try {
        const pharmacyId = req.params.pharmacyId;
        const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
        if (!pharmacyExists) {
            throw new Error("Pharmacy not found...");
        }

        await pharmacyService.updateDetails(pharmacyId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Pharmacy details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error, message });
    }
};

/** Get Pharmacy details by id */
const getPharmacyDetails = async (req, res) => {
    try {
      const getDetails = await pharmacyService.getPharmacyById(
        req.params.pharmacyId
      );
      if (!getDetails) {
        throw new Error("Pharmacy not found!");
      }

      res.status(200).json({
        success: true,
        message: "Pharmacy details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createPharmacy,
    getPharmacyList,
    deletePharmacy,
    updateDetails,
    getPharmacyDetails
}