import React from "react";

const Accordion = () => {
  const accordionItems = {
    item1: {
      title: "Revolutionizing Healthcare Education",
      content:
        "Our intelligent conversational system is reshaping the way medical students at the University El Bosque approach the diagnosis of depression. By harnessing the power of AI, we're enabling a more intuitive and effective learning experience, preparing future healthcare professionals to address mental health challenges with empathy and precision.",
    },
    item2: {
      title: "Personalized Conversations, Personalized Learning",
      content:
        "Our technology facilitates customized dialogues that adjust to each individual's needs. Students can practice their diagnostic and communication skills in a secure and controlled environment by having realistic conversations with simulated patients. It's a customized method of teaching medicine.",
    },
    item3: {
      title: "Expertly Crafted AI Algorithms:",
      content:
        "Modern AI algorithms have been painstakingly built and included into our system. In addition to effectively simulating symptoms and behaviors, these algorithms offer insightful analysis and useful insights to support the diagnostic process. It is the fusion of knowledge and technology. ",
    },
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="about-title">DEVELOPMENT</span>
            <h2 className="mb-5 dev-title">
              Elevating Emotional Well-being with <br />
              Intelligent Conversations
            </h2>
            <div className="accordion accordion-flush" id="accordion">
              {Object.keys(accordionItems).map((key, index) => (
                <div className="accordion-item" key={key}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index + 1}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${index + 1}`}
                    >
                      {accordionItems[key].title}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${index + 1}`}
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      {accordionItems[key].content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
