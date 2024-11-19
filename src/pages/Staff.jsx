import React from "react";
import Footer from "../components/Footer";

const TeacherCard = ({ name, expertise, image }) => (
  <div className="bg-gray-200  shadow-md rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{expertise}</p>
  </div>
);

function Staff() {
  const teachers = [
    {
      name: "Dr. John Doe",
      expertise: "Artificial Intelligence",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    {
      name: "Prof. Jane Smith",
      expertise: "Data Science & Machine Learning",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3GG6aybJyXTftz5BUFGQxEOdDzTrI6Xttdfa4VWvK6v1OWuDNYn5_Ojid0lahAmrhSY&usqp=CAU",
    },
    {
      name: "Dr. Alice Johnson",
      expertise: "Cybersecurity",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/026/528/small_2x/illustration-female-avatar-in-flat-style-free-vector.jpg",
    },
    {
      name: "Prof. Michael Brown",
      expertise: "Software Engineering",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOdGwnOlJp3fyW99wAIhwjGZzT6w5BP3o0ekpS4-U30VCm8nvvY0cA89dn5D1q9g4_HA&usqp=CAU",
    },
    {
      name: "Dr. Clara White",
      expertise: "Cloud Computing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqeQZuP_VNDCk-4jm8mkKHP_WvOaGc1pC8l4s7pkhnhbAeETiQiDFuYKx1Wl77Rl4MRE&usqp=CAU",
    },
    {
      name: "Prof. Jane Smith",
      expertise: "Data Science & Machine Learning",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3GG6aybJyXTftz5BUFGQxEOdDzTrI6Xttdfa4VWvK6v1OWuDNYn5_Ojid0lahAmrhSY&usqp=CAU",
    },
    {
      name: "Dr. Alice Johnson",
      expertise: "Cybersecurity",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/026/528/small_2x/illustration-female-avatar-in-flat-style-free-vector.jpg",
    },
    {
      name: "Prof. Michael Brown",
      expertise: "Software Engineering",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOdGwnOlJp3fyW99wAIhwjGZzT6w5BP3o0ekpS4-U30VCm8nvvY0cA89dn5D1q9g4_HA&usqp=CAU",
    },
    {
      name: "Dr. Clara White",
      expertise: "Cloud Computing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqeQZuP_VNDCk-4jm8mkKHP_WvOaGc1pC8l4s7pkhnhbAeETiQiDFuYKx1Wl77Rl4MRE&usqp=CAU",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Teaching Staff
          </h1>
          <p className="text-gray-600 mt-4">
            Meet our experienced and dedicated teaching staff who bring a wealth
            of knowledge to our students.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} {...teacher} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Staff;
