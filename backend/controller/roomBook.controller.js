import { User } from "../models/userSchema.js";
import { RoomBook } from "../models/roomBook.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const bookRoom = catchAsyncErrors(async (req, res, next) => {
  const { user_id, room_id, check_in, check_out, price } = req.body;

  if (!user_id || !room_id || !check_in || !check_out || !price) {
    return next(new ErrorHandler("Please fill in all fields", 400));
  }

  // Check if the room is already booked for the specified dates
  const existingBooking = await RoomBook.findOne({
    room_id,
    $or: [
      { check_in: { $gte: check_in, $lte: check_out } },
      { check_out: { $gte: check_in, $lte: check_out } },
    ],
  });

  if (existingBooking) {
    return next(
      new ErrorHandler("Room already booked for the specified dates", 400)
    );
  }

  // Check if the user already has a booking
  const userBooking = await RoomBook.findOne({ user_id });

  if (userBooking) {
    return next(new ErrorHandler("Student already has a booking", 400));
  }

  // If all checks pass, proceed with booking
  const findUser = await User.findOne({ _id: user_id });

  if (!findUser) {
    return next(new ErrorHandler("User Not Found", 400));
  }

  await RoomBook.create({ user_id, room_id, check_in, check_out, price });
  res.status(200).json({
    success: true,
    message: "Room Booked Successfully!",
  });
});

export const findRooms = catchAsyncErrors(async (req, res, next) => {
  const { user_id } = req.body;

  if (!user_id) {
    return next(new ErrorHandler("Please provide user ID", 400));
  }

  try {
    // Find all room bookings for the specified user
    const rooms = await RoomBook.find({ user_id });

    if (!rooms || rooms.length === 0) {
      return next(new ErrorHandler("No bookings found for the user", 404));
    }

    res.status(200).json({
      success: true,
      rooms,
    });
  } catch (error) {
    return next(new ErrorHandler("Error finding rooms", 500));
  }
});

export const getAllBookedRooms = catchAsyncErrors(async (req, res, next) => {
  try {
    const bookedRooms = await RoomBook.find();
    res.status(200).json({
      success: true,
      bookedRooms,
    });
  } catch (error) {
    return next(new ErrorHandler("Error finding booked rooms", 500));
  }
});

export const getBookedRoomsByUserId = catchAsyncErrors(
  async (req, res, next) => {
    const { userId } = req.params; // Access userId from route parameters

    if (!userId) {
      return next(new ErrorHandler("Please provide user ID", 400));
    }

    try {
      // Find all room bookings for the specified user
      const bookedRooms = await RoomBook.find({ user_id: userId }); // Use userId to query

      if (!bookedRooms || bookedRooms.length === 0) {
        return next(new ErrorHandler("No bookings found for the user", 404));
      }

      res.status(200).json({
        success: true,
        bookedRooms,
      });
    } catch (error) {
      return next(new ErrorHandler("Error finding booked rooms", 500));
    }
  }
);
