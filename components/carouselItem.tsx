export default function CarouselItem({
  title,
  description,
  link,
  technologies,
  className,
}: {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  className: string;
}) {
  return (
    <a className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </a>
  );
}
