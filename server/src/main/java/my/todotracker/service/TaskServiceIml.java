package my.todotracker.service;

import my.todotracker.mapper.TaskMapper;
import my.todotracker.repository.TaskRepository;
import my.todotracker.transport.dto.TaskDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
