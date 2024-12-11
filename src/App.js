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
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  height: auto;
  padding: 20px;
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
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  margin-top: 200px;
  margin-bottom: 30px;
  animation: ${slideInFromLeft} 1.5s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
  visibility: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);  // Delikatne obramowanie
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);  // Cień po prawej i w prawym dolnym rogu

  &.animate {
    visibility: visible;
  }

  @media (max-width: 375px) {
    width: 90%;
    padding: 15px;
    margin-top: 150px;
  }
`;

const Section1 = styled(Section)`
  margin-top: 20px;
  animation-delay: 0.5s;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);  // Cień po prawej i w prawym dolnym rogu
`;

const Section1Delayed = styled(Section)`
  margin-top: 20px;
  animation-delay: 1s;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);  // Cień po prawej i w prawym dolnym rogu
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  color: #0078d4;
  margin: 0px;
  margin-bottom:10px;

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const Text = styled.p`
  font-size: 1em;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const ContactItem = styled.p`
  font-size: 1em;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const Footer = styled.footer`
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  color: #fff;
  text-align: center;
  padding: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: 10px;
  
  /* Cień dla całego Footer (górny i dolny) */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3), 0px -2px 4px rgba(0, 0, 0, 0.2);  // Cień górny i dolny
  
  /* Cień dla tekstu */
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);  // Cień tekstu

  @media (max-width: 400px) {
    margin-bottom: 60px;
    font-size: 5px;
    margin-top: 10px;
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
            SC Bouwmax to firma specjalizująca się w profesjonalnym montażu okien w domach.
          </Text>
        </Section>
        <Section1 className="animate">
          <SubTitle>Onze diensten</SubTitle>
          <Text>
            Oferujemy szeroki zakres usług związanych z montażem okien.
          </Text>
        </Section1>
        <Section1Delayed className="animate">
          <SubTitle>Contactgegevens</SubTitle>
          <ContactItem>Adres: ul. Przykładowa 123, 00-000 Miasto</ContactItem>
          <ContactItem>Telefon: +48 123 456 789</ContactItem>
          <ContactItem>Email: info@scbouwmax.pl</ContactItem>
          <ContactItem>KvK: 11111111111</ContactItem>
        </Section1Delayed>
        <Footer>
          website gemaakt door: Przemyslaw Krawczynski | Email: 1986krawiec1986@gmail.com
        </Footer>
      </Container>
    </>
  );
}

export default App;