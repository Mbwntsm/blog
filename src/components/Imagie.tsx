
type Props = {
  src: string;
  alt: string;
};

function Imagie({ src, alt }: Props) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
      <img
        src={src}
        alt={alt}
        className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

function CardSizeImage({ src, alt }: Props) {
  return (
    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}

export { Imagie, CardSizeImage };
