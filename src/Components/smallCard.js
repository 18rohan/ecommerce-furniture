import React from "react";
import "../CSS/SmallCard_CSS.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { FiShoppingCart } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";


// REDUX
import {connect} from 'react-redux';
import {addWishListItem} from '../redux/WishList/wishListActions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
    minWidth: "30%",
    margin: "15px",
  },
  media: {
    height: "55%",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    // marginLeft: 'auto',
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

const SmallCard = (props) => {
  // const { image, price} = item;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          className="product-head"
        >
          <h1>{props.name}</h1>
        </Typography>
      </CardContent>
      <CardActions className="action-buttons">
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <FiShoppingCart />
        </IconButton>
        <div>
          <div className="icon-rupee">
            <FaRupeeSign size={20} color="green" />
            <p className="price"> 50000</p>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};


const mapStateToDispatch = (dispatch) =>({
  addWishListItem: item => dispatch(addWishListItem(item))
})

export default connect(null,mapStateToDispatch)(SmallCard);
