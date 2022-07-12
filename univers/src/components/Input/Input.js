const Input = (props) => {
  return (
    <input
     placeholder={props.placeholder} 
     className={props.className} 
     ref={props.propsRef} 
     />
  )
}

export default Input