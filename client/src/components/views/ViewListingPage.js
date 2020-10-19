import React, { useState, useEffect } from "react";
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import { Container, Button } from "@material-ui/core";

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

    if(loading) {
        return (<div>loading...</div>)
    }
    if(error) {
        return (<div>An error occurred.</div>)
    }

    return (
        <Container maxWidth="sm"> 
            <h1>Title { listingData.title }</h1>   
            <p>Description Description Description { listingData.description }</p>            
                <Button href="/listings" variant="contained" color="primary">
                Back to Listings
                {/* Does this go back to all listings page? */}
                </Button>            
            <p>This is the listing id: {listingId}</p>
        </Container>
    );
}

export default ViewListingPage;