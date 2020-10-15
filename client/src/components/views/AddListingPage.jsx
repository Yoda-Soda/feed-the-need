import React from "react";
import AddListingForm from "../AddListingForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const AddListingPage = () => {
    return (
        <div>
            <p>This is the Page</p>
            <p>below should be the form</p>
            <AddListingForm />
        </div>
    );
}

export default AddListingPage;