import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import styled, { keyframes } from "styled-components";
import backgroundVideo from './public/Image/Tlo.mp4';
import companyLogo from './public/Image/Logo.png';
import { db } from "./firebase";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";
import { css } from "styled-components";
// ================= ANIMACJE =================
const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const slideInFromLeft = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const zoomOut = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.8); opacity: 0; }
`;

// ================= STYLING =================
const LoaderContainer = styled.div`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background: rgba(255, 255, 255, 0.6); z-index: 9999;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const LoaderLogo = styled.img`
  height: 100px; width: auto; animation: ${pulse} 1.5s infinite;
`;

const PercentageText = styled.div`
  margin-top: 20px; font-size: 1.5em; color: #0078d4; font-weight: bold;
`;

const Container = styled.div`
  display: flex; flex-direction: column; align-items: center;
  padding: 0; position: relative; width: 100%; min-height: 100vh; overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: fixed; top: 0; left: 0; width: 100%; height: calc(100vh - 6px);
  object-fit: cover; z-index: -1;
`;

const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2em;
  color: #0078d4;
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  width: 100%;
  padding: 20px 40px;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);
  z-index: 5;

  @media (max-width: 1440px) { padding: 18px 35px; font-size: 1.8em; }
  @media (max-width: 1024px) { padding: 15px 30px; font-size: 1.5em; }
  @media (max-width: 768px)  { padding: 12px 20px; font-size: 1.2em; }
  @media (max-width: 480px)  { padding: 8px 10px; font-size: 1em; }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  flex-shrink: 0;

  @media (max-width: 1024px) { height: 50px; }
  @media (max-width: 768px)  { height: 40px; }
  @media (max-width: 480px)  { height: 30px; }
`;

const CompanyName = styled.span`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  flex: 1;
  margin: 0 10px;
  font-size: 1.5em;
  white-space: nowrap;

  @media (max-width: 1024px) { font-size: 1.2em; }
  @media (max-width: 768px)  { font-size: 1em; }
  @media (max-width: 480px)  { font-size: 0.8em; }
`;

const CompanyText = styled.span`
  color: white;
  font-size: 0.9em;
  font-family: Brush Script MT, cursive;
  text-align: right;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  white-space: nowrap;

  @media (max-width: 1024px) { font-size: 0.8em; }
  @media (max-width: 768px)  { font-size: 0.7em; }
  @media (max-width: 480px)  { font-size: 0.3em; }
`;

// ================= Section =================
const Section = styled.div`
  background: rgba(255,255,255,0.4);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  margin-top: 5px;
  margin-bottom: 10px;
  animation: ${slideInFromLeft} 1.5s ease-out;
  animation-fill-mode: forwards;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.2);

  @media (max-width: 1024px) { 
    width: 90%; 
    padding: 15px; 
    margin-top: 10px; 
  }

  @media (max-width: 768px)  { 
    width: 95%; 
    padding: 12px; 
    margin-top: 15px; 
  }

  @media (max-width: 480px)  { 
    width: 95%; 
    padding: 10px; 
    margin-top: 6px; 
    margin-bottom: 5px; 
  }

  @media (max-width: 375px)  { 
    width: 92%; 
    padding: 8px; 
    margin-top: 6px; 
    margin-bottom: 5px; 

    h2 {
      font-size: 1.1em; /* mniejsze nagłówki */
    }

    p, li {
      font-size: 0.9em; /* mniejszy tekst w paragrafach i listach */
    }
  }
`;


const Section1 = styled(Section)` margin-top: 2px; animation-delay: 0.5s; `;
const Section1Delayed = styled(Section)` margin-top: 1px; animation-delay: 1s; `;

const SubTitle = styled.h2` font-size: 1.3em; color: #0078d4; margin-bottom: 10px; `;
const Text = styled.p` font-size: 1em; color: #333; font-weight: bold; `;

const StyledList = styled.ul` margin-top: 10px; padding-left: 20px; font-weight: bold; `;
const StyledListItem = styled.li` margin-bottom: 6px; font-weight: bold; color: #0078d4; `;

const ContactItem = styled.p` font-size: 1em; color: #333; font-weight: bold; `;
const PhoneLink = styled.a` text-decoration: none; color: blue; &:hover { transform: scale(1.1); } &:active { color:red; } `;
const EmailLink = styled.a` text-decoration: none; color: blue; &:hover { transform: scale(1.1); } &:active { color:red; } `;

// ================= Navigation =================
const Navigation = styled.nav`
  display: flex;
  gap: 10px;
  margin-top: 7px;
  margin-bottom: 3px;
  z-index: 10;
  flex-wrap: nowrap;
  justify-content: center;

  @media (max-width: 1024px) { margin-top: 80px; }
  @media (max-width: 768px)  { margin-top: 60px; gap: 8px; }
  @media (max-width: 480px)  { margin-top: 10px; gap: 5px; }
`;

