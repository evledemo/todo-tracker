package my.todotracker.repository;

import my.todotracker.enums.TaskStatusEnum;
import my.todotracker.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {

	public List<Task> findByTaskStatusIn(List<TaskStatusEnum> taskStatus);
}
