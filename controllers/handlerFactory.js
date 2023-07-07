const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newDoc,
    });
  });

  exports.getOne = (Model,populateOptions='') =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id).populate(populateOptions)

    if (!doc) {
      return next(new AppError('Document not found!', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc
    });
  });

  exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await  Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!doc) {
        return next(new AppError('Document not found!', 404));
      }

    res.status(200).json({
      status: 'success',
      data:  doc
    });
  });

  exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('Document not found!', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });