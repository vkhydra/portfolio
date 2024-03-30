import styled from "styled-components";

// carousel
export const CarouselContainer = styled.div`
  position: relative;
`;
export const CarouselWrapper = styled.div``;
export const Button = styled.button<{ prev?: boolean; next?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;

  ${({ prev }) => prev && `left: -5rem;`}
  ${({ next }) => next && `right: -5rem;`}
`;
// carouselItem

export const Card = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  width: 100%;
  font-size: 1.25rem;
  padding: 0.25rem;
`;

export const CardBody = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.25rem;
`;

export const CardTitle = styled.h2`
  font-weight: Bold;
`;

export const CardDescription = styled.p`
  width: 100%;
  text-align: justify;
`;

export const CardTechnologies = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

export const CardTech = styled.li`
  display: inline-block;
  margin: 4px;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
`;
