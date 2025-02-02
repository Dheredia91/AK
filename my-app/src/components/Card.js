
const Card = ({ children, className = "" }) => {
    return (
      <div className={`w-full max-w-3xl bg-gold p-4 flex flex-col mid:flex-row mid:max-w-6xl ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;
  