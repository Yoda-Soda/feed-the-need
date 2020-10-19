import React, { useState, useEffect } from "react";
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

import { Container, Button, Grid, Box, Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const ViewListingPage = () => {

    // TODO remove dummy data from default state
    const [listingData, setListingData] = useState({title: "test-title", description: "test-description", listingId: 1 });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getListingData = async () => {
        try {
            // TODO - use the environ variable instead of hardcoded url
            // const result = await fetch(`http://localhost:5123/api/listings/${listingId},`
            // { headers: "Content-Type": "application/json" })
            //TODO - remove dummy data, replace with fetch call as above.
            const result = JSON.stringify({title: "test-title", description: "test-description", listingId: 1 });
            const resultJson = await result.json();
            console.log(resultJson);  
            setListingData(resultJson);      
        } catch (e) {
            console.error(e.message);
        } finally {
            
        }
    }
    useEffect(() => {
        getListingData();
      }, []);

    const { listingId } = useParams();
    
    // styles
    const h1 = {
        fontSize: '48px'
    };
   



    if(loading) {
        return (<div>loading...</div>)
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
                Title { listingData.title }
            </Box>
            <Box fontSize="fontSize" m={1}>
            Description Description Description Description Description Description Description Description Description Description Description Description{ listingData.description }
            </Box>  
            </Typography>            
                <Button m={1} href="/listings" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
                Back to Listings                   
                </Button>            
                <p>This is the listing id: {listingId}</p>
            </Grid>
         </Grid>         
        </Container>
    );
}

export default ViewListingPage;