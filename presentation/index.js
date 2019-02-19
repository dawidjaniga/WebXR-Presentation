import React from 'react'
import {
  Deck,
  Slide,
  Text,
  Appear,
  Image
} from 'spectacle'
import styled from 'styled-components'

import Avatar from './components/avatar'
import Heading from './components/heading'
import List from './components/list'
import ListItem from './components/listItem'
import Main from './components/main'
import Video from './components/video'
import Prefix from './components/prefix'

import theme from './theme'

const images = {
  meetupLogo: require('../assets/3cityvr-logo.png'),
  avatar: require('../assets/red-shirt-400.jpg'),
  support: require('../assets/support.png'),
  browserDevices: require('../assets/browser-devices.png'),
  developersStatistics: require('../assets/developers-statistics.png'),
  // history: require('../assets/history.png'),
  immersiveSpectrum: require('../assets/immersive-spectrum.png'),
  webvrSchema: require('../assets/webvr-schema.png')
}

// Require CSS
require('normalize.css')

const BackgroundVideo = styled(Video)`
position: fixed;
opacity: 0.5;
width: 100%
`

const Flex = styled.div`
display: flex;
`

const Flex2Columns = styled.div`
flex: 50%;
`

const StyledSource = styled.div`
color: #888;
font-size: .7em;
font-style: italic;
`

const RedText = styled.span`
color: red;
`

function Source ({ children }) {
  return (<StyledSource>Źródło: {children}</StyledSource>)
}

const StyledLink = styled.a`
:link {
  color: inherit;
  text-decoration: underline;
  transition: all .2s
}

:visited {
  color: inherit;
  opacity: .8;
}

:hover {
  opacity: .5;
  cursor: pointer;
  text-decoration: none;
}

:active {
  opacity: .2;
}
`

function Link ({ children, className, href, target = '_blank' }) {
  return <StyledLink className={className} href={href} target={target}>{children || href}</StyledLink>
}

const Button = styled(Link)`
&, :link, :visited, :active {
  background: rgba(255,255,255,.3);
  color: #fff;
  display: inline-block;
  border: 1px solid rgba(255,255,255,.6);
  padding: 1em;
  margin: 0 1em;
  text-decoration: none;
}

&&:hover {
  opacity: 1;
  background: #fff;
  color: #000;
}
`

