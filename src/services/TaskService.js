import ApiAxios from '../ApiAxios'

export const getTasks = async () => {
    const response = await ApiAxios.get('/tasks')
    return response.data
} 