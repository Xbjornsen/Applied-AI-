import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Applied AI has been a game changer for our business. Their tools have helped us automate our workflows and save countless hours on data entry. Highly recommended!",
      author: "John Smith",
      company: "ABC Corporation",
    //   image: customerImage1,
    },
    {
      id: 2,
      quote:
        "The Applied AI team is incredibly knowledgeable and responsive. They worked with us to develop a custom solution that perfectly fit our needs. We couldn't be happier with the results!",
      author: "Jane Doe",
      company: "XYZ Inc.",
    //   image: customerImage2,
    },
    {
      id: 3,
      quote:
        "Thanks to Applied AI, we've been able to improve our predictive models and gain valuable insights into our customers. Their machine learning expertise is top notch.",
      author: "Bob Johnson",
      company: "123 Industries",
    //   image: customerImage3,
    },
  ];

  return (
    <div className="bg-slate-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Testimonials
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              //image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
