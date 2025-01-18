import React, { useEffect } from "react"
import axios from "axios"
import { Helmet } from "react-helmet"

export default function Profile() {
  useEffect(() => {
    axios
      .get("url")
      .then((response) => {
        console.log(response.data)
        // Set state with the response data or handle it as needed
      })
      .catch((error) => console.error("Error:", error))
  }, []) // Dependency array is empty, so this runs once on mount

  return (
    <div
      id="profile"
      className="section min-h-screen mb-0 mt-40"
    >
      <Helmet>
        <title>Yudha Cahyo Saputro - Profile</title>
        <meta
          name="description"
          content="Yudha Cahyo Saputro's profile, showcasing his skills and experience as a web developer."
        />
        <meta
          name="keywords"
          content="Yudha Cahyo Saputro, web developer, profile, skills, experience"
        />
        <meta
          property="og:title"
          content="Yudha Cahyo Saputro - Profile"
        />
        <meta
          property="og:description"
          content="Yudha Cahyo Saputro's profile, showcasing his skills and experience as a web developer."
        />
        <meta
          property="og:image"
          content="/images/profile1.jpg"
        />
      </Helmet>
      {/* Rest of the code remains the same */}
      <div className="container mx-auto max-w-[1200px] px-8">
        <div className="font-secondary text-center font-bold mb-0">
          <h4 className="text-secondary mb-0">Awesome Skill👋</h4>
          <h2 className="text-gradient font-primary mx-w-[750px] mx-auto text-[18px] mb-0">
            Halo, saya Yudha Cahyo Saputro, lulusan S1 Komputer dengan pengalaman dalam pembuatan website yang menekankan sisi "soft". Saya sangat berminat menjadi seorang web developer profesional
            dan terus belajar untuk meningkatkan keterampilan saya.
          </h2>
          <p className="text-[18px] mx-auto max-w-[750px] mb-0">
            Dalam perjalanan karier saya, saya pernah menghadapi tantangan, termasuk kegagalan menyelesaikan proyek karena deadline yang ketat dan tingkat kesulitan yang tinggi. Namun, pengalaman ini
            mengajarkan saya pentingnya manajemen waktu, komunikasi tim, dan terus beradaptasi dengan situasi.
          </p>
          <p className="text-[18px] mx-auto max-w-[750px] mb-10">
            Selain pengembangan web, saya juga hobi bermain games dan coding, yang memperkuat kreativitas serta kemampuan saya dalam menyelesaikan masalah.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row item-start justify-between">
          <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
            <div className="relative w-[200px] h-[200px] mx-auto mb-5">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-2xl opacity-70 -z-10"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-xl opacity-60 -z-10"></div>
              <div className="bg-gradient rounded-full overflow-hidden w-full h-full relative">
                <img
                  src="/images/profile1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h2 className="text-gradient font-primary text-[24px] mt-4">Yudha Cahyo Saputro</h2>
          </div>
          <div className="w-full lg-pt-[50px] lg:ml-[50px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="/images/1.png"
                    alt=""
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient bacdrop backdrop-blu">Jquery</h4>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="/images/2.png"
                    alt=""
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient bacdrop backdrop-blu">Bootstarap</h4>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="/images/3.png"
                    alt=""
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient bacdrop backdrop-blu">CSS</h4>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="/images/4.png"
                    alt=""
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient bacdrop backdrop-blu">HTML</h4>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
