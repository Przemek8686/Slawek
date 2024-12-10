import React from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import backgroundVideo from './public/Image/Tlo.mp4'; // Update with the correct path to your video file
import companyLogo from './public/Image/Logo.png'; // Update with the correct path to your logo file

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; /* Remove padding to prevent overflow */
  position: relative;
  overflow-x: hidden; /* Prevent horizontal scroll */
  overflow-y: auto; /* Enable vertical scrolling */
  width: 100%;
  height: 100vh; /* Full viewport height */

  @media (max-width: 400px) {
    height: auto; /* Allow height to adjust based on content */
    min-height: 100vh; /* Ensure at least the full viewport height */
    padding-bottom: 20px; /* Add space at the bottom for content */
  }

  @media (max-width: 275px) {
    height: auto; /* Allow height to adjust */
    min-height: 100vh; /* Ensure full viewport height as a minimum */
    padding: 10px; /* Add some padding for better appearance */
    padding-bottom: 30px; /* Ensure scrollable space at the bottom */
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  @media (max-width: 400px) {
    height: auto; /* Allow height to adjust */
    min-height: 100vh; /* Ensure video covers at least full viewport */
  }

  @media (max-width: 275px) {
    height: auto; /* Allow height to adapt */
    min-height: 100vh; /* Ensure the video remains visible in smaller resolutions */
    object-fit: fill; /* Adjust fit for ultra-small screens to cover the area */
  }
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
  height: 80px; /* Adjust height as needed */
 margin-top:0px;
  padding: 20px; /* Adjust padding as needed */
  position: absolute;
  top: 0;
  margin-bottom:40px;
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
  margin-left: 125px;

  @media (max-width: 768px) {
    font-size: 0.4em; /* Adjust for tablets */
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.23em; /* Adjust for phones */
    margin-left: 5px;

  }
`;


const Section = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background for better readability */
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  margin-top: 140px;
  margin-bottom: 40px;
 

  @media (max-width: 480px) {
 
  max-hight:20%
  

  @media (max-width: 375px) {
    width: 90%; /* Use most of the screen width */
    padding: 15px; /* Reduced padding for smaller screens */
    font-size: 0.85em; /* Slightly smaller font for compactness */
    border-radius: 8px; /* Maintain a rounded appearance */
    margin-top: 50px;
}
`;

const Section1 = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background for better readability */
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  margin-top: 20px;
  margin-bottom: 40px;
 

  @media (max-width: 480px) {
 
  max-hight:20%
  

  @media (max-width: 375px) {
    width: 90%; /* Use most of the screen width */
    padding: 15px; /* Reduced padding for smaller screens */
    font-size: 0.85em; /* Slightly smaller font for compactness */
    border-radius: 8px; /* Maintain a rounded appearance */
    margin-top: 50px;
}
`;



const SubTitle = styled.h2`
  font-size: 1.5em;
  color: #0078d4;
  margin: 0px;
   @media (max-width: 480px) {
   font-size:1.0em;
}
`;

const Text = styled.p`
  font-size: 1em;
  color: #333;
     @media (max-width: 480px) {
   font-size:0.7em;
}
`;

const ContactItem = styled.p`
  font-size: 1em;
  color: #333;
     @media (max-width: 480px) {
   font-size:0.7em;
}
`;

const Footer = styled.footer`
background: rgb(2,0,36);
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  color: #fff;
  text-align: center;
  padding: 5px;
  width: 100%;
  position: absolute;
  bottom: 1px;
  font-size:10px;
  
  @media (max-width: 400px) {
  margin-bottom:8px;
  font-size:5px;
margin-top:10px;
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
    </>
  );
}

export default App;
