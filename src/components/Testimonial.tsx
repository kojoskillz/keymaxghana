import React from "react";

const testimonials = [
  {
    name: "Linda Osei",
    role: "Facilities Manager, GreenTech Solutions",
    initials: "LO",
    quote:
      "Keymax completely transformed how we manage access at our facility. No more lost keys or complicated lock changes—just simple, secure, and smart access control. The platform is incredibly easy to use, and the support team is top-notch.",
  },
  {
    name: "Kwame Mensah",
    role: "IT Director, FutureTech Institute",
    initials: "KM",
    quote:
      "With Keymax, we finally have a reliable way to manage staff and student access across multiple buildings. It’s efficient, intuitive, and saves us time every day.",
  },
  {
    name: "Ama Boateng",
    role: "Homeowner",
    initials: "AB",
    quote:
      "As a homeowner, I love the convenience Keymax brings. I can grant access to guests remotely, monitor entries, and never worry about lost keys again. It’s peace of mind in a smart app.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
