import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Maintenance } from "../models/maintenanceSchema.js";

export const postRequest = catchAsyncErrors(async (req, res, next) => {
  const { fullName, date, issue, roomName, department } = req.body;

  if (!fullName || !date || !issue || !roomName || !department) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  const maintenance = await Maintenance.create({
    fullName,
    date,
    issue,
    roomName,
    department,
  });
  res.status(200).json({
    success: true,
    message: "Request Send Successfully!!",
    maintenance,
  });
});

export const getAllMaintenance = catchAsyncErrors(async (req, res, next) => {
  const maintenance = await Maintenance.find();
  res.status(200).json({
    success: true,
    maintenance,
  });
});

export const getAllMaintenanceByDepartment = catchAsyncErrors(
  async (req, res, next) => {
    const { department } = req.params;
    let maintenance;

    if (department) {
      maintenance = await Maintenance.find({ department });
    } else {
      maintenance = await Maintenance.find();
    }

    res.status(200).json({
      success: true,
      maintenance,
    });
  }
);

export const updateMaintenanceStatus = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    let maintenance = await Maintenance.findById(id);
    if (!maintenance) {
      return next(new ErrorHandler("Maintenance not found", 404));
    }
    maintenance = await Maintenance.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Maintenance Status Updated",
      maintenance,
    });
  }
);

export const deleteMaintenance = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let maintenance = await Maintenance.findById(id);
  if (!maintenance) {
    return next(new ErrorHandler("Maintenance not found", 404));
  }
  await maintenance.deleteOne();
  res.status(200).json({
    success: true,
    message: "Maintenance Deleted!",
  });
});
