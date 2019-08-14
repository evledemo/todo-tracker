package my.todotracker.service;

import my.todotracker.enums.TaskStatusEnum;
import my.todotracker.mapper.TaskMapper;
import my.todotracker.model.Task;
import my.todotracker.repository.TaskRepository;
import my.todotracker.transport.dto.TaskDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceIml implements TaskService {

	private TaskRepository taskRepository;
	private TaskMapper taskMapper;

	@Autowired
	public TaskServiceIml(TaskRepository taskRepository, TaskMapper taskMapper) {
		this.taskRepository = taskRepository;
		this.taskMapper = taskMapper;
	}

	@Override
	public List<TaskDTO> findAll() {
		return taskRepository.findAll().stream().map(t -> taskMapper.taskToTaskDTO(t)).collect(Collectors.toList());
	}

	@Override
	public TaskDTO saveTask(TaskDTO taskDTO) {
		Task task;
		if (taskDTO.getId() == null)
			task = save(taskDTO);
		else
			task = update(taskDTO);
		return taskMapper.taskToTaskDTO(task);
	}

	private Task update(TaskDTO taskDTO) {
		return taskRepository.save(taskMapper.taskToTaskDTO(taskDTO));
	}

	private Task save(TaskDTO taskDTO) {
		Task task = taskMapper.taskToTaskDTO(taskDTO);
		task.setCreated(new Date());
		task.setTaskStatus(TaskStatusEnum.Draft);
		return taskRepository.save(task);
	}
}
