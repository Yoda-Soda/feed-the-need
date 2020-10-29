// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import Dialog from '@material-ui/core/Dialog';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// const options = [
// 'Click this to send a message arranging handover',
// ];

// function ConfirmationDialogRaw(props) {
// const { onClose, value: valueProp, open, ...other } = props;
// const [value, setValue] = React.useState(valueProp);

// const radioGroupRef = React.useRef(null);

// React.useEffect(() => {
//     if (!open) {
//     setValue(valueProp);
//     }
// }, [valueProp, open]);

// const handleEntering = () => {
//     if (radioGroupRef.current != null) {
//     radioGroupRef.current.focus();
//     }
// };

// const handleCancel = () => {
//     onClose();
// };

// const handleOk = () => {
//     onClose(value);
// };

// const handleChange = (event) => {
//     setValue(event.target.value);
// };

// return (
//     <Dialog
//     disableBackdropClick
//     disableEscapeKeyDown
//     maxWidth="xs"
//     onEntering={handleEntering}
//     aria-labelledby="confirmation-dialog-title"
//     open={open}
//     {...other}
//     >
//     <DialogTitle id="confirmation-dialog-title">Claim Listing</DialogTitle>
//     <DialogContent dividers>
//         <RadioGroup
//         ref={radioGroupRef}
//         aria-label="ringtone"
//         name="ringtone"
//         value={value}
//         onChange={handleChange}
//         >
//         {options.map((option) => (
//             <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
//         ))}
//         </RadioGroup>
//     </DialogContent>
//     <DialogActions>
//         <Button autoFocus onClick={handleCancel} color="primary">
//         Last chance to cancel
//         </Button>
//         <Button onClick={handleOk} color="primary">
//         Go ahead okay
//         </Button>
//     </DialogActions>
//     </Dialog>
// );
// }

// ConfirmationDialogRaw.propTypes = {
// onClose: PropTypes.func.isRequired,
// open: PropTypes.bool.isRequired,
// value: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
// root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
// },
// paper: {
//     width: '80%',
//     maxHeight: 435,
// },
// }));

// export default function ConfirmationDialog() {
// const classes = useStyles();
// const [open, setOpen] = React.useState(false);

// const handleClickListItem = () => {
//     setOpen(true);
// };

// const handleClose = (newValue) => {
//     setOpen(false);

//     if (newValue) {
//     setValue(newValue);
//     }
// };

// return (
//     <div className={classes.root}>
//     <List component="div" role="list">
//         <ListItem button divider disabled role="listitem">
//         <ListItemText primary="Yes I am claiming this item" />
//         </ListItem>
//         <ListItem button divider disabled role="listitem">
//         <ListItemText primary="Cancel - I don't want to claim this dumb item." />
//         </ListItem>
//         <ConfirmationDialogRaw
//         classes={{
//             paper: classes.paper,
//         }}
//         id="ringtone-menu"
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         />
//     </List>
//     </div>
// );
// }

// // // export default ClaimListingButton;
// // //THIS wants its function to be called export import ConfirmationDialog as per export above
