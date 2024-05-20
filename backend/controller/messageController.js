import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { fullName, message } = req.body;
  if (!fullName || !message) {
    return next(new ErrorHandler("Please fill full form", 400));
  }

  await Message.create({ fullName, message });
  res.status(200).json({
    success: true,
    message: "Message Send Successfully!",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
