import { useRef } from "react";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import Footer from "../components/Footer";

const Home = () => {
  // Reference for the courses section
  const coursesRef = useRef(null);

  // Scroll to the courses section on button click
  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <div
        className="relative md:h-screen bg-cover bg-center sm:w-full"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20210710/original/pngtree-learning-reading-knowledge-accumulation-background-template-picture-image_1004070.jpg')",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text content */}
        <div className="relative flex flex-col items-center h-full text-center text-white px-6">
          <h1 className="md:text-5xl  font-bold mb-6 mt-12 text-lg">
            Welcome to Online Learning
          </h1>
          <h3 className="font-semibold md:text-2xl mb-12">
            Education Needs Complete Solutions
          </h3>
          <p className="md:text-xl mb-6">
            Discover new courses and improve your skills!
          </p>
          <button
            onClick={scrollToCourses}
            className="bg-black mb-44 px-4 py-2  text-lg font-medium rounded shadow-lg hover:bg-blue-700"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Courses Section */}
      <div
        ref={coursesRef}
        className="container mx-auto p-3 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
      >
        {/* Course Card 1 */}
        <div className="bg-gray-200 border shadow-lg rounded-lg overflow-hidden p-4 text-center hover:bg-blue-600 hover:text-white   transition transform  hover:scale-105">
          <PiChalkboardTeacherFill className="text-4xl m-auto mb-4 w-16 h-16" />
          <h2 className="text-2xl font-bold mb-2">Certified Teachers</h2>
          <p className="text-gray-700 mb-4">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>

        {/* Course Card 2 */}
        <div className="bg-gray-200 border shadow-lg rounded-lg overflow-hidden p-4 text-center hover:bg-yellow-600 hover:text-white   transition transform  hover:scale-105">
          <MdOutlineCastForEducation className="text-4xl m-auto mb-4 w-16 h-16" />

          <h2 className="text-2xl font-bold mb-2">Special Education</h2>
          <p className="text-gray-700 mb-4">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>

        {/* Course Card 3 */}
        <div className="bg-gray-200 border shadow-lg rounded-lg overflow-hidden p-4 text-center hover:bg-green-600 hover:text-white   transition transform  hover:scale-105">
          <GiBookshelf className="text-4xl m-auto mb-4 w-16 h-16" />
          <h2 className="text-2xl font-bold mb-2">Book & Library</h2>
          <p className="text-gray-700 mb-4">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
