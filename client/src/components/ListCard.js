import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import {
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardContent,
  Tooltip,
  ButtonBase,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 380,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
  cardwidth: {
    width: 400,
  },
  description: {
    // margin: 5,
    padding: 0,
    // width: 200,
    overflowWrap: "break-word",
  },
}));

const RecipeReviewCard = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { id, email, title, description, dateCreated } = props;
  return (
    // Makes card clickable
    <ButtonBase
      onClick={(event) => {
        // ensures that card navigates to correct view
        history.push(`/listings/${id}`);
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          className={classes.cardwidth}
          avatar={
            <Tooltip title={email} placement="top-start">
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                aria-label="add"
              >
                {email[0].toUpperCase()}
              </Avatar>
            </Tooltip>
          }
          title={title}
          //gets date and converts to readable format and local time
          subheader={
            new Date(dateCreated).toLocaleDateString("en-gb", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) +
            " " +
            new Intl.DateTimeFormat("en", {
              timeStyle: "short",
            }).format(Date.parse(dateCreated))
          }
        />
        <CardMedia
          className={classes.media}
          image="placeholder.svg"
          title={title}
        />
        <CardContent>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default RecipeReviewCard;
