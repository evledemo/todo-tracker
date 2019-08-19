package my.todotracker.model;

import lombok.Getter;
import lombok.Setter;
import my.todotracker.enums.TaskStatusEnum;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Document
public class Task {
	@Id
	private String id;
	private String subject;
	private String description;

	private TaskStatusEnum taskStatus;

	@DateTimeFormat(pattern = "dd.MM.yyyy")
//	@Temporal(TemporalType.TIMESTAMP)
	private Date created;

	private List<String> tags;
}
