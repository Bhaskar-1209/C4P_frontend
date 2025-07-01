import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ReadMore = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: "ease-in-out" });

    const fetchProject = async () => {
      try {
        const res = await axios.get(`https://c4p-backend.onrender.com/api/projects/${id}`);
        setProject(res.data);
      } catch (error) {
        console.error("Error fetching project details", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div className="text-center py-20 text-gray-600">Loading project...</div>;
  }

  const [coverImage, secondImage] = project.images;

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        data-aos="fade-in"
        className="relative h-[500px] bg-black text-white flex items-center justify-center"
      >
        {coverImage && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
            style={{
              backgroundImage: `url(${coverImage})`,
            }}
          ></div>
        )}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight break-words">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section data-aos="fade-up" className="py-16 w-full bg-white px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#94ae81] uppercase mb-6 text-left">
          Project Impact
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-4 text-gray-700 text-justify break-words">
          {project.description}
        </p>
        {project.googleFormLink && (
          <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
            Learn more or participate by filling out{" "}
            <a
              href={project.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94ae81] underline font-semibold"
            >
              this form
            </a>.
          </p>
        )}
      </section>

      {/* Contributors Section */}
      <section className="flex flex-col md:grid md:grid-cols-2">
        <div data-aos="fade-right" className="relative w-full h-64 md:h-96">
          <img
            src={secondImage || coverImage}
            alt="Project Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#94ae81] opacity-30 mix-blend-multiply"></div>
        </div>

        <div data-aos="fade-left" className="p-6 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#94ae81] uppercase mb-4">Key Contributions</h2>
            {project.contributors && project.contributors.length > 0 ? (
              <ul className="space-y-4 text-[#333] text-base md:text-lg list-inside break-words">
                {project.contributors.map((item, index) => (
                  <li
                    key={index}
                    className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-3 before:h-3 before:bg-[#94ae81] before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No contributors listed.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadMore;
