import React, { useState } from 'react';
import '../css/faq.css';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "How many team members do I need?",
      answer: "You can participate individually or in teams of 3 to 5 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team."
    },
    {
      question: "Will the hackathon be in person or online?",
      answer: "The hackathon will be held online."
    },
    {
      question: "How much are the participation fees?",
      answer: "The participation fees are $50 per team."
    },
    {
      question: "What are the prerequisites to participate in this hackathon?",
      answer: "To participate, you must be a student or a working professional in the technology industry. No prior hackathon experience is required."
    },
    {
      question: "How do I register?",
      answer: "You can register for the hackathon on our website. The registration deadline is February 1st."
    },
    {
      question: "What is the venue for Status Code 1?",
      answer: "The hackathon will be held at the Sheraton Grand Hotel in downtown."
    },
    {
      question: "Is food and accommodation provided free of charge, or are there any associated costs?",
      answer: "Food and accommodation will be provided free of charge for all participants."
    },
    {
      question: "Can a friend join our team after we have already submitted the application for registration?",
      answer: "Yes, you can add friends to your team even after submitting the registration. Just contact the organizers, and they will assist you in making the changes."
    }
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">
        Frequently Asked <span className="text-purple-600">Questions</span>
      </h1>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question flex justify-between items-center" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <div className="faq-icons flex items-center gap-2">
                {openIndex === index ? (
                  <>
                    <ChevronLeft color="yellow" strokeWidth={2} />
                    <Minus strokeWidth={2} color="yellow" className="faq-icon" />
                    <ChevronRight color="yellow" strokeWidth={2} />
                  </>
                ) : (
                    <>
                    <ChevronLeft color="yellow" strokeWidth={2} />
                  <Plus strokeWidth={2} color="yellow" className="faq-icon" />
                  <ChevronRight color="yellow" strokeWidth={2} />
                  </>
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
