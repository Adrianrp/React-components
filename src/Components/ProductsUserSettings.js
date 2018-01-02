import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const ProductsUserSettings = (props) => (
  <div>
    <Dialog
      open={props.isOpen}>
      <DialogTitle>
          User Settings
      </DialogTitle>
      <DialogContent>
          <span className="subtitle">User controls</span>
        <Typography type="subheading">
          Content filtering
        </Typography>
        <Typography gutterBottom>
          {`
          Set the content filtering level to restrict apps that can be downloaded.
          `}
        </Typography>
        <Typography type="subheading">
          Password
        </Typography>
        <Typography gutterBottom>
          {`
          Require password for purchase or use password to restrict purchase.
          `}
        </Typography>

      </DialogContent>
      <Divider/>
      <DialogContent>
        <p className="subtitle">General</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={props.shouldNotify}
                onChange={props.handleSwitch}
                aria-label="Notifications"/>
            }
          label="Notify me about updates to apps or games that I downloaded"/>
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary" >
          Disagree
        </Button>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  </div>

);
export default ProductsUserSettings;