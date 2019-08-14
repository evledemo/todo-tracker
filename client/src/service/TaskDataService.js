import axios from "axios";

const TASK_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${TASK_API_URL}/task-rest`;

class TaskDataService {
  getAllTasks() {
    return axios.get(`${INSTRUCTOR_API_URL}/tasks`);
  }

  getDashboardTasks() {
    return axios.get(`${INSTRUCTOR_API_URL}/dashboard-tasks`);
  }

  getTask(id) {
    return axios.get(`${INSTRUCTOR_API_URL}/tasks/${id}`);
  }

  deleteTask(id) {
    return axios.delete(`${INSTRUCTOR_API_URL}/tasks/${id}`);
  }

  putTask(task) {
    return axios.put(`${INSTRUCTOR_API_URL}/put-task`, task);
  }

  postTask(task) {
    return axios.post(`${INSTRUCTOR_API_URL}/post-task`, task);
  }
}

export default new TaskDataService();
