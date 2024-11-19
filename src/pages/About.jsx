import React from "react";
import Footer from "../components/Footer";

function About() {
  // stuent says
  const TestimonialCard = ({ name, role, testimonial, image }) => (
    <div className="min-w-[300px] bg-gray-200 rounded-lg shadow-lg p-6 mx-3 hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </div>
      <p className="text-gray-700 text-center mb-4">"{testimonial}"</p>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
      </div>
    </div>
  );
  const testimonials = [
    {
      name: "John Doe",
      role: "Student",
      testimonial:
        "This platform has transformed my learning experience! Highly recommend it.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VGpDd-bk9RU9H_tqHaYfkT3eVCvpBbgZVeqx1jNY3OLtQQtrpTOqpCL4zBXm2GErza4&usqp=CAU",
    },
    {
      name: "Jane Smith",
      role: "Graduate",
      testimonial: "The courses are well-structured and easy to follow.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TdoH9z2aejGb9JyID1bU3zu4pjQui02P40q0QEJ3_WfK-mcVVFAY3rqtP5wMmNXxtKg&usqp=CAU",
    },
    {
      name: "Alice Johnson",
      role: "Professional",
      testimonial: "Fantastic courses and knowledgeable instructors!",
      image:
        "https://media.istockphoto.com/id/1482662529/vector/student-graduation-concept-happy-and-excited-girl-character-graduates-proud-of-her.jpg?s=612x612&w=0&k=20&c=gKlgSsSij0dC6UeGQSH2w7y-7ElmGr0sCOfNWwHYixk=",
    },
    {
      name: "Mike Brown",
      role: "New Learner",
      testimonial:
        "I'm so happy with the content and the platform's ease of use.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKXMrsiGXqafnthFu9XMzV6dcV3Qxl52UklzB__q5gaN0lgp0UqF4miPqvPqLoI9JNfk&usqp=CAU",
    },
    {
      name: "John Doe",
      role: "Student",
      testimonial:
        "This platform has transformed my learning experience! Highly recommend it.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VGpDd-bk9RU9H_tqHaYfkT3eVCvpBbgZVeqx1jNY3OLtQQtrpTOqpCL4zBXm2GErza4&usqp=CAU",
    },
    {
      name: "Jane Smith",
      role: "Graduate",
      testimonial: "The courses are well-structured and easy to follow.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TdoH9z2aejGb9JyID1bU3zu4pjQui02P40q0QEJ3_WfK-mcVVFAY3rqtP5wMmNXxtKg&usqp=CAU",
    },
    {
      name: "Alice Johnson",
      role: "Professional",
      testimonial: "Fantastic courses and knowledgeable instructors!",
      image:
        "https://media.istockphoto.com/id/1482662529/vector/student-graduation-concept-happy-and-excited-girl-character-graduates-proud-of-her.jpg?s=612x612&w=0&k=20&c=gKlgSsSij0dC6UeGQSH2w7y-7ElmGr0sCOfNWwHYixk=",
    },
    {
      name: "Mike Brown",
      role: "New Learner",
      testimonial:
        "I'm so happy with the content and the platform's ease of use.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKXMrsiGXqafnthFu9XMzV6dcV3Qxl52UklzB__q5gaN0lgp0UqF4miPqvPqLoI9JNfk&usqp=CAU",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="sm:text-4xl font-bold text-gray-900 mb-4 ">
              About Our Platform
            </h2>
            <p className="text-gray-700 text-lg mb-6 ">
              Our platform offers a wide variety of courses designed to help you
              acquire new skills and advance your career. We are committed to
              providing high-quality content from expert instructors in a
              user-friendly learning environment.
            </p>
            <p className="text-gray-700 text-lg ">
              Join us and become part of a community of learners who are
              dedicated to self-improvement and lifelong learning.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center ">
            <img
              src="https://www.shutterstock.com/image-vector/little-kid-study-on-desk-600nw-2492463355.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg object-cover h-80 w-full md:w-4/5"
            />
          </div>
        </div>
        {/*////////////////////// next img work  */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://img.freepik.com/premium-vector/group-kids-standing-top-podium-with-medals-it_1016520-20714.jpg"
                alt="Learning Platform"
                className="rounded-lg shadow-lg object-cover h-full w-full md:w-4/5 "
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About Our Online Learning Platform
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Our platform provides quality online courses from certified
                experts to empower you in your educational journey. With a
                commitment to accessible and flexible learning, we help students
                and professionals alike achieve their goals through a
                supportive, resource-rich environment.
              </p>

              {/* Categories Section */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                  <p className="text-gray-700">Certified Teachers</p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-blue-600">5,000+</h3>
                  <p className="text-gray-700">Students Enrolled</p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                  <p className="text-gray-700">Courses Available</p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                  <p className="text-gray-700">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* child says about us */}
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Students Say About Us
          </h2>

          {/* Horizontal Scrollable Container */}
          <div className="overflow-x-scroll flex space-x-6 p-4 -mx-6 pb-8 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
