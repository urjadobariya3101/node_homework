const { bookService } = require('../services');

/** create book */
const createBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.createBook(reqBody);
        if (!book) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Book create successfully!",
            data: { book }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get book list */
const getBookList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await bookService.getBookList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get book list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete book */
const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const bookExists = await bookService.getBookById(bookId);
        if (!bookExists) {
            throw new Error("Book not found!");
        }

        await bookService.deleteBook(bookId);
        res.status(200).json({
            success: true,
            message: "Book delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**book update by id */
const updateDetails = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const bookExists = await bookService.getBookById(bookId);
        if (!bookExists) {
            throw new Error("Book not found...");
        }

        await bookService.updateDetails(bookId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Book details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error, message });
    }
};

/** Get Book details by id */
const getBookDetails = async (req, res) => {
    try {
      const getDetails = await bookService.getBookById(
        req.params.bookId
      );
      if (!getDetails) {
        throw new Error("Book not found!");
      }

      res.status(200).json({
        success: true,
        message: "Book details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createBook,
    getBookList,
    deleteBook,
    updateDetails,
    getBookDetails
}