package my.todotracker.rest;

import my.todotracker.TodotrackerApplication;
import my.todotracker.model.Task;
import my.todotracker.repository.TaskRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigInteger;

import static  org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@RunWith(SpringRunner.class)
@SpringBootTest(
		webEnvironment = SpringBootTest.WebEnvironment.MOCK,
		classes = TodotrackerApplication.class)
@AutoConfigureMockMvc
public class TaskRestControllerIntegrationTest {

	@Autowired
	TaskRepository taskRepository;
	@Autowired
	private MockMvc mvc;

	@Test
	public void getAllTasks() throws Exception {
		saveTask("subject1", "description1");
		mvc.perform(get("/task/get-all-tasks")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content()
						.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$[0].title", is("subject1")));
	}

	private Task saveTask(String title1, String description1) {
		Task task = new Task();
		task.setId(BigInteger.valueOf(1L));
		task.setSubject(title1);
		task.setDescription(description1);
		return taskRepository.save(task);
	}
}
