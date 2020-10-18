import React from "react";
import AddListingForm from "../AddListingForm";
import { Container } from "@material-ui/core";

const AddListingPage = () => {
    return (
        <Container maxWidth="sm">           
            <AddListingForm />
        </Container>
    );
}

export default AddListingPage;