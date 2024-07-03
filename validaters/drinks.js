const joi = require("joi");

const validatecource = (cource) => {
  console.log("Validating");
  const schema = joi.object({
    value: joi.string().min(3).required(),
  });
  return schema.validate(cource);
};

module.exports = { validatecource };
