import React from "react";
import { 
    Button, 
    Icon, 
    FormGroup, 
    InputLabel, 
    Input, 
    FormHelperText,
    TextField,
    styled
} from "@material-ui/core";
// import {  } from "@material-ui/core";


const AddListingForm = () => {
    return (
        <fragment>
            <p>This is the Form</p>
            <FormGroup>
            <TextField label="Normal" id="outlined-margin-normal" defaultValue="Default Value" className={classes.textField} helperText="Some important text" margin="normal" variant="outlined" />
            <InputLabel htmlFor="my-input" id="outlined-basic" label="Outlined" margin="normal" variant="outlined">Listing Title</InputLabel>
            <Input required id="my-input" aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            <TextField
                required 
                margin="normal"
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                />
           <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
            </FormGroup>

            


            {/* <TextField label="Dense" id="margin-dense" defaultValue="Default Value" className={classes.textField} helperText="Some important text" margin="dense" /> 
            <TextField label="Normal" id="margin-normal" defaultValue="Default Value" className={classes.textField} helperText="Some important text" margin="normal" /> */}
            
            
           
        </fragment>
    );
}

export default AddListingForm;