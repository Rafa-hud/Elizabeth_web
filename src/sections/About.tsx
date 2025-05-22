import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faLaptopCode, 
  faGraduationCap,
  faMapMarkerAlt,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faTwitter, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

// Styled components
const AboutSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleIcon = styled.span`
  margin-right: 15px;
  color: #3498db;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
`;

const AboutContent = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PersonalInfo = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InfoItem = styled.li`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
`;

const InfoText = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #2c3e50;
  margin-right: 5px;
`;

const InfoValue = styled.span`
  color: #7f8c8d;
`;

const AboutBio = styled.div`
  background: #3498db;
  padding: 25px;
  border-radius: 15px;
  color: white;
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
`;

const BioTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const BioText = styled.p`
  line-height: 1.6;
`;

const SocialMedia = styled.div`
  text-align: center;
  padding: 20px;
`;

const SocialTitle = styled.h4`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled(motion.a)`
  transition: all 0.3s ease;
`;

const SkillsSection = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SkillsCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SkillsTitle = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const SkillsContainer = styled.div`
  margin-top: 20px;
`;

const SkillItem = styled.div`
  margin-bottom: 20px;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const SkillName = styled.span`
  font-weight: 600;
  color: #2c3e50;
`;

const SkillPercent = styled.span`
  color: #3498db;
  font-weight: 600;
`;

const SkillBar = styled.div`
  height: 10px;
  background: #ecf0f1;
  border-radius: 5px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 5px;
`;

// Component
const About = () => {
  const personalInfo = [
    { icon: faUserTie, label: "Profesión", value: "Ingeniera de Sistemas" },
    { icon: faGraduationCap, label: "Educación", value: "Maestría en TI" },
    { icon: faMapMarkerAlt, label: "Ubicación", value: "Perú" },
    { icon: faEnvelope, label: "Email", value: "" },
    { icon: faPhone, label: "Teléfono", value: "----" }
  ];

  const skills = [
    { name: "---", level: 0 },
    { name: "---", level: 0 },
    { name: "---", level: 0 },
    { name: "---", level: 0 },
    { name: "---", level: 0 }
  ];

  const socialMedia = [
    { icon: faFacebook, url: "https://www.facebook.com/share/16kPFydjjU/", color: "#3b5998" },
    { icon: faInstagram, url: "https://www.instagram.com/elizabethlastra30?igsh=dG55bWhmbHgzcXo4", color: "#e1306c" },
    { icon: faTwitter, url: "https://x.com/Elizalastra30?fbclid=PAQ0xDSwKbikVleHRuA2FlbQIxMQABp1VkF4IgLAekuyFlXfaQ2FnypqrmuGZrcRjPRRC2A5xgfzHhEfV5L1RGKLmI_aem_gecA3yTYZ7AWGSgBtinRQA", color: "#1da1f2" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/elizabethlastra30", color: "#0077b5" }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            <TitleIcon>
              <FontAwesomeIcon icon={faUserTie} />
            </TitleIcon>
            Sobre Mí
          </SectionTitle>
          <SectionSubtitle>Conoce más sobre mi trayectoria profesional</SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <PersonalInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoCard>
              <InfoTitle>Información Personal</InfoTitle>
              <InfoList>
                {personalInfo.map((item, index) => (
                  <InfoItem key={index}>
                    <InfoIcon>
                      <FontAwesomeIcon icon={item.icon} />
                    </InfoIcon>
                    <InfoText>
                      <InfoLabel>{item.label}:</InfoLabel>
                      <InfoValue>{item.value}</InfoValue>
                    </InfoText>
                  </InfoItem>
                ))}
              </InfoList>
            </InfoCard>

            <AboutBio>
              <BioTitle>Mi Enfoque</BioTitle>
              <BioText>
                Como profesional en informática, combino conocimiento técnico avanzado con 
                una perspectiva estratégica para desarrollar soluciones innovadoras que 
                impulsen el éxito empresarial.
              </BioText>
            </AboutBio>

            

          </PersonalInfo>

          <SkillsSection
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillsCard>
              <SkillsTitle>
                <TitleIcon>
                  <FontAwesomeIcon icon={faLaptopCode} />
                </TitleIcon>
                Mis Habilidades
              </SkillsTitle>
              <SkillsContainer>
                {skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillInfo>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercent>{skill.level}%</SkillPercent>
                    </SkillInfo>
                    <SkillBar>
                      <SkillProgress
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillsContainer><SocialMedia>
              <SocialTitle>Mis Redes Sociales</SocialTitle>
              <SocialIcons>
                {socialMedia.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: social.color }}
                  >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </SocialLink>
                ))}
              </SocialIcons>
            </SocialMedia>
            </SkillsCard>
          </SkillsSection>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;