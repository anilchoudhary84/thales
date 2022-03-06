import Departments from '../model/Departments.js';

const createDepartment = async (inputDepartment) => {
    const newTransaction = new Departments({
        name: inputDepartment.name,
        email: inputDepartment.email,
        phoneNumber: inputDepartment.phoneNumber
    });
    return await newTransaction.save();
};

const updateDepartment = async (inputDepartment) => {
console.log("priunt here ",inputDepartment._id)
    return await Departments.updateOne({ _id: inputDepartment._id }, inputDepartment);
};


const deleteDepartment = async (inputDepartment) => {

    return await Departments.remove({ _id: inputDepartment });
};
const getAllDepartment = async ( ) => {

    return  await Departments.find()
    
};
const getDepartmentById = async (inputDepartment) => {

    return await Departments.findOne({ _id: inputDepartment });
};
export default {
    createDepartment,
    getAllDepartment,
    updateDepartment,
    deleteDepartment,
    getDepartmentById


};