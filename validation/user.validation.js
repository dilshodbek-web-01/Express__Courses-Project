import Joi from "joi";

const userValidation = (data) => {

    const schema = Joi.object({
        image: Joi.string(),
        username: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(3).max(30).email().required(),
        confirmEmail: Joi.ref('email'),
        password: Joi.string().min(3).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });

    return schema.validate(data);
}

export default userValidation;