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
        "Los modernos algoritmos de IA han sido meticulosamente construidos e integrados en nuestro sistema. Además de simular eficazmente síntomas y comportamientos, estos algoritmos proporcionan un análisis perspicaz e ideas útiles para respaldar el proceso. Es la fusión de conocimiento y tecnología.",
    },
    item4: {
      title: "Chatbot Conversacional",
      content:
        "Nuestro chatbot conversacional de salud mental es tu compañero virtual para el bienestar emocional. Con una interfaz amigable y conversaciones empáticas, te ofrece apoyo instantáneo, herramientas prácticas y recursos útiles para gestionar la depresión.",
    },
    item5: {
      title: "Chatbot Informativo",
      content:
        "Nuestro chatbot informativo sobre salud mental es tu fuente confiable de conocimiento y recursos para entender y abordar los desafíos relacionados con el bienestar emocional. Ofrece contenido diseñado para promover la conciencia, la comprensión y la acción en torno a la salud mental. Únete a nosotros en esta misión de cambio, donde cada visita a nuestro sitio es un paso hacia una comunidad más saludable y solidaria.",
    },
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{ height: "100%", marginBottom: "10%" }}
      >
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
