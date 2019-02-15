import axios from 'axios'

const TasksService = {
    //returns a promise to resolve to data
    async getTasksAsync() {
        let res
        try{
            res = await axios.get("https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        } catch(e) {
            console.log(e)
        }
        return res.data;
    },

    async getTaskAsync(taskId){
        let res
        try{
            res = await axios.get("https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks/"+taskId);
        } catch(e) {
            console.log(e)
        }
        return res.data;
    },

    //returns a promise to resolve to data
    async addTaskAsync(taskBody){
        let res
        try{
            res = await axios.request(
                {
                url:'https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks',
                method: 'POST',
                headers:{'content-type':'application/json'},
                data: taskBody
                }
            )
        } catch(e){
            console.log(e)
        }
        return res.data
    },

    async changeCompletionStatusAsync(taskId, newCompletionStatus){
        let res
        try{
            res = await axios.request(
                {
                  url:'https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks/'+taskId,
                  method:'PUT',
                  headers:{'content-Type':'application/json'},
                  data:{"taskCompleted": newCompletionStatus}
                }
              )
        } catch (e){
            console.log(e)
        }
        return res.data
    },

    async deleteTaskAsync(taskId){
        let res
        try{
            res = await axios.request(
                {
                url:'https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks/'+taskId,
                method: 'DELETE'
                }
            )
        } catch(e){
            console.log(e)
        }
        return res.data
    }
};

export default TasksService;