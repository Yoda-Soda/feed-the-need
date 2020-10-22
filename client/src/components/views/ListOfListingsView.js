import React, { useState, useEffect } from "react";
import ListingCard from "../ListCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    padding: 20,
  },
}));

const ListOfListingsView = () => {
  const [listingsData, setListingsData] = useState([{}]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const { getAccessTokenSilently } = useAuth0();
  const getListingsData = async () => {
    try {
      const myToken = await getAccessTokenSilently();
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/listings`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myToken}`,
          },
        }
      );
      const data = await response.json();
      setListingsData(data);
    } catch (error) {
      console.error(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListingsData();
  }, []);

  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>...error</div>;
  }
  return (
    <>
      <Grid
        container
        spacing={4}
        justify="center"
        className={classes.container}
      >
        {listingsData.map((list) => {
          return (
            <Grid item sm={12} md={6} lg={4}>
              <ListingCard {...list}></ListingCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ListOfListingsView;
