package my.todotracker.transport.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TaskDTO {

	private Long id;
	private String title;
	private String description;

	private Float timePlan;
	private Float timeSpend;

	private List<String> tags;
}
