import React, { useState }from "react";
import { 
    Button,    
    FormGroup,    
    TextField,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"

const AddListingForm = () => {    
    const { getAccessTokenSilently } = useAuth0();
    const [listingTitle, setListingTitle] = useState('');
    const [listingDescription, setListingDescription] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const postToApi = async() => {
        setLoading(true)
        try {
            const myToken = await getAccessTokenSilently();
            console.log(myToken);
            const result = await fetch("http://localhost:5123/api/listings", 
            { method: 'POST',
              headers: { "Content-Type": "application/json", 'Authorization' : `Bearer ${myToken}` }, 
              body: JSON.stringify({ donor_id:1, title: listingTitle, description: listingDescription })
            })

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
                <TextField onChange={(e) => setListingTitle(e.target.value)} label="Listing Title" value={listingTitle} margin="normal" variant="outlined" required/>
                <TextField onChange={(e) => setListingDescription(e.target.value)} label="Listing Description" value={listingDescription} multiline rows={4} margin="normal" variant="outlined"  required/>
                <Button onClick={postToApi} variant="contained" color="primary" href="/my-listings/add">
                    Create Listing
                </Button>
            </FormGroup>
        </div>
    );
}

export default AddListingForm;
