import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"
import { Container, Button, Grid, Box, Typography, CircularProgress } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const ViewListingPage = () => {
    const { getAccessTokenSilently } = useAuth0();

    const [listingData, setListingData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { listingId } = useParams();

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
                <Button m={1} href="/listings" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
                Back to Listings                   
                </Button>
            </Grid>
         </Grid>         
        </Container>
    );
}

export default ViewListingPage;