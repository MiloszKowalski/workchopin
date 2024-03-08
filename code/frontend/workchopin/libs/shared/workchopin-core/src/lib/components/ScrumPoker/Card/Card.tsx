import Image from 'next/image';
import CardBack from '../assets/cards/ecom/back.png';

export interface CardProps {
  value: string;
  imageSrc: string;
}

export function Card({ imageSrc, value }: CardProps) {
  return (
    <div className="relative [perspective:1000px] w-[240px] h-[340px] group">
      <div
        className="absolute top-[1px] [transform-style:preserve-3d] w-[240px] h-[340px] blur-sm opacity-[0.25] rounded-3xlbg-gray-900
        animate-lift-up-shadow-reverse group-hover:animate-lift-up-shadow"
      ></div>
      <div className="absolute [perspective:1000px] w-[240px] h-[340px] cursor-pointer">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] animate-lift-up-reverse group-hover:animate-lift-up">
          <div className="absolute backface-hidden [transform:rotateY(180deg)]">
            <Image
              draggable="false"
              className="rounded-3xl"
              width={240}
              height={340}
              src={imageSrc}
              alt={value}
            />
          </div>
          <div className="absolute backface-hidden">
            <Image
              draggable="false"
              className="rounded-3xl border-4"
              width={240}
              height={340}
              src={CardBack}
              alt={`${value}-back`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
