import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <div className="text-base md:text-lg text-left">
      <TypeAnimation
        sequence={[
          "Hello! I'm your AI agent. How can I enhance your business today?",
          1500,
          "I can help optimize your workflows with neural networks.",
          1500,
          "Let me assist you with advanced data analytics.",
          1500,
          "Would you like to explore our AI integration solutions?",
          1500,
        ]}
        speed={30}
        className="text-white"
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;