export default class Presentation extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Main>
          <Deck
            transition={['spin', 'zoom', 'slide', 'fade']}
            transitionDuration={300}
            progress='bar'
            theme={theme()}
            contentWidth={1800}
            contentHeight={1000}
          >
            <Slide transition={['spin', 'zoom', 'slide', 'fade']}>
              <Avatar src={images.meetupLogo} width='300px' />
              <Heading size={1} prefix={false}>
                WebVR
              </Heading>
              <Heading size={4} prefix={false}>
                Wprowadzenie <Prefix>//</Prefix> Status <Prefix>//</Prefix> Przykłady
              </Heading>
              <Avatar src={images.avatar} name='Dawid Janiga' width='200px' />
            </Slide>
            <Slide>
              <Heading size={2}>
              Cele prezentacji
              </Heading>
              <List>
                <ListItem>Rozpowszechnienie Wirtualnej Rzeczywistości</ListItem>
                <ListItem>Inspiracja do tworzenia projektów VR</ListItem>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              Do kogo jest skierowana prezentacja i czego się z niej dowiecie?
              </Heading>
              <List>
                <ListItem>Dla rozpoczynających przygodę z VR</ListItem>
                <ListItem>Dla twórców</ListItem>
                {/* <ListItem>[mapa myśli z całej prezentacji]</ListItem> */}
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
                Czym jest WebVR?
              </Heading>
              <List>
                <Appear>
                  <div>
                    <ListItem>
                    Technologią do tworzenie wirtualnej rzeczywistości w przeglądarkach internetowych
                    </ListItem>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <ListItem>
                    za pomocą JavaScriptu
                    </ListItem>
                  </div>
                </Appear>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
                Historia
              </Heading>
              {/* <Image fit src={images.history} /> */}
              <List>
                <Appear>
                  <div>
                    <ListItem>
                    2014 - <Link href='https://en.wikipedia.org/wiki/Vladimir_Vuki%C4%87evi%C4%87'>Vladimir Vukićević</Link> przedstawia WebVR w Mozilli
                    </ListItem>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <ListItem>
                    2016 - Mozilla VR Team i Google Chrome Team proponują WebVR 1.0
                    </ListItem>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <ListItem>
                    2017 - ustanowienie WebVR 1.1
                    </ListItem>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <ListItem>
                    2018 - wyciągnięcie wniosków z WebVR i zastąpienie go <RedText>WebXR</RedText>
                    </ListItem>
                  </div>
                </Appear>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
                Kwestia nazewnictwa WebXR
              </Heading>
              <Image fit src={images.immersiveSpectrum} />
              <List>
                <Appear>
                  <div>
                    <ListItem>
                    Web<RedText>X</RedText>R = Web(<RedText>V</RedText>R + Web<RedText>A</RedText>R + <RedText>M</RedText>R)
                    </ListItem>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <ListItem>
                    dodaje AR, poprawia wydajność, wprowadza zmiany zaproponowane przez społeczność
                    </ListItem>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <ListItem>
                    i jest eksperymentalne 🔥
                    </ListItem>
                  </div>
                </Appear>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              Intro
              </Heading>
              <Video height='100%' src='vr-for-everyone.mp4' controls autoPlay={false} muted={false} subtitles={[{
                label: 'Polski',
                lang: 'pl',
                isDefault: true,
                file: 'vr-for-everyone-pl.vtt'
              }]} />
            </Slide>
            <Slide>
              <Heading size={2}>
              Cele VR
              </Heading>
              <List>
                <ListItem>Łatwy dostęp dla każdego, z dowolnego urządzenia, bez instalacji</ListItem>
                <ListItem>Wspólna zabawa i tworzenie wirtualnej rzeczywistości</ListItem>
                <ListItem>Dostęp do treści tak łatwy, jak udostępnienie linka na fejsie</ListItem>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              Za co jest odpowiedzialny WebVR?
              </Heading>
              <List>
                <ListItem>Detekcje VR, dostępnych możliwości i ustawień</ListItem>
                <ListItem>Wyświetlanie obrazu w odpowiedniej prędkości (> 60 FPS) - w zależności od urządzenia, im więcej tym lepiej</ListItem>
                <ListItem>Synchronizacje położenia i pozycji</ListItem>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              Schemat działania
              </Heading>
              <Image fit src={images.webvrSchema} width='50%' />
            </Slide>
            {/* <Slide>
              <Heading size={2}>
              Jak tym sterować?
              </Heading>
              Gamepad API
              [video z przykladme z Playstation]
            </Slide> */}
            <Slide transition={['slide']}>
              <Heading size={2}>
              Wsparcie WebVR
              </Heading>
              <Image fit src={images.support} />
              <Source><Link href='https://caniuse.com/#feat=webvr' /></Source>
            </Slide>
            <Slide transition={['slide']}>
              <Heading size={2}>
              Wsparcie WebVR
              </Heading>
              <Image fit src={images.browserDevices} width='50%' />
              <Source><Link href='https://blog.mozvr.com/progressive-webxr-ar-store' /></Source>
            </Slide>
            <Slide transition={['slide']}>
              <Heading size={2}>
              Wsparcie WebVR - dokładny opis
              </Heading>
              <List>
                <ListItem><Link href='https://webvr.info' /></ListItem>
                <ListItem><Link href='https://aframe.io/docs/0.9.0/introduction/vr-headsets-and-webvr-browsers.html' /></ListItem>
              </List>
            </Slide>
            <Slide transition={['slide']}>
              <Heading size={2}>WebVR Polyfill</Heading>
              <List>
                <ListItem>Polyfill - proteza dla przeglądarek bez wbudowanej funkcjonalności</ListItem>
                <ListItem>✅&nbsp;&nbsp;&nbsp;prawie 100% wsparcie przeglądarek</ListItem>
                <ListItem>❌&nbsp;&nbsp;&nbsp;doświadczenie może nie być płynne</ListItem>
                <ListItem>
                  <Link href='https://github.com/immersive-web/webvr-polyfill' />
                </ListItem>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              Dlaczego VR w Webie?
              </Heading>
              <List>
                <ListItem>3.5 mld użytkowników na całym świecie</ListItem>

                <ListItem>JavaScript najpopularniejszym językiem programowania</ListItem>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              StackOverflow 2018 Developer Survey
              </Heading>
              <Image fit src={images.developersStatistics} width='45%' />
              <Source><Link href='https://insights.stackoverflow.com/survey/2018/#most-popular-technologies'>StackOverflow 2018 Developer Survey</Link></Source>
            </Slide>
            <Slide>
              <Heading size={2}>
              Użycie przeglądarek na świecie
              </Heading>
              [wykres pokazujący użycie z ostatniego roku]
            </Slide>
            <Slide>
              <Heading size={2}>
              Ilość kupionych urządzeń do VR
              </Heading>
              [wykres pokazujacy sprzedaż z ostatnich 3 lat]
            </Slide>
            <Slide>
              <Heading size={2}>
              Do czego można użyć WebVR?
              </Heading>
              <List>
                <ListItem>Medycyna</ListItem>
                <ListItem>Edukacja</ListItem>
                <ListItem>Architektura i nieruchomości</ListItem>
                <ListItem>Sztuka</ListItem>
                <ListItem>Marketing</ListItem>
                <ListItem>Turystyka</ListItem>
                <ListItem>Rozrywka</ListItem>
                <ListItem>Projektowanie i inżynieria</ListItem>
              </List>
              <Text>Gdzie koszty błędy lub organizacji szkolenia są wysokie</Text>
            </Slide>
            <Slide>
              <Heading size={2}>
              Przykłady Wideo
              </Heading>
              [video na podstawie slajdu “Do czego można użyć WebVR?]
            </Slide>
            <Slide>
              <Heading size={2}>
              Przyszłość - co dalej?
              </Heading>
              <List>
                <ListItem>WebVR - Aktualne komentarze gigantów, statystyki?</ListItem>
                <ListItem>3CityVR - jeżeli będzie zainteresowanie - prezentacja WebXR, przedstawienie w szczegółach jak zbudowana jest Mapa Wikipedii</ListItem>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              Zainspirowałeś mnie, gdzie zacząć?
              </Heading>
              <Flex>
                <Flex2Columns>
                  <Button href='https://developers.google.com/web/updates/2018/05/welcome-to-immersive'>Chcę stworzyć VR</Button>
                  <List>
                    <ListItem>ASD/</ListItem>
                  </List>
                </Flex2Columns>
                <Flex2Columns>
                  <Button href='https://experiments.withgoogle.com/collection/webvr'>Chcę przetestować VR</Button>
                  <List>
                    <ListItem>ASD/</ListItem>
                  </List>
                </Flex2Columns>
              </Flex>

            </Slide>
            <Slide>
              <Heading size={2}>
              Przykład Wideo WebXR
              </Heading>
              [wideo]
            </Slide>
            <Slide>
              <Heading size={2}>
              Mapa Wikipedii
              </Heading>
              Problem - zobrazowanie połączeń między artykułami, ciekawość
[screenshot wielu otwartych zakładek]
Link do mapy wikipedii (https://dawidjaniga/wikipedia-map)

            </Slide>
            <Slide>
              <Heading size={2}>
              Odpowiedzmy razem
              </Heading>
              <List>
                <ListItem>Wirtualna rzeczywistość dostępna na stronie internetowej, bez instalowania dodatkowych aplikacji i na dowolnym urządzeniu?</ListItem>
                <ListItem>Pieśń przyszłości czy teraźniejszość?</ListItem>
              </List>
            </Slide>
            <Slide>
              <Heading size={2}>
              Pytania?
              </Heading>
            </Slide>
            <Slide>
              <Heading size={2}>
              Dziękuję i proszę o feedback
              </Heading>
              <Button href='https://dawidjaniga/webvr-feedback'>Zostaw Feedback</Button>
Link będzie też w poście na fejsie
              <Button href='https://dawidjaniga/webvr-feedback'>Twitter // @dawidjaniga</Button>
            </Slide>

          </Deck>
        </Main>
        <BackgroundVideo src='background.mp4' loop muted autoPlay />
      </React.Fragment>
    )
  }
}
