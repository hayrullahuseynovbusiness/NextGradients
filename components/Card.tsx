import CopyButton from "./CopyButton";
const Card = ({ colors }) => {
  const content = `background-image: "linear-gradient(to right,${[
    ...colors,
  ]})"`;
  return (
    <div
      className="w-full h-48 flex justify-center items-center group"
      style={{
        backgroundImage: `linear-gradient(to right,${[...colors]})`,
      }}
    >
      <CopyButton content={content}>Copy CSS</CopyButton>
    </div>
  );
};

export default Card;
