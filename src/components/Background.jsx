import overlay from '../assets/overlay11.jpg'

const Background = () => {
  return (


    <div className="absolute inset-0 w-full h-full ">
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 inset-0 w-full h-full object-cover"
            src={video1}>
          </video> */}
          <div 
            className="fixed z-10 inset-0 w-full h-full"
            style={{
            backgroundImage: `url(${overlay})`,
            backgroundSize: 'cover',
            mixBlendMode: 'screen',
            opacity:0.2
            }}
          />
        </div>
  )
}

export default Background