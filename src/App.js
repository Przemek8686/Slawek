import React from "react";
import GlobalStyle from "./GlobalStyle";
import styled, { keyframes } from "styled-components";
import backgroundVideo from './public/Image/Tlo.mp4';
import companyLogo from './public/Image/Logo.png';






// Animacja przesunięcia z lewej strony
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;  /* Prevent scrolling */
`;

const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 6px); /* Dopasowanie wysokości uwzględniające stopkę */
  object-fit: cover;
  z-index: -1;
  `;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2em;
  color: #0078d4;
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  width: 100%;
  height:auto;
  padding: 5px;
  position: absolute;
  top: 0;
  flex-wrap: nowrap;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);  // Cień na dole

  @media (max-width: 768px) {
    font-size: 1.5em;
    padding: 10px;
    justify-content: center;  // Dodaj to, aby lepiej wyśrodkować elementy
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
    padding: 5px;
    justify-content: center;  // Dodaj to, aby lepiej wyśrodkować elementy
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  margin-right: 10px;


 

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

const CompanyName = styled.span`
  color: white;
  margin-left: 500px;  // Zmniejsz margines, aby element był bliżej środka
  flex-shrink: 0;
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;  // Dodanie czcionki Poppins
  font-weight: 600;  // Grubsza czcionka
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);  // Dodanie efektu cienia

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const CompanyText = styled.span`
  color: white;
  font-size: 0.9em;
  font-family: Brush Script MT, Brush Script Std, cursive;
  margin-left: auto;
 
  text-align: right;
  flex-grow: 1;
  overflow-wrap: break-word;
  word-break: break-word;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  // Dodanie cienia do tekstu

  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
    margin-left: 16px;
  }
`;


const Section = styled.div`
  background-color: #ffffff; /* Domyślne solidne białe tło */
  background: rgba(255, 255, 255, 0.4); /* Przezroczyste białe tło */
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  margin-top: 105px;
  margin-bottom: 20px;
  animation: ${slideInFromLeft} 1.5s ease-out;
  animation-fill-mode: forwards;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  

  /* Fallback for unsupported rgba */
  @supports not (background: rgba(255, 255, 255, 0.8)) {
    background-color: #ffffff; /* Solidne białe tło */
  }

  @media (max-width: 375px) {
    width: 90%;
    padding: 15px;
    margin-top: 110px;
  }
`;

const Section1 = styled(Section)`
  margin-top: 2px;
  animation-delay: 0.5s;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); /* Cień po prawej stronie */
`;

const Section1Delayed = styled(Section)`
  margin-top: 1px;
  animation-delay: 1s;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); /* Cień po prawej stronie */
`;

const SubTitle = styled.h2`
  font-size: 1.3em;
  color: #0078d4;
  margin: 0px;
  margin-bottom:10px;
  font-weight:bold;

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-top:15px;
  font-weight:bold;
`;

const StyledListItem = styled.div`
  position: relative;
  padding-left: 1.5em; /* Space for the dot */
  margin-bottom: 0.8em;
  font-size:0.8em;
  font-weight:bold;
 

  &::before {
    content: "•"; /* Add dot before each item */
    position: absolute;
    left: 0;
    color: #0078d4; /* Customize the color of the dot */
    font-size: 1.2em; /* Size of the dot */
    line-height: 1em;
  }
`;

const Text = styled.p`
  font-size: 1em;
  color: #333;
font-weight: bold;
  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const ContactItem = styled.p`
  font-size: 1em;
  color: #333;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;
const PhoneLink = styled.a`
  text-decoration: none;
  color: blue; /* Domyślny kolor niebieski */
  font-size: 1em;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale1.6); /* Delikatne powiększenie */
  }

  &:active {
    color: red; /* Kolor czerwony po kliknięciu */
  }
`;
const EmailLink = styled.a`
  text-decoration: none;
  color: blue; /* Kolor niebieski */
  font-size: 1em;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Powiększenie przy najechaniu */
  }

  &:active {
    color: red; /* Kolor czerwony po kliknięciu */
  }
`;


const Footer = styled.footer`
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  color: #fff;
  text-align: center;
  padding: 10px;
  width: 100%;
  position: fixed; /* Zamiast absolute, aby zawsze było widoczne */
  bottom: 0;
  z-index: 1; /* Ustawienie z-index, aby był nad tłem wideo */
  font-size: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3), 0px -2px 4px rgba(0, 0, 0, 0.2);
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 8px;
    padding: 8px;
    bottom: 5px; /* Dostosowanie odległości od dołu */
  }

  @media (max-width: 400px) {
    font-size: 7px;
    padding: 5px;
    bottom: 10px; /* Jeszcze wyżej na bardzo małych ekranach */
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BackgroundVideo autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
        <Title>
          <Logo src={companyLogo} alt="Company Logo" />
          <CompanyName>SC Bouwmax</CompanyName>
          <CompanyText>Kunstof Kozijn gemonteerd met precisie - comfort voor jaren!</CompanyText>
        </Title>
        <Section className="animate">
          <SubTitle>Over het Bedrijf</SubTitle>
          <Text>
            Wij leveren en plaatsen kunststof kozijnen van de hoogste kwaliteit tegen de scherpste prijs door heel Nederland.
            <StyledList>
              <StyledListItem>Kunststof kozijnen</StyledListItem>
              <StyledListItem>Kunststof deuren</StyledListItem>
              <StyledListItem>Kunststof schuifpuien</StyledListItem>
              <StyledListItem>Kunststof dakkapellen</StyledListItem>
              <StyledListItem>Kunststof boeibeplating</StyledListItem>
              <StyledListItem>Keralit</StyledListItem>
            </StyledList>
          </Text>
        </Section>
        <Section1 className="animate">
          <SubTitle>Onze diensten</SubTitle>
          <Text>
            Interesse om kunststof kozijnen te laten plaatsen door de spezialisten van SC Bouwmax? Het
            is dan heel eenvoudig om een offerte aan te vragen.
          </Text>
        </Section1>
        <Section1Delayed className="animate">
          <SubTitle>Contactgegevens</SubTitle>
          <ContactItem>SC Bouwmax</ContactItem>
          <ContactItem>
            Telefoonnummer: <PhoneLink href="tel:+31611434308">+31(0)611434308</PhoneLink>
          </ContactItem>
          <ContactItem>
            Email: <EmailLink href="mailto:bouwmax@outlook.com">bouwmax@outlook.com</EmailLink>
          </ContactItem>
          <ContactItem>KvK: 92009956</ContactItem>
        </Section1Delayed>
        <Footer>
          website gemaakt door: Przemyslaw Krawczynski | Email: 1986krawiec1986@gmail.com
        </Footer>
      </Container>
    </>
  );
}

export default App;