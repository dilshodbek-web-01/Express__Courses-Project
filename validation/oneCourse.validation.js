import Joi from "joi";

const oneCourseValidation = (params) => {

    const schema = Joi.object({
        id: Joi.string().min(35).required(),
    });

    return schema.validate(params);
}

export default oneCourseValidation;