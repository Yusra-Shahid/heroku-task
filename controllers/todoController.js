// import TodoRepo from "../repository/TodoRepo";


// class todoController{
//     async getAlltasks(request,response){
//         const TodoRepo= new TodoRepo();
//         let res=await TodoRepo.getAlltasks();
// response.json({
//     todo:res.rows
// });
//     }

//     async createTask(request,response){
//         const TodoRepo= new TodoRepo();
//         let res=await TodoRepo.createTaskRepo(request.body.id,request.body.task,request.body.done);
//         response.json({
//             "status":"task created"
//         });
//     }
// }
// module.exports



const TodoRepo = require('../repository/TodoRepo')

class TodoController {
    async getAll(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.getAllTasks();
        response.json({
            todo: res.rows
        });
    }

    async createTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createTaskRepo(request.body.id,
            request.body.task, request.body.done);

        response.json({
            "status": "Task created"
            })
    }

    async DeleteTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.DeleteTaskRepo(request.body.id);
        console.log(res)
        response.json({
            "status": "Task deleted"
            })
    }

    async UpdateTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.UpdateTaskRepo(request.body.id);
        console.log(res)
        response.json({
            "status": "Task Update"
            })
    }
}

module.exports = TodoController;