const { musicService } = require('../services');

/** create music */
const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const music = await musicService.createMusic(reqBody);
        if (!music) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Music create successfully!",
            data: { music }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get music list */
const getMusicList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await musicService.getMusicList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get music list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete music */
const deleteMusic = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        const musicExists = await musicService.getMusicById(musicId);
        if (!musicExists) {
            throw new Error("Music not found!");
        }

        await musicService.deleteMusic(musicId);
        res.status(200).json({
            success: true,
            message: "Music delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**music update by id */
const updateDetails = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        const musicExists = await musicService.getMusicById(musicId);
        if (!musicExists) {
            throw new Error("Music not found...");
        }

        await musicService.updateDetails(musicId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Music details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error, message });
    }
};

/** Get Musicdetails by id */
const getMusicDetails = async (req, res) => {
    try {
      const getDetails = await musicService.getMusicById(
        req.params.musicId
      );
      if (!getDetails) {
        throw new Error("Musicnot found!");
      }

      res.status(200).json({
        success: true,
        message: "Musicdetails get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createMusic,
    getMusicList,
    deleteMusic,
    updateDetails,
    getMusicDetails
}