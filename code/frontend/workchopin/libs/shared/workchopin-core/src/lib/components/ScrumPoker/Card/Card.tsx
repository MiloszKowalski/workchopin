import Image from 'next/image';

export interface CardProps {
  value: string;
  imageSrc: string;
}

export function Card({ imageSrc, value }: CardProps) {
  return <Image src={imageSrc} alt={value} />;
}

export default Card;
