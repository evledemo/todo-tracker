import React from "react";
import DashboardLayout from "../../layout/Dashboard/DashboardLayout";

// Material components
import { Grid } from "@material-ui/core";

import { TaskForm, TaskTable } from "./components";

// Material helpers
import { withStyles } from "@material-ui/core";
import TaskDataService from "../../service/TaskDataService";

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: "100%"
  }
});

class TaskDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      limit: 10,
      selectedUsers: [],
      error: null
    };
  }

  render() {
    const { classes } = this.props;
    const { tasks } = this.state;

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <TaskTable className={classes.item} />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

export default withStyles(styles)(TaskDashBoard);
