import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    color: '#fff',
    backgroundColor: 'rgb(0,88,97)',
    boxShadow: 'none',
    borderRadius: 0
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'center',
    padding: 60,
  },
  entrer: {
    textDecoration: 'none'
  },
  logo: {
    fontSize: 25,
    color: '#000',
    margin: 20,
    verticalAlign: 'middle'
  }
})
);

export default function HomePage() {
  const classes = useStyles();
  return (

    <div>
      <Grid container>
        <Grid item xs={6}>
          <img className={classes.image} src='images/portrait.jpg' alt='portrait'></img>
        </Grid>
        <Grid item xs={6} className={classes.display}>
          <h1>Clémence B.</h1>
          <div>
            <a href='https://www.clemenceb.com/' className={classes.entrer}>
              <Button variant="contained" className={classes.button}>ENTRER</Button>
            </a>
            <a href='https://www.instagram.com/_clemence_b/' target='_blank' className={classes.logo} >
              <i class='fa fa-instagram' ></i>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


