import React from "react";

// Material helpers
import { withStyles, Fab, IconButton } from "@material-ui/core";

import moment from "moment";

// Material components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

// Component styles
import styles from "./styles";
import { TaskForm } from "..";
import AddIcon from "@material-ui/icons/Add";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskDataService from "../../../../service/TaskDataService";

class TaskTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 10,
      page: 0,
      editItemId: null,
      showTaskEditWindow: false,
      tasks: []
    };

    this.openEditWindow = this.openEditWindow.bind(this);
    this.refreshTasks = this.refreshTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleCloseFn = this.handleCloseFn.bind(this);
    this.getStatusColor = this.getStatusColor.bind(this);
  }

  componentDidMount() {
    this.refreshTasks();
  }

  refreshTasks() {
    TaskDataService.getDashboardTasks().then(response => {
      this.setState({ tasks: response.data });
    });
  }

  deleteTask(id) {
    TaskDataService.deleteTask(id).then(() => {
      this.refreshTasks();
    });
  }

  postSaveItem() {
    this.setState({ showTaskEditWindow: false });
    this.refreshTasks();
  }

  handleCloseFn() {
    this.setState({ showTaskEditWindow: false });
  }

  openEditWindow = itemId => {
    this.setState({ editItemId: itemId, showTaskEditWindow: true });
  };

  getStatusColor = status => {
    if (status === "Draft") return "gray";
    if (status === "Active") return "green";
    if (status === "Done") return "gold";
  };

  render() {
    const { classes } = this.props;
    const { rowsPerPage } = this.state;

    return (
      <div>
        <Fab
          color="primary"
          size="small"
          aria-label="add"
          onClick={() => this.openEditWindow(null)}
        >
          <AddIcon />
        </Fab>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Subject</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Created</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.tasks
              .filter(task => {
                return task;
              })
              .slice(0, rowsPerPage)
              .map(task => (
                <TableRow className={classes.tableRow} hover key={task.id}>
                  <TableCell className={classes.tableCell}>
                    {task.subject}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <FiberManualRecord
                      style={{
                        fontSize: 13,
                        color: this.getStatusColor(task.taskStatus)
                      }}
                    />
                    {task.taskStatus}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {moment(task.created).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      size="small"
                      onClick={() => this.openEditWindow(task.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      size="small"
                      onClick={() => this.deleteTask(task.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TaskForm
          className={classes.item}
          handleCloseFn={() => this.handleCloseFn()}
          editItemId={this.state.editItemId}
          showTaskEditWindow={this.state.showTaskEditWindow}
          postSaveItemFun={() => this.postSaveItem()}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TaskTable);
