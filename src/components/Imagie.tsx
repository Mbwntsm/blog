type Props = {
  src: string;
  alt: string;
};

function Imagie({src,alt }: Props) {
  return (
    <img src={src} alt={alt} />
  );
}

export default Imagie;
