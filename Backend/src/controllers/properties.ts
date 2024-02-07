import express from "express";
import property from "../models/properties.model";
import User from "../models/user.models";
import nodemailer from "nodemailer";

export const createProperty = async (
    req: express.Request,
    res: express.Response
) => {
    // Nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.COMPANY_EMAIL,
            pass: process.env.COMPANY_EMAIL_PASSWORD,
        },
    });
    try {
        const { title, description, categoryName } = req.body;
        const existingPropety = await property.findOne({ categoryName });
        if (!existingPropety) {
            return res.status(400).json({
                message: "Created listing ",
            });
        }
    
        const Property = new property({
            title,
            description,
            categoryName,
            owner: req.userId,
        });
        await Property.save();
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: "NO PROPERTY FOUND",
            });
        }
    }
}
