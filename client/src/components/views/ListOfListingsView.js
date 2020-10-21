import React from "react";
import ListingCard from "../ListCard";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const fetchList = () => {
  return [
    {
      id: 6,
      email: "michaelbotur@developersinstitute.co.nz",
      title: "asdfsadfasdf",
      description: "asdfasdfasdfas",
      date_created: "2020-10-21T02:44:30.612Z",
    },
    {
      id: 5,
      email: "michaelbotur@developersinstitute.co.nz",
      title: "asdfasdf",
      description: "asdfasdfasdf",
      date_created: "2020-10-21T00:32:35.670Z",
    },
    {
      id: 4,
      email: "michaelbotur@developersinstitute.co.nz",
      title: "asdfsdasdf",
      description: "asdfasdfsdf",
      date_created: "2020-10-20T23:58:23.249Z",
    },
    {
      id: 3,
      email: "michaelbotur@developersinstitute.co.nz",
      title: "kjdklsfjlsdaf",
      description: "asdfasdf",
      date_created: "2020-10-20T02:05:30.133Z",
    },
    {
      id: 2,
      email: "michaelbotur@developersinstitute.co.nz",
      title: "string",
      description:
        "I have a bountiful amount of cabbages, that I am willing to donate.",
      date_created: "2020-10-20T00:01:49.541Z",
    },
    {
      id: 1,
      email: "michaelbotur@developersinstitute.co.nz",
      title: "My Item",
      description: "My Item Description",
      date_created: "2020-10-19T23:56:42.425Z",
    },
  ];
};

const listingsArray = fetchList();

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    padding: 20,
  },
}));

const ListOfListingsView = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} justify="center" className={classes.container}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ListingCard {...listingsArray[0]} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ListingCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ListingCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ListingCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ListingCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ListingCard />
      </Grid>
    </Grid>
  );
};

export default ListOfListingsView;
