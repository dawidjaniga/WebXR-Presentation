import React, { useState } from 'react'
import { Deck, Slide as SlideBase, Text, Appear, Image } from 'spectacle'
import styled from 'styled-components'
import Magnifier from 'react-magnifier'

import Avatar from './components/avatar'
import Heading from './components/heading'
import List from './components/list'
import ListItem from './components/listItem'
import Main from './components/main'
import Video from './components/video'
import Prefix from './components/prefix'

import theme from './theme'

const images = {
  eventLogo: require('../assets/event-logo.png'),
  avatar: require('../assets/dj-avatar.jpg'),
  sensorama: require('../assets/sensorama.jpg'),
  oculus: require('../assets/oculus.jpg'),
  support: require('../assets/support-october-2019.png'),
  browserDevices: require('../assets/browser-devices.png'),
  developersStatistics: require('../assets/developers-statistics.png'),
  immersiveSpectrum: require('../assets/immersive-spectrum.png'),
  mozillaStoreXR: require('../assets/mozilla-store-xr-2.gif'),
  openXRbefore: require('../assets/20108-openxr-market-before.jpg'),
  openXRafter: require('../assets/20108-openxr-market-after.jpg'),
  openXRcompanies: require('../assets/2016-vr-graphic-1_6.jpg'),
  webvrSchema: require('../assets/webvr-schema.png'),
  webxrExplain: require('../assets/webxr-explain.png')
}

const videos = {
  easyCollaboration: 'large/easy-collaboration.mp4'
}

// Require CSS
require('normalize.css')

const InlineImage = styled(Image)`
  && {
    display: inline-block;
    height: 1em;
    margin: 0;
    vertical-align: middle;
  }
`

const Flex = styled.div`
  display: flex;
`

const Flex2Columns = styled.div`
  flex: 50%;
`

const StyledSource = styled.div`
  color: #888;
  font-size: 0.7em;
  font-style: italic;
`

const Slide = styled(SlideBase)`
  overflow-x: scroll;
`

const RedText = styled.span`
  color: red;
`

function Source ({ children }) {
  return <StyledSource>Źródło: {children}</StyledSource>
}

const StyledLink = styled.a`
  :link {
    color: inherit;
    text-decoration: underline;
  }

  :visited {
    color: inherit;
    opacity: 0.8;
  }

  :hover {
    opacity: 0.5;
    cursor: pointer;
    text-decoration: none;
  }

  :active {
    opacity: 0.2;
  }
`

function Link ({ children, className, href, target = '_blank' }) {
  return (
    <StyledLink className={className} href={href} target={target}>
      {children || href}
    </StyledLink>
  )
}

const Button = styled(Link)`
  &,
  :link,
  :visited,
  :active {
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.6);
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

const BackgroundVideo = styled(Video)`
  position: fixed;
  opacity: 1;
  mix-blend-mode: multiply;
  object-fit: fill;
  width: 100%;
  height: 100%;
