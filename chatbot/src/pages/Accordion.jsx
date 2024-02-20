import React from "react";

const Accordion = () => {
  const accordionItems = {
    item1: {
      title:
        "Mejorando el Bienestar Emocional a través de la Inteligencia Conversacional",
      content:
        "Nuestro sistema de inteligencia conversacional está redefiniendo cómo abordamos el bienestar emocional y la educación en salud. Al aprovechar las capacidades de la IA, estamos inaugurando una nueva era en la atención médica y la conciencia sobre la salud mental, capacitando a los humanos para navegar por el complejo panorama con empatía y precisión.",
    },
    item2: {
      title: "Conversaciones Personalizadas, Aprendizaje Personalizado",
      content:
        "Nuestra tecnología facilita diálogos personalizados que se ajustan a las necesidades de cada individuo. Las personas pueden practicar sus habilidades de diagnóstico y comunicación en un entorno seguro y controlado al tener conversaciones realistas con pacientes simulados. Es un método personalizado de apoyo a la medicina.",
    },
    item3: {
      title: "Algoritmos de IA Expresamente Elaborados:",
      content:
        "Los modernos algoritmos de IA han sido construidos minuciosamente e incluidos en nuestro sistema. Además de simular eficazmente síntomas y comportamientos, estos algoritmos ofrecen un análisis perspicaz e ideas útiles para apoyar el proceso de diagnóstico. Es la fusión de conocimiento y tecnología.",
    },
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="about-title">DESARROLLO</span>
            <h2 className="mb-5 dev-title">
              Mejorando el Bienestar Emocional con <br></br>Conversaciones
              Inteligentes
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
