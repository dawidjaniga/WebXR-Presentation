// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        progress="bar"
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            VR w Webie
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Wprowadzenie, status, przykłady
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" notes="na chłopski rozum">
          <Heading size={2} textColor="secondary">
            Czym jest WebVR?
          </Heading>
          <Text textColor="primary">Biblioteką do tworzenie wirtualnej rzeczywiście w przeglądarce.</Text>
          <Text textColor="primary">Działa na HTC Vive, Oculus Rift i przeglądrakch mobilnych (Android, iOS)</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <List>
            <ListItem>A</ListItem>
            <ListItem>B</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
