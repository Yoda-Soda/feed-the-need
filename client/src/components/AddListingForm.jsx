import React, { useState }from "react";
import { 
    Button,    
    FormGroup,    
    TextField,
} from "@material-ui/core";


const AddListingForm = () => {
    const [listingTitle, setListingTitle] = useState('');
    const [listingDescription, setListingDescription] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const postToApi = async() => {
        setLoading(true)
        try {
            const result = await fetch("http://localhost:5123/api/listings", { method: 'POST', body: JSON.stringify({ listingTitle, listingDescription })})
            if(!result.ok) {
                throw new Error("Could not create Listing")
            }       
        } catch (e) {
            setError(true)
            console.error(e.message);        
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (<div>loading...</div>)
    }
    if(error) {
        return (<div>An error occurred.</div>)
    }
    return (
        <div>           
            <FormGroup>
                <h2>Add A Listing</h2>
                <TextField onChange={(e) => setListingTitle(e.target.value)} label="Listing Title"  margin="normal" variant="outlined" required/>
                <TextField onChange={(e) => setListingDescription(e.target.value)} label="Listing Description"  multiline="true" rows={4} margin="normal" variant="outlined"  required/>
                <Button onClick={postToApi} variant="contained" color="primary" href="#contained-buttons">
                    Create Listing
                </Button>
                {/* <div>{listingTitle}, {ListingDescription}</div> */}
            </FormGroup>
        </div>
    );
}

export default AddListingForm;

// value={listingTitle}
// value={ListingDescription}