import { useEffect, useState } from "react";
import cn from "classnames";
interface BlurredImageProps {
  src: string;
  blurSrc: string;
  width: string | number;
  height: string | number;
}
const BlurredImage: React.FC<BlurredImageProps> = ({
  src,
  blurSrc,
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setIsLoaded(true);
  }, []);
  const classnames =
    "transition duration-200 w-full h-full max-w-full max-h-full min-h-full max-h-full absolute inset-0";
  return (
    <div
      className="relative"
      style={{
        height,
        width,
      }}
    >
      {isLoaded ? (
        <img src={src} className={classnames} />
      ) : (
        <img src={blurSrc} className={classnames} />
      )}
    </div>
  );
};

export default BlurredImage;
