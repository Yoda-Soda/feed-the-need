import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Tooltip } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const history = useHistory();
  const classes = useStyles();
  const { id, email, title, description, date_created } = props;
  return (
    // Makes card clickable
    <ButtonBase
      onClick={(event) => {
        // ensures that card navigates to correct view
        history.push(`/listing/${id}`);
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Tooltip title={email} placement="top-start">
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                aria-label="add"
              >
                {email[0]}
              </Avatar>
            </Tooltip>
          }
          title={title}
          //gets date and converts to readable format and local time
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
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        {/* </ButtonBase> */}
      </Card>
    </ButtonBase>
  );
};

export default RecipeReviewCard;
