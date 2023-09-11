const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div  className={className}
        style={{
             ...style, 
             display:'flex',
              justifyContent:'center', 
              alignItems:'center', 
              background: "white", 
              borderRadius:'50%', 
              padding:'4px'
            }}
        onClick={onClick}/>
            
    
    );
};

export default PrevArrow;