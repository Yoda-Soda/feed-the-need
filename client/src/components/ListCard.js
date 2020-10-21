import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const RecipeReviewCard = (props) => {
  const classes = useStyles();
  const { id, email, title, description, date_created } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {email[0]}
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        //get's date and converts to readable format and local time
        subheader={
          new Date(date_created).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
          " " +
          new Intl.DateTimeFormat("en", {
            timeStyle: "short",
          }).format(Date.parse(date_created))
        }
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1529007328922-d323f83de273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeReviewCard;
