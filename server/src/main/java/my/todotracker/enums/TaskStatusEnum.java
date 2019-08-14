package my.todotracker.enums;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum TaskStatusEnum {
	Draft, Active, Done;

//	@JsonCreator
//	public static TaskStatusEnum fromText(String text){
//		return Draft;
//	}
}
