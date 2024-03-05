import Image from 'next/image';

export interface CardProps {
  value: string;
  imageSrc: string;
}

export function Card({ imageSrc, value }: CardProps) {
  return <Image width={240} height={340} src={imageSrc} alt={value} />;
}

export default Card;
