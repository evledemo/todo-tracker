import axios from "axios";

const INSTRUCTOR = "crud";
const TASK_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${TASK_API_URL}/task-rest/${INSTRUCTOR}`;

class TaskDataService {
  getAllTasks(name) {
    return axios.get(`${INSTRUCTOR_API_URL}/tasks`);
  }

  getTask(name, id) {
    return axios.get(`${INSTRUCTOR_API_URL}/tasks/${id}`);
  }

  deleteTask(name, id) {
    return axios.delete(`${INSTRUCTOR_API_URL}/tasks/${id}`);
  }

  putTask(name, id, task) {
    return axios.put(`${INSTRUCTOR_API_URL}/tasks/${id}`, task);
  }

  postTask(name, task) {
    return axios.post(`${INSTRUCTOR_API_URL}/tasks/`, task);
  }
}
