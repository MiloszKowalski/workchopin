import Image from 'next/image';
import CardBack from '../assets/cards/ecom/back.png';

export interface CardProps {
  value: string;
  imageSrc: string;
}

export function Card({ imageSrc, value }: CardProps) {
  return (
    <div className="relative w-[240px] h-[340px] group">
      <div className="absolute w-[240px] h-[340px] [perspective:1000px] cursor-pointer">
        <div className="relative w-full h-full transition-transform duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute backface-hidden [transform:rotateY(180deg)]">
            <Image
              draggable="false"
              className="rounded-3xl border-4 border-black"
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
