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
  link: string;
  technologies: string[];
  isActive?: boolean;
}) {
  return (
    <Card className="bg-base-100 text-base-content gap-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody className="gap-2">
        <CardDescription>{description}</CardDescription>
        <CardTechnologies className="self-center">
          {technologies.map((tech) => (
            <CardTech key={tech}>{tech}</CardTech>
          ))}
        </CardTechnologies>
      </CardBody>
      {link.length === 0 ? (
        ""
      ) : (
        <a
          className="btn mt-[.5rem] w-fit px-16 self-center"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Access
        </a>
      )}
    </Card>
  );
}
