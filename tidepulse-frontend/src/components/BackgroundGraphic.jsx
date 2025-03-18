const BackgroundGraphic = () => {
    return (
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cover" style={{ 
        backgroundImage: "url('/path-to-your-background-image.png')", 
        opacity: 0.2 
      }} />
    );
  };
  
  export default BackgroundGraphic;
  