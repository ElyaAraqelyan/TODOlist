import axios from "axios";

export default class TodoService {  
    static async getAll(limit = 10, page = 1){
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return res
        } catch (error) {
            console.log(error.message);
        }
    }
}