import React from "react";

import { withStyles } from "@material-ui/core";

// Component styles
import styles from "./styles";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@material-ui/core";
import TaskDataService from "../../../../service/TaskDataService";

const states = ["Draft", "Active", "Done"];

const newTask = {
  id: null,
  subject: "",
  description: "",
  taskStatus: "Draft",
  created: Date.now()
};

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.heandleChange = this.heandleChange.bind(this);
    this.heandleDropDownChange = this.heandleDropDownChange.bind(this);

    this.state = { editItem: Object.assign({}, newTask) };
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.editItemId) {
      console.log("componentDidUpdate");
      if (this.props.editItemId == null) {
        this.setState({ ...Object.assign({}, newTask) });
      } else {
        TaskDataService.getTask(this.props.editItemId).then(response => {
          console.log(response.data);
          this.setState({ ...response.data });
        });
      }
    }
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
      taskStatus: this.state.taskStatus,
      created: this.state.created
    };

    TaskDataService.postTask(obj).then(res => {
      this.props.postSaveItemFun();
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={this.props.showTaskEditWindow}
      >
        <DialogTitle id="simple-dialog-title">Edit task</DialogTitle>
        <div className={classes.root}>
          <form autoComplete="off" noValidate onSubmit={this.onSubmit}>
            <DialogContent dividers>
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
              </div>
            </DialogContent>
            <DialogActions>
              <div className={classes.field}>
                <Button color="primary" type="submit" variant="contained">
                  Save
                </Button>
              </div>
            </DialogActions>
          </form>
        </div>
      </Dialog>
    );
  }
}
export default withStyles(styles)(TaskForm);
