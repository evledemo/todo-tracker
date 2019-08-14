package my.todotracker.rest;

import my.todotracker.service.TaskService;
import my.todotracker.transport.dto.TaskDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RequestMapping("/task-rest")
public class TaskRestController {

	private TaskService taskService;

	@Autowired
	public TaskRestController(TaskService taskService) {
		this.taskService = taskService;
	}

	@GetMapping("/get-all-tasks")
	public List<TaskDTO> getAllTasks() {
		return taskService.findAll();
	}

	@GetMapping("/dashboard-tasks")
	public List<TaskDTO> getDashboardTasks() {
		return taskService.findAll();
	}

	@GetMapping("get-task")
	public TaskDTO getTask() {return null;}

	@DeleteMapping("delete-task")
	public void deleteTask(Long id) {
		throw new UnsupportedOperationException();
	}

	@PutMapping("put-task")
	public TaskDTO putTask(TaskDTO task) {
		return task;
	}

	@PostMapping("post-task")
	public TaskDTO postTask(@RequestBody(required = false) TaskDTO taskDTO) {
		return taskService.saveTask(taskDTO);
	}

}
