import Joi from "joi";

export const productValidationSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
});

export const cartValidationSchema = Joi.object({
    userId: Joi.string().required(),
    items: Joi.array().items(
        Joi.object({
            product: Joi.string().required(),
            quantity: Joi.number().integer().min(1).required()
        })
    ).min(1).required()
});

export const orderValidationSchema = Joi.object({
    customerInfo: Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        address: Joi.string().required(),
    }).required(),
    items: Joi.array()
        .items(
            Joi.object({
                product: Joi.string().required(),
                quantity: Joi.number().integer().min(1).required(),
            })
        )
        .min(1)
        .required(),
});