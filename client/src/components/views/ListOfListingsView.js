import React from "react";
import ListingCard from "../ListCard";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ListOfListingsView = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} justify="center">
      <Grid item ms={12} lg={6} xl={4}>
        <ListingCard />
      </Grid>
      <Grid item ms={12} lg={6} xl={4}>
        <ListingCard />
      </Grid>
      <Grid item ms={12} lg={6} xl={4}>
        <ListingCard />
      </Grid>
      <Grid item ms={12} lg={6} xl={4}>
        <ListingCard />
      </Grid>
      <Grid item ms={12} lg={6} xl={4}>
        <ListingCard />
      </Grid>
      <Grid item ms={12} lg={6} xl={4}>
        <ListingCard />
      </Grid>
    </Grid>
  );
};

export default ListOfListingsView;
