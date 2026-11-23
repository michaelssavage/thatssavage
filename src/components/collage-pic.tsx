import { Fold } from "components/fold";
import { Figure } from "components/figure";
import { ImageBlockProps } from "types/data";

interface CollagePicProps {
  collage: {
    title: string;
    description: string;
    tint: string;
    collagePic: string;
    images: ImageBlockProps[];
  };
  firstFigureNumber: number;
}

export const CollagePic = ({ collage, firstFigureNumber }: CollagePicProps) => (
  <Fold
    tint={collage.tint}
    summary={
      <>
        <img
          src={collage.collagePic}
          alt=""
          loading="lazy"
          className="aspect-4/3 w-24 shrink-0 border border-ink object-cover sm:w-40"
        />
        <div className="min-w-0 flex-1">
          <h2 className="mb-2">{collage.title}</h2>
          <p className="mb-0 max-sm:hidden">{collage.description}</p>
        </div>
      </>
    }
  >
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {collage.images.map(({ img, alt }, index) => (
        <Figure key={alt} n={firstFigureNumber + index} label={alt}>
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </Figure>
      ))}
    </div>
  </Fold>
);
