import Operation from "../../models/Operation.js";
import User from "../../models/User.js";

export const createUser = async (req, res) => {
    console.log(req.body);
    const { user, email, name, password } = req.body;
    try {
        const newUser =  await User.create({ user, email, name, password });
        res.json(newUser);
    } catch (error) {
        res.json({message: error});
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const foundUser = await User.findOne({
            where: {
                id
            },
            include: Operation
        });
        res.json(foundUser);
    } catch (error) {
        res.json(error);
    }
};

export const getUsers = async (req, res) => {
    try {
        const foundUsers = await User.findOne({
            include: Operation
        });
        res.json(foundUsers);
    } catch (error) {
        res.json(error);
    }
};