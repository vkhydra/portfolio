import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardDescription,
  CardTechnologies,
  CardTech,
} from "@/styles/styled-components/caroulsel";

export default function CarouselItem({
  title,
  description,
  link,
  technologies,
  isActive,
}: {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  isActive?: boolean;
}) {
  return (
    <Card className="bg-neutral hover:bg-base-100 gap-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody className="gap-2">
        <CardDescription>{description}</CardDescription>
        <CardTechnologies>
          {technologies.map((tech) => (
            <CardTech key={tech}>{tech}</CardTech>
          ))}
        </CardTechnologies>
      </CardBody>
      <a
        className="btn mt-[.5rem]"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar
      </a>
    </Card>
  );
}
