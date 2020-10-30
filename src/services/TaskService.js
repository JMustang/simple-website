import ApiAxios from '../ApiAxios'

export const getTasks = async () => {
    const response = await ApiAxios.get('/tasks')
    return response.data
} 

export const postTask = async ({ title, description }) => {
    const status = 1;
    const response = await ApiAxios.post('/tasks', { title, description, status });
    return response.data;
}