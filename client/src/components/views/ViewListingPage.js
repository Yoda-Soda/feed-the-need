import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"
import { Container, Button, Grid, Box, Typography, CircularProgress ,Dialog} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';




const ViewListingPage = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [listingData, setListingData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const { listingId } = useParams();
    const history = useHistory();
    const claimListing = async () => {
        setLoading(true)
        try {
            const myToken = await getAccessTokenSilently();            
            const result = await fetch(`${process.env.REACT_APP_API_URL}/listings/${listingId}`,            
            { method:'PATCH' ,headers: {"Content-Type": "application/json", 'Authorization' : `Bearer ${myToken}` }})
            if (!result.ok) {
               throw new Error("Could not claim Listing");
            } 
            setShowDialog(true);
        } catch (e) {
            setError(true)
            console.error(e.message);
        } finally {
            setLoading(false)
        }
    }
    const getListingData = async () => {
        setLoading(true)
        try {
            const myToken = await getAccessTokenSilently();            
            const result = await fetch(`${process.env.REACT_APP_API_URL}/listings/${listingId}`,            
            { headers: {"Content-Type": "application/json", 'Authorization' : `Bearer ${myToken}` }})
            if (!result.ok) {
               throw new Error("Could not retrieve Listing");
            }
            const resultJson = await result.json();
            
            console.log(resultJson);  
            setListingData(resultJson); 
            console.log(listingData); 

        } catch (e) {
            setError(true)
            console.error(e.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getListingData();
      }, []);

    
    // styles
    const h1 = {
        fontSize: '48px'
    };

    if(showDialog) {
        return <div>you claimed it </div>
    }
   
    if(loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                <CircularProgress />
            </Box>       
        )
    }
    if(error) {
        return (<div>An error occurred.</div>)
    }

    return (
        // <Container maxWidth="lg"> 
        <Container>
         <Grid container spacing={3} >
            <Grid item xs={12} md={6}>    
            
            <Typography component="div">
            <Box fontSize="h1.fontSize" style={h1} >
                { listingData.title }
            </Box>
            <Box fontSize="fontSize" m={1}>            
            { listingData.description }
            </Box>  
            </Typography>            
                <Button m={1} onClick={()=> history.push('/listings')} variant="contained" color="secondary" startIcon={<ArrowBackIcon />}>
                Back to Listings                   
                </Button>
                <Button m={1} onClick={()=> claimListing()} variant="contained" color="primary" startIcon={<ArrowForwardIcon />}>
                Claim listing.                  
                </Button>
            </Grid>
         </Grid>         
        </Container>
    );
}

export default ViewListingPage;

// ClaimListingButton
// //SO MIKE WHAT'S HAPPENING HERE IS YOU'RE TRYING TO CALL THROUGH THE CLAIM LISTING FUNCTION THAT GOES WITH THIS BUTTON; 
// YOU HAVE A SEPARATE SCRIPT FOR YOUR CLAIM LISTING BUTTON
// That separate script is where your eventhandler or useState should be scripted. 
//Not here. (nice to see function colour for ClaimListingButton)