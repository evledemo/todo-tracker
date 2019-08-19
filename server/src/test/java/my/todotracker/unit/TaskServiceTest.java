package my.todotracker.unit;

import my.todotracker.enums.TaskStatusEnum;
import my.todotracker.mapper.TaskMapper;
import my.todotracker.model.Task;
import my.todotracker.repository.TaskRepository;
import my.todotracker.service.TaskServiceIml;
import my.todotracker.transport.dto.TaskDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Date;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class TaskServiceTest {

	@InjectMocks
	TaskServiceIml taskService;
	@Mock
	TaskRepository taskRepository;

	@Test
	public void testTaskCreation() {

		taskService.setTaskMapper(TaskMapper.INSTANCE);

		Task task = new Task();
		task.setSubject("Subject 123");
		task.setDescription("Description 123");
		task.setCreated(new Date());
		task.setTaskStatus(TaskStatusEnum.Draft);

		when(taskRepository.save(any())).thenReturn(task);

		TaskDTO newTask = new TaskDTO();
		newTask.setSubject("Subject 123");
		newTask.setDescription("Description 123");
		newTask.setTaskStatus(TaskStatusEnum.Draft);

		TaskDTO savedTask = taskService.saveTask(newTask);
		assertNotNull(savedTask.getCreated());

		verify(taskRepository, times(1)).save(any());

	}

	@Test
	public void testTaskUpdate() {

		taskService.setTaskMapper(TaskMapper.INSTANCE);

		Task task = new Task();
		task.setId("123");
		task.setSubject("Subject 123");
		task.setDescription("Description 123");
		task.setCreated(new Date());
		task.setTaskStatus(TaskStatusEnum.Draft);

		when(taskRepository.save(any())).thenReturn(task);

		TaskDTO newTask = new TaskDTO();
		newTask.setSubject("Subject 123");
		newTask.setDescription("Description 123");
		newTask.setTaskStatus(TaskStatusEnum.Draft);

		TaskDTO savedTask = taskService.saveTask(newTask);
		assertNotNull(savedTask.getCreated());

		verify(taskRepository, times(1)).save(any());

	}
}
