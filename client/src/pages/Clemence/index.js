import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core/";
import { Typography, Link } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import intro from "./assets/intro.jpg"
import image from "./assets/image.jpg"

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

const useStyles = makeStyles({
  root: {
    "& .MuiToolbar-root": {
      background: "white",
      color: "black"
    }
  },
  image: {
    margin: "30px 0"
  },
  title: {
    fontFamily: "Dancing Script",
    fontSize: 30,
    flexGrow: 1
  },
})

const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: "18px",
      color: "#313131",
      lineHeight: 1.8,
      marginBottom: "17px"
    },
    h1: {
      fontSize: "24px",
      color: "#313131",
      marginTop: "30px",
      marginBottom: "20px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center"
    },
    h2: {
      fontSize: "26px",
      lineHeight: 1.3,
      color: "#313131",
      marginTop: "30px",
      marginBottom: "20px",
      fontWeight: "bold"
    }
  }

})

export default function Clemence() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography className={classes.title}>Clémence B.</Typography>
          <Typography>QUI SUIS-JE?</Typography>
          <Link href='https://www.instagram.com/_clemence_b/' target='_blank' className={classes.logo} >
            <i class='fa fa-instagram' ></i>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <Typography variant="h1">La newsletter pour prendre son temps.</Typography>
        <img src={intro} alt="image" className={classes.image} />
        <Typography variant="body1">Cette newsletter part avec l’idée de proposer des micro-fictions. Des écrits d’invention dans lesquels, je cache parfois (mais pas tant que ça), des messages sur les sujets qui me tiennent à cœur.</Typography>
        <Typography variant="body1">Un moment de lecture à savourer. Un courrier qui vous invite à vous poser devant votre thé ou votre café. Au coin du feu ou sur la terrasse. Un instant suspendu rien que pour vous.</Typography>
        <Typography variant="h2">A quoi ressemble mon univers ?</Typography>
        <Typography variant="body1"><i>Hétéroclite</i> serait le meilleur mot pour le décrire. Multi passionnée, je ne pourrais résumer tout ce que je fais et aime en une seule phrase.
        Un peu poétique, réaliste, imaginaire, très rêveur. Inspiré par la vie réelle et inspirant. Biscornu. Un peu de tout et de son contraire.
        Bref, un joyeux bazar qui vise à apporter des paillettes dans le quotidien. Un épisode magique qui vous transporte et vous inspire.</Typography>
        <Typography variant="h2">Prêt.e.s pour embarquer dans un voyage un peu saugrenu ?</Typography>
        <Typography variant="body1">Retrouvons-nous une fois par mois pour se régaler de textes pas si sages.</Typography>
        <img src={image} alt="image" />
        <Typography variant="h2">Si tu es motivé.e pour recevoir mon hibou virtuel, c’est par ici</Typography>
        <Typography variant="body1">Surtout, n’hésite pas à répondre ou à me contacter – coucou(at)clemence(point)com – , je prendrais plaisir à te répondre et/ou te citer dans le courrier.</Typography>
        <Typography variant="body1">A très vite !</Typography>
      </Container>
    </ThemeProvider>
  );
}
