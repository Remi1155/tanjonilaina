import ProfilPic from "../assets/sary_tapaka_bg_gray_200.jpg"


const WelcomeImage = () => {
  return (
    <div className="overflow-hidden rounded-full">
      <img src={ProfilPic} alt="image 1" className="object-cover w-36 h-36 min-[400px]:w-48 min-[400px]:h-48 sm:w-56 sm:h-56 lg:w-96 lg:h-96 max-w-full"/>
    </div>
  )
}

export default WelcomeImage