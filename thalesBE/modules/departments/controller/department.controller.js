import DepartmentService from '../service/department.service.js';
class DepartmentController {
    static async insertDepartment(req, res) {

        try {
            const result = await DepartmentService.createDepartment(req.body);
            res.status(200).json(result);
        } catch (err) {
            res.status(404).send({ message: err.toString() });
        }

    }

    static async editDepartment(req, res) {
        console.log("came in edit")
        try {
            let data=req.body;
            console.log(req.body);
            let obj={
                "_id":data._id,
                "name":data.name,
                "email":data.email,
                "phoneNumber":data.phoneNumber
            }
            const result = await DepartmentService.updateDepartment(obj);
            console.log("came in edit", JSON.stringify(result))
            if (result.nModified > 0) {
                const department = await DepartmentService.getDepartmentById(req.body._id);
                var response = {
                    '_error_message': 'Updated',
                    '_status_Code': 200,
                    '_status': 'done',
                    'result': department
                }
                console.log("came in result", JSON.stringify(department))
                res.status(200).send(response)
            } else {
                var response = {
                    '_error_message': 'none',
                    '_status_Code': 200,
                    '_status': 'done',
                    'result': null
                }
                res.status(200).send(response)

            }

        } catch (err) {
            console.log("here is error in transaction while sending messages to producer", err)
            res.status(404).send({ message: err.toString() });
        }

    }

    static async getAllDepartments(req, res) {

        try {
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const results = {};
            const totalRecords = await DepartmentService.getAllDepartment();
            if (endIndex < totalRecords.length) {
              results.next = {
                page: page + 1,
                limit: limit
              };
            }
         
            if (startIndex > 0) {
              results.previous = {
                page: page - 1,
                limit: limit
              };
            }
            results.total = {
                pages: Math.round(totalRecords.length/limit),
                limit: limit
              };
         
            
            results.results = totalRecords.slice(startIndex, endIndex);
      
             
            
            var response = {
                '_error_message': 'Departments',
                '_status_Code': 200,
                '_status': 'done',
                'result': results
            }
            res.status(200).send(response)
        } catch (err) {
            res.status(404).send({ message: err.toString() });
        }

    }
    static async getDepartmentById(req, res) {

        try {

             
            const result = await DepartmentService.getDepartmentById(req.params._id);

  
            var response = {
                '_error_message': 'Departments',
                '_status_Code': 200,
                '_status': 'done',
                'result': result
            }
            res.status(200).send(response)
        } catch (err) {
            res.status(404).send({ message: err.toString() });
        }

    }

    static async deleteDepartment(req, res) {

        try {
            const result = await DepartmentService.deleteDepartment(req.params._id);
            var response = {
                '_error_message': 'Deleted',
                '_status_Code': 200,
                '_status': 'done',
                'result': null
            }
            res.status(200).send(response)
        } catch (err) {
            console.log("here is error in transaction while sending messages to producer", err)
            res.status(404).send({ message: err.toString() });
        }

    }
}

export default DepartmentController;

