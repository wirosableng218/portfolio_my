import React from "react"
import { TypeAnimation } from "react-type-animation"
import colorSupport from "supports-color"

console.log(colorSupport)

const Home = () => {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-4 py-10 items-center"
      style={{ marginTop: "100px" }}
    >
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[36px] mb-4">Halo, Saya Yudha Cahyo Saputro! - Web Developer</div>
        <div className="text-center mb-4">
          <TypeAnimation
            sequence={["Frontend Developer", 3000, "Backend Developer", 3000, "Web Development", 3000, "Content Creator", 3000, "Pengembang Website", 3000, "Coding", 3000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
            className="text-secondary"
          />
        </div>
        <div className="font-gradient flex mx-auto mt-5 text-center text-[18px] max-w-[800px] mb-10">
          Saya adalah seorang web developer dengan pengalaman di bidang pengembangan website. Saya memiliki minat besar dalam coding dan siap membantu menciptakan website yang sesuai dengan kebutuhan
          Anda.
        </div>
      </div>
    </div>
  )
}

export default Home
