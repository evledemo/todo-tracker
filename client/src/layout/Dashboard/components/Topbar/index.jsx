import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Material components
import { IconButton, Toolbar, Typography } from "@material-ui/core";

// Material helpers
import { withStyles } from "@material-ui/core";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";
import compose from "recompose/compose";

// Material icons
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";

// Component styles
import styles from "./styles";

class Topbar extends Component {
  render() {
    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar
    } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              onClick={onToggleSidebar}
              variant="text"
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
          </Toolbar>
        </div>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
