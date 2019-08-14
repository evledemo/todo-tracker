import React from "react";

// Material helpers
import { withStyles } from "@material-ui/core";

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

class TaskTable extends React.Component {
  state = {
    rowsPerPage: 10,
    page: 0
  };

  render() {
    const { classes, tasks } = this.props;
    const { rowsPerPage, page } = this.state;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Subject</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks
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
                  {task.taskStatus}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {moment(task.created).format("DD/MM/YYYY")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(TaskTable);
