import { Tooltip, Zoom } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { ProjectType } from "types";
import styles from "./styles.module.scss";

type ProjectProps = {
  data: ProjectType;
};

export const Project = ({
  data: {
    name,
    description,
    skill_icons,
    github_link,
    website_link,
    release_date,
    image,
  },
}: ProjectProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <>
      <div data-hovered={hovered} className={styles.opaque_background} />
      <div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-hovered={hovered}
          className={styles.box}
        >
          <div className={styles.content}>
            <h4 className={styles.title}>{name}</h4>
            <p className={styles.description}>{description}</p>
            <ul className={styles.list}>
              {skill_icons.map((Icon, index) => (
                <div key={index} className={styles.icon}>
                  <Icon />
                </div>
              ))}
            </ul>
          </div>
          <div className={styles.footer}>
            <div className={styles.link_box}>
              <Tooltip
                title="Acessar repositório"
                placement="top"
                arrow
                TransitionComponent={Zoom as any}
              >
                <a
                  href={github_link}
                  rel="external"
                  target="_blank"
                  className={styles.link}
                >
                  <SiGithub size={36} />
                </a>
              </Tooltip>
              <Tooltip
                title="Acessar projeto"
                placement="top"
                arrow
                TransitionComponent={Zoom as any}
              >
                <a
                  href={website_link}
                  rel="external"
                  target="_blank"
                  className={styles.link}
                >
                  <FiExternalLink size={36} />
                </a>
              </Tooltip>
            </div>
            <span className={styles.date}>Lançado em {release_date}</span>
          </div>
        </div>
      </div>
      <Image
        src={`/assets/images/${image}`}
        alt="Project image"
        width={700}
        height={400}
        quality={100}
        data-hovered={hovered}
        className={styles.image}
      />
    </>
  );
};
