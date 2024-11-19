import React from "react";
import { FaUserGraduate, FaChair, FaCalendarAlt } from "react-icons/fa";
import Footer from "../components/Footer";

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
  const CourseCard = ({ title, teacher, seats, year, image }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      {/* Course Image */}
      <img src={image} alt={title} className="w-full h-48 " />
      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        {/* Course Details with Icons */}
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
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Enroll
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Computer Science Courses
          </h1>
          <p className="text-gray-600 mt-4">
            Browse through our computer science courses to learn, enhance your
            skills, and prepare for your future career!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;