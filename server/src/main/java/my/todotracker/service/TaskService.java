package my.todotracker.service;

import my.todotracker.transport.dto.TaskDTO;

import java.util.List;

public interface TaskService {
	List<TaskDTO> findAll();
}
