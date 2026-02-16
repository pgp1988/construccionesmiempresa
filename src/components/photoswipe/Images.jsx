
export const Images = ({url, text, className}) => {
  return (
    <>
         <a href={url} data-pswp-width="800" data-pswp-height="600" className={className}>
            <h3 style={{textAlign:"center"}}>{text}</h3>
            <img src={url} style={{width:"300px", height:"200px"}} alt="Sample #1" />
        </a>
    </>
  )
}
