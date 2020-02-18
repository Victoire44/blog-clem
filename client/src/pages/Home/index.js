import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Link, Typography } from "@material-ui/core/";
import portrait from "./assets/portrait.JPG"

const useStyles = makeStyles(theme => ({
  image: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
  title: {
    fontFamily: "Dancing Script",
    fontSize: 50,
  },
  button: {
    color: "#fff",
    backgroundColor: "rgb(0,88,97)",
    boxShadow: 'none',
    borderRadius: 0
  },
  container: {
    height: "100vh",
    display: "flex",
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center"
  },
  entrer: {
    "&:hover": {
      textDecoration: "none",
    }
  },
  logo: {
    fontSize: 25,
    color: "#000",
    margin: 20,
    verticalAlign: "middle"
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (

    <div>
      <Grid container>
        <Grid item sm={6}>
          <img className={classes.image} src={portrait} alt='portrait'></img>
        </Grid>
        <Grid item sm={6} className={classes.container} >
          <div className={classes.content}>
            <Typography variant="h1" className={classes.title}>Clémence B.</Typography>
            <Typography variant="h6">La newsletter pour prendre son temps.</Typography>
            <Link href="/clemence" isActive={() => window.location.pathname === '/clemence'} className={classes.entrer}>
              <Button variant="contained" className={classes.button}>ENTRER</Button>
            </Link>
            <Link href='https://www.instagram.com/_clemence_b/' target='_blank' className={classes.logo} >
              <i class='fa fa-instagram' ></i>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


