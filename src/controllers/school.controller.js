const { schoolService } = require('../services');

/** create school */
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const school = await schoolService.createSchool(reqBody);
        if (!school) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "School create successfully!",
            data: { school }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get school list */
const getSchoolList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await schoolService.getSchoolList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get school list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete school */
const deleteSchool = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        const schoolExists = await schoolService.getSchoolById(schoolId);
        if (!schoolExists) {
            throw new Error("School not found!");
        }

        await schoolService.deleteSchool(schoolId);
        res.status(200).json({
            success: true,
            message: "School delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**school update by id */
const updateDetails = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        const schoolExists = await schoolService.getSchoolById(schoolId);
        if (!schoolExists) {
            throw new Error("School not found...");
        }

        await schoolService.updateDetails(schoolId, req.body);

        res
            .status(200)
            .json({ success: true, message: "School details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error, message });
    }
};

/** Get School details by id */
const getSchoolDetails = async (req, res) => {
    try {
      const getDetails = await schoolService.getSchoolById(
        req.params.schoolId
      );
      if (!getDetails) {
        throw new Error("School not found!");
      }

      res.status(200).json({
        success: true,
        message: "School details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createSchool,
    getSchoolList,
    deleteSchool,
    updateDetails,
    getSchoolDetails
}