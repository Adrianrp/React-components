import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const SigninFailDialog = (props) => (
  <div>
    <Dialog
      open={props.isOpen}
      onRequestClose={this.handleRequestClose}
    >
      <DialogTitle>{"Incorrect Email/Password"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The Email/Password that you have entered is incorrect.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Close
        </Button>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          Try Again
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
export default SigninFailDialog;
