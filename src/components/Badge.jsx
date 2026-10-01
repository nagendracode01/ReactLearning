export function Badge({label,color}) {
  return (
   <span 
   style={{
    backgroundColor : color,
      color: 'white',
         padding: '4px 10px',
         borderRadius: 12,
        fontSize: 12,
   }}
   >{label}</span>
  );
}