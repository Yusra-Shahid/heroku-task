import TodoRepo from "../repository/TodoRepo";
import TodoRepo from "../repository/TodoRepo";
import { TodoRepo } from "../repositroy/TodoRepo";

class todoController{
    async getAlltasks(request,response){
        const TodoRepo= new TodoRepo();
        let res=await TodoRepo.getAlltasks();
response.json({
    todo:res.rows
});
    }

    async createTask(request,response){
        const TodoRepo= new TodoRepo();
        let res=await TodoRepo.createTaskRepo(request.body.id,request.body.task,request.body.done);
        response.json({
            "status":"task created"
        });
    }
}
module.exports