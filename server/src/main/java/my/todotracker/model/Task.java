package my.todotracker.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document
public class Task {
	@Id
	private Long id;
	private String title;
	private String description;

	private Float timePlan;
	private Float timeSpend;

	private List<String> tags;
}