`

export default function Presentation () {
  return (
    <React.Fragment>
      <Main>
        <Deck
          transition={['zoom', 'slide', 'fade']}
          transitionDuration={300}
          progress='bar'
          theme={theme()}
          contentWidth={1000}
          contentHeight={700}
        >
          <Slide transition={['spin', 'zoom', 'slide', 'fade']}>
            {/* <Image src={images.eventLogo} width='40%' /> */}
            <Heading size={1} prefix={false}>
              WebXR
            </Heading>
            <Heading size={4} prefix={false}>
              Wprowadzenie <Prefix>//</Prefix> Status <Prefix>//</Prefix>{' '}
              Przykłady
            </Heading>
            <Avatar src={images.avatar} name='Dawid Janiga' width='15%' />
          </Slide>
          <Slide>
            <Heading size={2}>Cele prezentacji</Heading>
            <List>
              <ListItem>Zapoznanie z technologią WebXR</ListItem>
              <ListItem>Rozpowszechnienie Wirtualnej Rzeczywistości</ListItem>
              <ListItem>Inspiracja do eksperymentów</ListItem>
            </List>
          </Slide>
          {/* <Slide>
            <Heading size={2}>Intro</Heading>
            <Video
              width='100%'
              src='http://127.0.0.1:3010/vr-for-everyone.mp4'
              controls
              autoPlay={false}
              muted={false}
              subtitles={[
                {
                  label: 'Polski',
                  lang: 'pl',
                  isDefault: true,
                  file: 'http://127.0.0.1:3010/vr-for-everyone-pl.vtt'
                }
              ]}
            />
          </Slide> */}
          <Slide transition={['slide', 'fade']}>
            <Heading size={2}>Czym jest WebVR?</Heading>
            <List>
              <Appear>
                <div>
                  <ListItem>
                    Technologią do tworzenia wirtualnej rzeczywistości w
                    przeglądarkach internetowych
                  </ListItem>
                </div>
              </Appear>
              <Appear>
                <div>
                  <ListItem>za pomocą JavaScriptu</ListItem>
                </div>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>Historia Wirtualnej Rzeczywistości</Heading>
          </Slide>
          <Slide>
            <Heading size={2}>Sensorama</Heading>
            <Appear>
              <div>
                <i>1962</i>

                <Image src={images.sensorama} />
                <Source>https://en.wikipedia.org/wiki/Sensorama</Source>
              </div>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={2}>Oculus Rift</Heading>
            <Appear>
              <div>
                <i>2016</i> Consumer Version 1
                <Image src={images.oculus} />
                <Source>https://en.wikipedia.org/wiki/Oculus_Rift</Source>
              </div>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={2}>Historia WebVR</Heading>
            <List>
              <Appear>
                <div>
                  <ListItem>
                    2014 -{' '}
                    <Link href='https://en.wikipedia.org/wiki/Vladimir_Vuki%C4%87evi%C4%87'>
                      Vladimir Vukićević
                    </Link>{' '}
                    przedstawia WebVR w Mozilli
                  </ListItem>
                </div>
              </Appear>
              <Appear>
                <div>
                  <ListItem>
                    2016 - Mozilla VR Team i Google Chrome Team proponują WebVR
                    1.0
                  </ListItem>
                </div>
              </Appear>
              <Appear>
                <div>
                  <ListItem>2017 - ustanowienie WebVR 1.1</ListItem>
                </div>
              </Appear>
              <Appear>
                <div>
                  <ListItem>
                    2018 - wyciągnięcie wniosków z WebVR i zastąpienie go{' '}
                    <RedText>WebXR</RedText>
                  </ListItem>
                </div>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={2}>Dotychczas</Heading>
            <Image fit src={images.immersiveSpectrum} />
          </Slide>
          <Slide>
            <Heading size={2}>Geneza</Heading>
            <Image fit src={images.webxrExplain} />
          </Slide>

          <Slide>
            <Heading size={2}>Cele VR</Heading>
            <List>
              <ListItem>
                Łatwy dostęp dla każdego, z dowolnego urządzenia, bez instalacji
              </ListItem>
              <ListItem>
                Wspólna zabawa i tworzenie wirtualnej rzeczywistości
              </ListItem>
              <ListItem>
                Dostęp do treści tak łatwy, jak udostępnienie linka na fejsie
              </ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2}>Za co jest odpowiedzialny WebVR?</Heading>
            <List>
              <ListItem>Detekcje VR, dostępnych możliwości i ustawień</ListItem>
              <ListItem>
                Wyświetlanie obrazu w odpowiedniej prędkości (> 60 FPS) - w
                zależności od urządzenia, im więcej tym lepiej
              </ListItem>
              <ListItem>Synchronizacje położenia i pozycji</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>Zasada działania</Heading>
            <Magnifier
              src={images.webvrSchema}
              zoomFactor={0.5}
              width='50%'
              mgWidth={400}
              mgHeight={400}
            />
          </Slide>
          <Slide>
            <Heading size={2}>Wsparcie WebVR</Heading>
            <Magnifier
              src={images.support}
              zoomFactor={0.7}
              mgWidth={400}
              mgHeight={400}
            />
            <Source>
              <Link href='https://caniuse.com/#feat=webvr' />
            </Source>
          </Slide>
          <Slide>
            <Heading size={2}>DoF</Heading>
            <Text>Degree of Freedom</Text>
            <Source>
              <Link href='https://blog.mozvr.com/progressive-webxr-ar-store' />
            </Source>
          </Slide>
          <Slide>
            <Heading size={2}>Wsparcie WebVR</Heading>
            <Magnifier
              src={images.browserDevices}
              zoomFactor={0.5}
              width='50%'
              mgWidth={400}
              mgHeight={400}
            />
            <Source>
              <Link href='https://blog.mozvr.com/progressive-webxr-ar-store' />
            </Source>
          </Slide>
          <Slide>
            <Heading size={2}>Wsparcie WebVR - dokładny opis</Heading>
            <List>
              <ListItem>
                <Link href='https://webvr.info' />
              </ListItem>
              <ListItem>
                <Link href='https://aframe.io/docs/0.9.0/introduction/vr-headsets-and-webvr-browsers.html' />
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <List>
              <Heading size={2}>WebVR Polyfill</Heading>
              <List>
                <ListItem>
                  Polyfill - proteza dla przeglądarek bez wbudowanej
                  funkcjonalności
                </ListItem>
                <ListItem>✅&nbsp;&nbsp;&nbsp;prawie 100% wsparcie</ListItem>
                <ListItem>
                  ❌&nbsp;&nbsp;&nbsp;doświadczenie może nie być płynne
                </ListItem>
                <ListItem>
                  <Link href='https://github.com/immersive-web/webvr-polyfill' />
                </ListItem>
              </List>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>Dlaczego VR w Webie?</Heading>
            <List>
              <ListItem>
                Internet 3.5 mld użytkowników na całym świecie
              </ListItem>
              <ListItem>Szybki rozówj technologii internetowych</ListItem>
              <ListItem>
                Gamepad API, Bluetooth, USB, RealTime Communication etc.
              </ListItem>
            </List>
            <Button href='https://whatwebcando.today/'>
              Więcej informacji
            </Button>
          </Slide>
          <Slide id='disadvantages'>
            <Heading size={2}>Wady ❌</Heading>
            <Appear>
              <div>
                <List>
                  <ListItem>
                    <Link href='https://immersive-web.github.io/webxr/'>
                      Eksperymentalne stadium rozwoju
                    </Link>
                  </ListItem>
                  <ListItem>Wydajność</ListItem>
                </List>
                <Button href='http://www.instavr.co/articles/general/why-native-vr-app-experiences-are-still-bertter-than-web-vr'>
                  Przeczytaj więcej
                </Button>
              </div>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={2}>Przyszłość - co dalej?</Heading>
            <List>
              <ListItem>Progressive WebXR</ListItem>
              <ListItem>
                <Link href='https://www.khronos.org/openxr' />
              </ListItem>
              <ListItem>SparkCamp - jeżeli będzie zainteresowanie</ListItem>
              <ListItem>
                przedstawienie repozytorium kodu jak struktury miasta -{' '}
                <strong>CodeCity</strong>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>Progressive WebXR</Heading>
            <Magnifier
              src={images.mozillaStoreXR}
              zoomFactor={0.5}
              width='60%'
              mgWidth={400}
              mgHeight={400}
            />
            <br />
            <Button href='https://blog.mozvr.com/progressive-webxr-ar-store/'>
              Przeczytaj więcej
            </Button>
          </Slide>
          <Slide>
            <Heading size={2}>OpenXR - before</Heading>
            <Magnifier
              src={images.openXRbefore}
              zoomFactor={0.5}
              width='50%'
              mgWidth={400}
              mgHeight={400}
            />
            <Source>
              <Link href='https://www.khronos.org/openxr' />
            </Source>
          </Slide>
          <Slide>
            <Heading size={2}>OpenXR - after</Heading>
            <Magnifier
              src={images.openXRafter}
              zoomFactor={0.5}
              width='50%'
              mgWidth={400}
              mgHeight={400}
            />
            <Source>
              <Link href='https://www.khronos.org/openxr' />
            </Source>
          </Slide>
          <Slide>
            <Heading size={2}>OpenXR - zaangażowane firmy</Heading>
            <Magnifier
              src={images.openXRcompanies}
              zoomFactor={0.5}
              width='50%'
              mgWidth={400}
              mgHeight={400}
            />
            <Source>
              <Link href='https://www.khronos.org/openxr' />
            </Source>
            <br />
            <Button href='https://www.khronos.org/openxr'>
              Przeczytaj więcej
            </Button>
          </Slide>
          <Slide id='where-to-start'>
            <Heading size={2}>Zainspirowałeś mnie, gdzie zacząć?</Heading>
            <Flex>
              <Flex2Columns>
                <Button href='https://experiments.withgoogle.com/collection/webvr'>
                  Chcę przetestować VR
                </Button>
                <List>
                  <ListItem>
                    <Link href='https://webvr.info' />
                  </ListItem>
                  <ListItem>
                    <Link href='https://aframe.io/showcase/' />
                  </ListItem>
                  <ListItem>
                    <Link href='https://webvr.directory/' />
                  </ListItem>
                  <ListItem>
                    <Link href='https://mathworldvr.com' />
                    <sup>HTC Vive</sup>
                  </ListItem>
                </List>
              </Flex2Columns>
              <Flex2Columns>
                <Button href='https://developers.google.com/web/updates/2018/05/welcome-to-immersive'>
                  Chcę stworzyć VR
                </Button>
                <List>
                  <ListItem>
                    <Link href='https://aframe.io'>A-Frame</Link>
                  </ListItem>
                  <ListItem>
                    <Link href='https://webvr.info' />
                  </ListItem>
                  <ListItem>
                    <Link href='https://webvr.rocks/' />
                  </ListItem>
                  <ListItem>
                    <Link href='https://www.youtube.com/watch?v=8BHOztuaj-4'>
                      WebVR Create Portable VR Experiences on the Web
                    </Link>
                  </ListItem>
                </List>
              </Flex2Columns>
            </Flex>
          </Slide>
          <Slide>
            <Heading size={2}>Odpowiedzmy razem</Heading>
            <List>
              <ListItem>
                Wirtualna rzeczywistość dostępna na stronie internetowej, bez
                instalowania dodatkowych aplikacji i na dowolnym urządzeniu?
              </ListItem>
              <ListItem>Pieśń przyszłości czy teraźniejszość?</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>Pytania?</Heading>
          </Slide>
          <Slide id='thank-you'>
            <Heading size={2}>Dziękuję i proszę o feedback</Heading>
            <Button href='https://docs.google.com/forms/d/e/1FAIpQLSdKTevQoGTGQCwSdcgMRphjtpDAqWPLArNtBh9iySjN-3ij4Q/viewform'>
              Zostaw Feedback
            </Button>
            <Button href='https://twitter.com/dawidjaniga' />
            <Text margin='40px'>
              Link do prezentacji jest dostępny na stronie wydarzenia
            </Text>
          </Slide>
        </Deck>
      </Main>

      <BackgroundVideo
        src='http://127.0.0.1:3010/background.mp4'
        loop
        muted
        autoPlay
      />
    </React.Fragment>
  )
}
