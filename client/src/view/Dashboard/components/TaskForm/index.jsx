import React from "react";

import { withStyles } from "@material-ui/core";

// Component styles
import styles from "./styles";

import { Button, TextField } from "@material-ui/core";
import TaskDataService from "../../../../service/TaskDataService";

const states = ["Draft", "Active", "Done"];

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.heandleChange = this.heandleChange.bind(this);
    this.heandleDropDownChange = this.heandleDropDownChange.bind(this);

    this.state = {
      id: null,
      subject: "ssss",
      description: "dddd",
      taskStatus: "Draft"
    };
  }

  heandleDropDownChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  heandleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    let obj = {
      id: this.state.id,
      subject: this.state.subject,
      description: this.state.description,
      taskStatus: this.state.taskStatus
    };

    TaskDataService.postTask(obj).then(res => this.props.refreshCoursesFun());
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form autoComplete="off" noValidate onSubmit={this.onSubmit}>
          <div className={classes.field}>
            <TextField
              name="subject"
              label="Subject"
              margin="dense"
              fullWidth
              required
              onChange={this.heandleChange}
              value={this.state.subject}
              variant="outlined"
            />
          </div>
          <div className={classes.field}>
            <TextField
              name="description"
              label="Description"
              margin="dense"
              fullWidth
              required
              multiline
              onChange={this.heandleChange}
              value={this.state.description}
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              label="Status"
              margin="dense"
              onChange={this.heandleDropDownChange("taskStatus")}
              required
              fullWidth
              select
              disabled={this.state.id == null ? true : false}
              SelectProps={{ native: true }}
              value={this.state.taskStatus}
              variant="outlined"
            >
              {states.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </div>
          <div className={classes.field}>
            <Button color="primary" type="submit" variant="contained">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(TaskForm);
