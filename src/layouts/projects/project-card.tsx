import { Icon } from "@/assets/icons";
import { Image } from "@/components/image";
import { NeonBackground } from "@/components/neon-background";
import { Card } from "@/composables/3d-card";
import { Field } from "@/composables/field";
import { skillStore } from "@/stores/skill-store";
import type { IProject } from "@/types/project";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { SkillCard } from "../skills/skill-card";

type ProjectCardProps = Omit<IProject, "id">;

export const ProjectCard = observer(
  ({
    description,
    repository,
    thumbnail,
    name,
    skillList,
    websiteUrl,
  }: ProjectCardProps): ReactElement => {
    return (
      <Card.Container className="inter-var">
        <NeonBackground>
          <Card.Body className="bg-zinc-900 relative group/card h-auto rounded-xl w-[30rem] tablet-s:w-[25rem] mobile-l:w-[20rem]">
            <div className="bg-zinc-900 rounded-xl p-6 w-full mobile-l:p-4">
              <Card.Item translateZ={60} className="text-xl font-bold">
                {name}
              </Card.Item>
              <Card.Item
                as="p"
                translateZ={100}
                className="text-sm mt-2 text-justify text-zinc-400"
              >
                {description}
              </Card.Item>
              <Card.Item translateZ={140} className="w-full mt-4">
                <NeonBackground className="w-full h-[388px] mobile-l:h-[244px]">
                  <Image
                    src={thumbnail}
                    alt={`thumbnail do projeto ${name}`}
                    width={428}
                    height={384}
                    skeletonClassName="h-96"
                    className="w-full h-96 object-cover rounded-xl group-hover/card:shadow-xl mobile-l:h-60"
                  />
                </NeonBackground>
              </Card.Item>
              <Card.Item
                translateZ={100}
                className="text-sm mt-2 flex gap-2 justify-evenly items-center w-full"
              >
                {skillStore.filterBy(skillList).map(({ icon, color, name }) => (
                  <SkillCard icon={icon} color={color} key={name} />
                ))}
              </Card.Item>
              <Card.Item
                translateZ={80}
                className="flex mt-6 w-full gap-12 tablet-s:flex-col tablet-s:gap-6 mobile-l:gap-3 mobile-l:mt-3"
              >
                {repository.isPrivate ? (
                  <span className="flex w-full items-center justify-center whitespace-nowrap text-red-500 gap-2 h-[36px]">
                    <Icon.HiLockClosed size={20} className="fill-red-500" />
                    Repositório privado
                  </span>
                ) : (
                  <Field.Link
                    href={repository.url}
                    target="_blank"
                    rel="noreferrer"
                    containerClassName="w-full"
                    className="text-sm font-medium p-2 gap-2 bg-zinc-900"
                  >
                    <Icon.FaGithub size={20} />
                    Acessar repositório
                  </Field.Link>
                )}
                <Field.Link
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  containerClassName="w-full"
                  className="text-sm font-medium p-2 gap-2 bg-zinc-900"
                >
                  <Icon.HiOutlineExternalLink size={20} />
                  Acessar projeto
                </Field.Link>
              </Card.Item>
            </div>
          </Card.Body>
        </NeonBackground>
      </Card.Container>
    );
  },
);
