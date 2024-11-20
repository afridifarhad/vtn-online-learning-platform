import React, { useState } from "react";
import { FaUserGraduate, FaChair, FaCalendarAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  const courses = [
    {
      title: "Introduction to Computer Science",
      teacher: "Dr. John Doe",
      seats: 20,
      year: 2024,
      image:
        "https://vectorgraphics.io/images/catalogue/2021/11/30/1009119_800.jpg",
    },
      
          {
            title: "Data Structures & Algorithms",
            teacher: "Prof. Jane Smith",
            seats: 15,
            year: 2024,
            image:
              "https://media.licdn.com/dms/image/D5612AQFHePP38xBmcg/article-cover_image-shrink_600_2000/0/1714203552037?e=2147483647&v=beta&t=LUsEiPufUCgYV9eF9i5QAftuI9yqIuela3CC5YBccrk",
          },
          {
            title: "Web Development Fundamentals",
            teacher: "Dr. Alice Johnson",
            seats: 25,
            year: 2023,
            image:
              "https://img.freepik.com/premium-vector/concept119_773186-441.jpg?semt=ais_hybrid",
          },
          {
            title: "Machine Learning Basics",
            teacher: "Prof. Michael Brown",
            seats: 10,
            year: 2024,
            image:
              "https://img.freepik.com/premium-vector/trendy-design-icon-machine-learning_362714-18.jpg",
          },
          {
            title: "Database Management Systems",
            teacher: "Dr. Clara White",
            seats: 18,
            year: 2023,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AdWkchMvry-OReIC7SzxxkPdonoX_tO9s9xC1xNYCm3MLDl0iE8m2oH6u0XQTlPgRNM&usqp=CAU",
          },
           {
             title: "Software Engineering Principles",
             teacher: "Prof. David Green",
             seats: 12,
             year: 2024,
             image:
               "https://static.vecteezy.com/system/resources/thumbnails/000/180/260/small_2x/Outstanding-Set-of-Software-Engineers-Vectors-3.jpg",
           },
           {
             title: "Artificial Intelligence & Chatbot",
             teacher: "Dr. Emma Blue",
             seats: 8,
             year: 2024,
             image:
               "https://www.squareonemea.com/wp-content/uploads/2023/10/2304.i039.017.F.m004.c9.AI-generated-art-AI-powered-content-creation-isometric-1024x931.jpg",
           },
           {
             title: "Cybersecurity Essentials",
             teacher: "Prof. Brian Black",
             seats: 20,
             year: 2023,
             image:
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H0lbDlYAZzXW9DtosxhHApzCKyF3bUjRQZzFaZdvZmTwr3hPG4fwOfFxZCzMUFZQ78Q&usqp=CAU",
           },



  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    courseName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course.title);
    setFormData({ ...formData, courseName: course.title });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Enrollment successful!", {
          position: "top-center",
          autoClose: 3000,
        });
        setIsModalOpen(false);
        setFormData({ name: "", email: "", age: "", courseName: "" });
      } else {
        toast.error("Failed to enroll. Try again!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error enrolling course:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const CourseCard = ({ title, teacher, seats, year, image }) => (
    <div className="bg-gray-200  shadow-md border rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-48" />
      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FaUserGraduate className="mr-2" />
          <p>Instructor: {teacher}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaChair className="mr-2" />
          <p>Available Seats: {seats}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <FaCalendarAlt className="mr-2" />
          <p>Year: {year}</p>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          onClick={() => handleEnrollClick({ title })}
        >
          Enroll
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Computer Science Courses
          </h1>
          <p className="text-gray-600 mt-4">
            Browse through our computer science courses to learn, enhance your
            skills, and prepare for your future career!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      <Footer />

      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <h2 className="text-2xl font-bold mb-4">Enroll in {selectedCourse}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Course Name:</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 w-full"
              >
                Enroll
              </button>
              <button
                type="button"
                className="mt-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200 w-full"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Courses;
