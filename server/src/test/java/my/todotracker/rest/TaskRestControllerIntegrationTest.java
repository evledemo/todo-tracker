package my.todotracker.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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

import static org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

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

	private ObjectMapper objectMapper = new ObjectMapper();

	@Test
	public void getAllTasks() throws Exception {
		String stringTask = getTask("subject1", "description1");

		mvc.perform(post("/task-rest/post-task")
				.content(stringTask)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON));

		mvc.perform(get("/task-rest/get-all-tasks")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$[0].subject", is("subject1")));
	}

	private String getTask(String title1, String description1) throws JsonProcessingException {
		Task task = new Task();
		task.setSubject(title1);
		task.setSubject(title1);
		task.setDescription(description1);

		return objectMapper.writeValueAsString(task);

	}
}
