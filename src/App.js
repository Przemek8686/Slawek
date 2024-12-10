import React from "react";
import styled from "styled-components";
import backgroundVideo from './public/Image/Tlo.mp4'; // Update with the correct path to your video file
import companyLogo from './public/Image/Logo.png'; // Update with the correct path to your logo file

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; /* Remove padding to prevent overflow */
  position: relative;
  overflow: hidden; /* Hide unnecessary scrollbars */
  width: 100%;
  height: 100vh; /* Full viewport height */
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
  justify-content: flex-start; /* Align items to the left */
  font-size: 2em;
  color: #0078d4;
  background: rgb(2,0,36);
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  width: 100%;
  height: 50px; /* Adjust height as needed */
  margin: 0;
  padding: 20px; /* Adjust padding as needed */
  position: absolute;
  top: 0;
`;

const Logo = styled.img` height: 100px; /* Adjust size as needed */ 
width: auto; margin-right: 10px; /* Space between logo and title text */ 
padding-left: 40px;

@media (max-width: 768px) { height: 90px; /* Adjust for tablets */ 
padding-left: 10px; } 

@media (max-width: 480px) { height: 90px; /* Adjust for phones */ 
padding-left: 5px; } `;

const CompanyName = styled.span`
  margin-right: 10px; /* Space between company name and styled components text */
  color: white;
  margin-left: 180px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-left: 180px; /* Adjust for tablets */
    font-size: 0.9em; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    margin-left: 5px; /* Adjust for phones */
    font-size: 0.6em; /* Adjust font size for phones */
  }
`;

const CompanyName1 = styled.span`
  margin-right: 10px; /* Space between company name and styled components text */
  color: white;
  font-size: 0.5em; /* Smaller font size */
  font-style: italic; /* Italic font style */
  margin-top: 8px;
  margin-left: 40px;

  @media (max-width: 768px) {
    font-size: 0.4em; /* Adjust for tablets */
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.3em; /* Adjust for phones */
    margin-left: 5px;

  }
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background for better readability */
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  margin-top: 120px;
  margin-bottom: 0px;
`;

const Section1 = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background for better readability */
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  color: #0078d4;
  margin: 0px;
`;

const Text = styled.p`
  font-size: 1em;
  color: #333;
`;

const ContactItem = styled.p`
  font-size: 1em;
  color: #333;
`;

const Footer = styled.footer`
background: rgb(2,0,36);
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  color: #fff;
  text-align: center;
  padding: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size:10px
`;

function App() {
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Title>
        <Logo src={companyLogo} alt="Company Logo" />
        <CompanyName>SC Bouwmax</CompanyName>
        <CompanyName1>Kunstof Kozijn gemonteerd met precisie - comfort voor jaren!</CompanyName1>
      </Title>
      <Section>
        <SubTitle>Over het Bedrijf</SubTitle>
        <Text>
          SC Bouwmax to firma specjalizująca się w profesjonalnym montażu okien w domach. Zajmujemy się instalacją okien wysokiej jakości, zapewniając naszym klientom komfort i bezpieczeństwo.
        </Text>
      </Section>
      <Section1>
        <SubTitle>Onze diensten</SubTitle>
        <Text>
          Oferujemy szeroki zakres usług związanych z montażem okien, w tym: instalacja okien standardowych, okien dachowych, oraz okien energooszczędnych.
        </Text>
      </Section1>
      <Section1>
        <SubTitle>Contactgegevens</SubTitle>
        <ContactItem>Adres: ul. Przykładowa 123, 00-000 Miasto</ContactItem>
        <ContactItem>Telefon: +48 123 456 789</ContactItem>
        <ContactItem>Email: info@scbouwmax.pl</ContactItem>
      </Section1>
      <Footer>
        website gemaakt door: Przemyslaw Krawczynski | Email: 1986krawiec1986@gmail.com
      </Footer>
    </Container>
  );
}

export default App;
