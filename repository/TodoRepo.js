const pool =require('../dbconnection')

class TodoRepo{
    async getAllTasks(){
        return await pool.query('select * from public.todoList')
    }

    async createTaskRepo(id,task,done){
        return await pool.query('INSERT INTO public.todoList(id, task,done) VALUES ($1,$2,$3)',[id,task,done]);
    }

    async DeleteTaskRepo(id){
        return await pool.query('DELETE FROM public.todoList WHERE id = $1',[id]);
    }

    async UpdateTaskRepo(id,task,done){
        return await pool.query('UPDATE public.todoList SET task = $2 WHERE id = $1',[req.body.id,req.body.task]);
    }

}
module.exports=TodoRepo;