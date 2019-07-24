package my.todotracker.mapper;

import my.todotracker.model.Task;
import my.todotracker.transport.dto.TaskDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TaskMapper {

	TaskMapper INSTANCE = Mappers.getMapper(TaskMapper.class);

	TaskDTO taskToTaskDTO(Task task);

	Task taskToTaskDTO(TaskDTO taskDTO);

}
