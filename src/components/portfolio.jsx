import React from "react"
import { Helmet } from "react-helmet"
import colorSupport from "supports-color"

console.log(colorSupport)

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="section min-h-screen mt-40"
    >
      <Helmet>
        <title>Portfolio - Yudha Cahyo Saputro</title>
        <meta
          name="description"
          content="Your portfolio showcasing your projects and expertise."
        />
        <meta
          name="keywords"
          content="portfolio, projects, expertise, Yudha Cahyo Saputro"
        />
        <meta
          property="og:title"
          content="Portfolio - Yudha Cahyo Saputro"
        />
        <meta
          property="og:description"
          content="Your portfolio showcasing your projects and expertise."
        />
        <meta
          property="og:image"
          content="/images/your-profile1.jpg"
        />
      </Helmet>
      <div className="container mx-auto max-w-[1200px] px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10">
          <div className="order-2 lg:order-1 mt-3 lg:w-1/2">
            <h4 className="text-secondary font-secondary text-[24px] mb-4">Kumpulan Proyek Saya</h4>
            <div className="text-gradient font-primary text-[24px]">
              Berikut adalah kumpulan proyek yang telah saya kerjakan. Saya memiliki pengalaman dalam mengembangkan proyek-proyek yang beragam, mulai dari proyek web, mobile, hingga proyek lainnya.
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:w-1/2">
            <h2 className="text-gradient font-primary text-[50px]">08</h2>
            <h2 className="text-gradient font-secondary text-[24px]">completed Project</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mb-10">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port1.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 1</h3>
                <p className="text-white/90 text-sm">Description of project 1</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port2.png"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 2</h3>
                <p className="text-white/90 text-sm">Description of project 2</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port3.png"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 3</h3>
                <p className="text-white/90 text-sm">Description of project 3</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port4.png"
              alt="Project 4"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 4</h3>
                <p className="text-white/90 text-sm">Description of project 4</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port5.png"
              alt="Project 5"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 5</h3>
                <p className="text-white/90 text-sm">Description of project 5</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port6.png"
              alt="Project 6"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 6</h3>
                <p className="text-white/90 text-sm">Description of project 6</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port7.png"
              alt="Project 7"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 7</h3>
                <p className="text-white/90 text-sm">Description of project 7</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group">
            <img
              src="/images/port8.png"
              alt="Project 8"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white text-lg font-bold mb-2">Project 8</h3>
                <p className="text-white/90 text-sm">Description of project 8</p>
                <button className="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-all">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
