import Joi from "joi";

const courseValidation = (data) => {

    const schema = Joi.object({
        image: Joi.string(),
        title: Joi.string().min(2).max(20).required(),
        price: Joi.string().min(4).max(30).required(),
        author: Joi.string().min(2).max(30).required(),
    });

    return schema.validate(data);
}

export default courseValidation;