import {
  MainArea,
  AboutSection,
  ProfileContainer,
  DataContainer,
  Name,
  Career,
  AvatarContainer,
  RotatingContainer,
  TechImage,
  Avatar,
  Video,
  Source,
  StackSection,
  StackContainer,
} from "../styles/styles";

import video from "../assets/bg-video.mp4";
import img from "../assets/avatar.jpg";

interface MainProps {
  getTech: JSX.Element[];
}

export const Main: React.FC<MainProps> = ({ getTech }) => {
  return (
    <MainArea>
      <AboutSection>
        <ProfileContainer>
          <DataContainer>
            <Name>Rian Dias de Oliveira</Name>
            <Career>Desenvolvedor Front-End Júnior</Career>
          </DataContainer>
          <AvatarContainer>
            <RotatingContainer>
              <TechImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React logo"
              />
            </RotatingContainer>
            <Avatar src={img} alt="" />
          </AvatarContainer>
        </ProfileContainer>
        <Video autoPlay disablePictureInPicture loop muted>
          <Source src={video} type="video/mp4" />
        </Video>
      </AboutSection>
      <StackSection>
        <StackContainer>{getTech}</StackContainer>
      </StackSection>
    </MainArea>
  );
};