const NavButton = styled.button`
  background: rgba(255,255,255,0.8);
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: bold;
  color: #0078d4;
  white-space: nowrap;

  &.active { background: #0078d4; color: white; }
  &:hover { background: rgba(255,255,255,1); transform: translateY(-2px); }

  @media (max-width: 768px) { padding: 6px 12px; font-size: 0.9em; }
  @media (max-width: 480px) { padding: 5px 10px; font-size: 0.8em; }
`;

// ================= Gallery =================
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  width: 90%;
  max-width: 1200px;
  margin-top: 10px;
  margin-bottom: 60px;
  padding: 20px;

  /* Styl dla dzieci (kafelek) */
  & > * {
    border: 1px solid rgba(0, 0, 0, 0.1); /* Delikatne obramowanie */
    border-radius: 8px; /* Zaokrąglone rogi */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); /* Delikatny cień */
    transition: all 0.3s ease; /* Płynna animacja */
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Nieco większy cień przy najechaniu */
      transform: translateY(-2px); /* Delikatne uniesienie przy najechaniu */
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    padding: 18px;
    
    & > * {
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    padding: 15px;
    margin-top: 15px;
    
    & > * {
      border-radius: 5px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 8px;
    padding: 10px;
    margin-top: 10px;
    
    & > * {
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      border-width: 0.5px;
    }
  }
`;


const GalleryItem = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: zoom-out;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  animation: ${props => props.closing ? css`${zoomOut} 0.3s forwards` : css`${zoomIn} 0.3s forwards`};
`;
// ================= Reviews =================
const ReviewsContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin-top: 15px;
  margin-bottom: 60px;
  padding: 20px;

  @media (max-width: 1024px) { width: 95%; padding: 18px; margin-top: 15px; }
  @media (max-width: 768px)  { width: 100%; padding: 15px; margin-top: 10px; }
  @media (max-width: 480px)  { padding: 10px; margin-top: 5px; }
`;

const ReviewForm = styled.form`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-top: 0px;
  margin-bottom: 30px;

  @media (max-width: 1024px) { padding: 18px; margin-bottom: 25px; }
  @media (max-width: 768px)  { padding: 15px; margin-top: 10px; margin-bottom: 20px; }
  @media (max-width: 480px)  { padding: 10px; margin-top: 5px; margin-bottom: 15px; }
`;

const FormTitle = styled.h3` color:#0078d4; `;
const FormInput = styled.input` width:100%; padding:10px; margin-bottom:15px; border:1px solid #ddd; border-radius:5px; `;
const FormTextarea = styled.textarea` width:100%; padding:10px; margin-bottom:15px; border:1px solid #ddd; border-radius:5px; min-height:100px; `;
const FormButton = styled.button` background:#0078d4; color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer; font-weight:bold; `;
const ReviewItem = styled.div` background: rgba(255, 255, 255, 0.7); padding:20px; border-radius:10px; margin-bottom:20px; `;
const ReviewText = styled.p` color:#333; line-height:1.6; `;
const ReviewDate = styled.small` color:#777; `;

// ================= Footer =================
const Footer = styled.footer`
  background: linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 35%, rgba(0,212,255,1) 100%);
  color:#fff;
  text-align:center;
  padding:2px;
  width:100%;
  position:fixed;
  bottom:0;
  font-size:10px;
`;

// ================= Sample Images =================
const sampleImages = [
  { id: 1, src: "/zdjecie1.jpeg", alt: "Project 1" },
  { id: 2, src: "/zdjecie2.jpeg", alt: "Project 2" },
  { id: 3, src: "/zdjecie3.jpeg", alt: "Project 3" },
 
];

// ================= APP =================
function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ nick:'', comment:'' });
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(collection(db,"reviews"), orderBy("date","desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if(newReview.nick.trim() === "" || newReview.comment.trim() === ""){
      alert("Wpisz nick i komentarz!");
      return;
    }
    const review = { nick: newReview.nick, text: newReview.comment, date: new Date().toISOString() };
    await addDoc(collection(db, "reviews"), review);
    setReviews([review, ...reviews]);
    setNewReview({ nick:'', comment:'' });
  };

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => {
    setIsClosing(true);
    setTimeout(() => {
      setFullscreenImage(null);
      setIsClosing(false);
    }, 300);
  };

  const renderHomePage = () => (
    <>
      <Section>
        <SubTitle>Over het Bedrijf</SubTitle>
        <Text>
          Wij leveren en plaatsen kunststof kozijnen van de hoogste kwaliteit tegen de scherpste prijs door heel Nederland.
        </Text>
        <StyledList>
          <StyledListItem>Kunststof kozijnen</StyledListItem>
          <StyledListItem>Kunststof deuren</StyledListItem>
          <StyledListItem>Kunststof schuifpuien</StyledListItem>
          <StyledListItem>Kunststof dakkapellen</StyledListItem>
          <StyledListItem>Kunststof boeibeplating</StyledListItem>
          <StyledListItem>Keralit</StyledListItem>
        </StyledList>
      </Section>
      <Section1>
        <SubTitle>Onze diensten</SubTitle>
        <Text>Interesse om kunststof kozijnen te laten plaatsen door de spezialisten van SC Bouwmax? Het is dan heel eenvoudig om een offerte aan te vragen.</Text>
      </Section1>
      <Section1Delayed>
        <SubTitle>Contactgegevens</SubTitle>
        <ContactItem>SC Bouwmax</ContactItem>
        <ContactItem>Slawomir Cieciora</ContactItem>
        <ContactItem>Tel: <PhoneLink href="tel:+31611434308">+31(0)611434308</PhoneLink></ContactItem>
        <ContactItem>Email: <EmailLink href="mailto:bouwmax@outlook.com">bouwmax@outlook.com</EmailLink></ContactItem>
      </Section1Delayed>
    </>
  );

  const renderProjectsPage = () => (
    <GalleryContainer>
      {sampleImages.map(img => (
        <GalleryItem key={img.id} onClick={()=>openFullscreen(img.src)}>
          <GalleryImage src={img.src} alt={img.alt}/>
        </GalleryItem>
      ))}
      {fullscreenImage && (
        <FullscreenOverlay onClick={closeFullscreen}>
          <FullscreenImage
  src={fullscreenImage}
  alt="Fullscreen"
  closing={isClosing}
/>
        </FullscreenOverlay>
      )}
    </GalleryContainer>
  );

  const renderReviewsPage = () => (
    <ReviewsContainer>
      <ReviewForm onSubmit={handleReviewSubmit}>
        <FormTitle>Klantenreviews</FormTitle>
        <FormInput type="text" placeholder="Je bijnaam" value={newReview.nick} onChange={e => setNewReview({...newReview,nick:e.target.value})} required/>
        <FormTextarea placeholder="Je opmerking" value={newReview.comment} onChange={e => setNewReview({...newReview,comment:e.target.value})} required/>
        <FormButton type="submit">Verstuur</FormButton>
      </ReviewForm>

      <div>
        <FormTitle>Overzicht</FormTitle>
        {reviews.length > 0 ? reviews.map(r => (
          <ReviewItem key={r.id}>
            <ReviewText>{r.text}</ReviewText>
            <ReviewDate>{r.nick} | {new Date(r.date).toLocaleDateString()}</ReviewDate>
          </ReviewItem>
        )) : <Text>Nog geen reviews</Text>}
      </div>
    </ReviewsContainer>
  );

  return (
    <>
      <GlobalStyle/>
      {loading && <Loader onComplete={()=>setLoading(false)}/>}
      {!loading && (
        <Container>
          <BackgroundVideo autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4"/>
          </BackgroundVideo>

          <Title>
            <Logo src={companyLogo} alt="Company Logo"/>
            <CompanyName>SC Bouwmax</CompanyName>
            <CompanyText>Kunststof Kozijnen gemonteerd met precisie!</CompanyText>
          </Title>

          <Navigation>
            <NavButton className={currentPage==='home'?'active':''} onClick={()=>setCurrentPage('home')}>Home</NavButton>
            <NavButton className={currentPage==='projects'?'active':''} onClick={()=>setCurrentPage('projects')}>Projecten</NavButton>
            <NavButton className={currentPage==='reviews'?'active':''} onClick={()=>setCurrentPage('reviews')}>Beoordelingen</NavButton>
          </Navigation>

          {currentPage==='home' && renderHomePage()}
          {currentPage==='projects' && renderProjectsPage()}
          {currentPage==='reviews' && renderReviewsPage()}

          <Footer>
            website gemaakt door: Przemyslaw Krawczynski | Email: 1986krawiec1986@gmail.com
          </Footer>
        </Container>
      )}
    </>
  );
}

// ================= LOADER =================
function Loader({ onComplete }) {
  const [progress,setProgress] = useState(0);
  const [isVisible,setIsVisible] = useState(true);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setProgress(prev=>{
        if(prev>=100){
          clearInterval(interval);
          setTimeout(()=>{setIsVisible(false); setTimeout(onComplete,500)},500);
          return 100;
        }
        return prev+1;
      });
    },30);
    return ()=>clearInterval(interval);
  },[onComplete]);

  return (
    <LoaderContainer $isVisible={isVisible}>
      <LoaderLogo src={companyLogo} alt="Loading Logo"/>
      <PercentageText>{progress}%</PercentageText>
    </LoaderContainer>
  );
}

export default App;
