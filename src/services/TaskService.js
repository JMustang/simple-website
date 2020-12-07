import ApiAxios from "../ApiAxios";

const headers = {
  headers: {
    authorization: `
      Bearer ${localStorage.getItem("task-token")}
    `,
  },
};

export const getTasks = async () => {
  const response = await ApiAxios.get("/tasks", headers);
  return response.data;
};

export const postTask = async ({ title, description }) => {
  const status = 1;
  const response = await ApiAxios.post(
    "/tasks",
    {
      title,
      description,
      status,
    },
    headers
  );
  return response.data;
};

export const getTaskById = async (id) => {
  const response = await ApiAxios.get(`/tasks/${id}`, headers);
  return response.data;
};

export const putTask = async (
  id,
  { title, description, status, created_at }
) => {
  const response = await ApiAxios.put(
    `/tasks/${id}`,
    {
      title,
      description,
      status,
      created_at,
    },
    headers
  );
  return response.data;
};

export const deleteTaskById = async (id) => {
  await ApiAxios.delete(`/tasks/${id}`, headers);
};
