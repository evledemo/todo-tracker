package my.todotracker.transport.dto;

import lombok.Getter;
import lombok.Setter;
import my.todotracker.enums.TaskStatusEnum;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class TaskDTO {

	private BigInteger id;
	private String subject;
	private String description;

	private Date created;

	private TaskStatusEnum taskStatus;

	private List<String> tags;
}
