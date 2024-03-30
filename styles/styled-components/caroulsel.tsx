import styled from "styled-components";

// carousel
export const CarouselContainer = styled.div`
  position: relative;
`;
export const CarouselWrapper = styled.div``;
export const Button = styled.button<{ $prev?: boolean; $next?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  ${(props) => props.$prev && `left: -4rem;`}
  ${(props) => props.$next && `right: -4rem;`};
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
  padding: 0 0.25rem;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0 0.25rem;
`;

export const CardTitle = styled.h2`
  font-weight: Bold;
  text-align: center;
`;

export const CardDescription = styled.p`
  width: 100%;
  text-align: center;
`;

export const CardTechnologies = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

export const CardTech = styled.li`
  display: inline-block;
  padding: 0.5rem;
  border: 0.125rem solid #ddd;
  border-radius: 0.5rem;
  font-size: 12px;
`;
