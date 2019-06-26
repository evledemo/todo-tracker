import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

import {
  DashboardOutlined as DashboardIcon,
  ViewList as TaskList
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

class Sidebar extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <List component="div" disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/task-list"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <TaskList />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Tasks"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
