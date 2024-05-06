import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Room } from "../models/roomSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const addRooom = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Room Image Required!", 400));
  }
  const { roomImage } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  if (!allowedFormats.includes(roomImage.mimetype)) {
    return next(new ErrorHandler("File Format Not Supported!", 400));
  }
  const {
    roomId,
    roomName,
    roomPrice,

    roomDescription,
    roomStatus,
  } = req.body;

  if (!roomId || !roomName || !roomPrice || !roomDescription || !roomStatus) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }
  const isRoom = await Room.findOne({ roomId });
  if (isRoom) {
    return next(new Error("Room with this ID already exists", 400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(
    staffAvatar.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary error:",
      cloudinaryResponse.error || "Unknown Cloudinary Error"
    );
  }
  const room = await Room.create({
    roomId,
    roomName,
    roomPrice,

    roomDescription,
    roomStatus,
    roomImage: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "New Room Added Successfully",
  });
});

export const getAllRooms = catchAsyncErrors(async (req, res, next) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    rooms,
  });
});
