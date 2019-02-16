import axios from 'axios'

const TasksService = {
    //returns a promise that immediately resolves to data
    async getTasksAsync() {
        let res = await axios.get("https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        return res.data;
    },

    async getTaskAsync(taskId){
        let res = await axios.get("https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks/"+taskId);
        return res.data;
    },

    //returns a promise that immediately resolves to resolve to data
    async addTaskAsync(taskBody){
        let res = await axios.request(
            {
            url:'https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks',
            method: 'POST',
            headers:{'content-type':'application/json'},
            data: taskBody
            }
        )
        
        return res.data
    },

    //returns as promise that immediately resolves to data
    async changeCompletionStatusAsync(taskId, newCompletionStatus){
        let res = await axios.request(
            {
            url:'https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks/'+taskId,
            method:'PUT',
            headers:{'content-Type':'application/json'},
            data:{"taskCompleted": newCompletionStatus}
            }
              )

        return res.data
    },

    //returns a promise that immediately resolves to data
    async deleteTaskAsync(taskId){
        let res = await axios.request(
            {
            url:'https://o5xakw8bd7.execute-api.eu-west-2.amazonaws.com/dev/tasks/'+taskId,
            method: 'DELETE'
            }
        )
        return res.data
    }
};

export default TasksService;