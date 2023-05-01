import { Header } from "components/Header";
import { NavItem } from "components/NavItem";
import { sections } from "data/sections";
import type { NextPage } from "next";
import { AboutMeSection } from "components/AboutMeSection";
import { HardSkillsSection } from "components/HardSkillsSection";
import { ProjectsSection } from "components/ProjectsSection";
import { useSectionStore } from "store/useSectionStore";
import * as S from "./styles";

const Home: NextPage = (): JSX.Element => {
  const sectionStore = useSectionStore();

  return (
    <S.Page>
      <S.PageBox>
        <Header />
        <nav>
          <S.List>
            {sections.map(({ name, id, label }) => (
              <NavItem section={name} key={id}>
                {label}
              </NavItem>
            ))}
          </S.List>
        </nav>
        {sectionStore.name === "about_me" && <AboutMeSection />}
        {sectionStore.name === "projects" && <ProjectsSection />}
        {sectionStore.name === "hard_skills" && <HardSkillsSection />}
      </S.PageBox>
    </S.Page>
  );
};

export default Home;
