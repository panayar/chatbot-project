/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import "./Chat.scss";
import { useLocation } from "wouter";
import Navbar from "./navbar/Navbar";
import SideMenu from "./sideMenu/SideMenu";
import ChatLog from "./chatLog/ChatLog";
import ChatInput from "./chatInput/ChatInput";
import Modal from "../components/Modal/Modal";

import { login } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ChatOption from "./chatOption/ChatOption";

function Chat() {
  // Redux
  const [, setLocation] = useLocation();
  const dispatch = useDispatch();

  // Manejo de mensajes
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! Soy tu chatbot. ¡Bienvenido a esta experiencia! Aquí, tenemos dos opciones para ti. Si deseas conversar, selecciona **Chatbot Conversacional**; si prefieres obtener información sobre la depresión, elige **Chat Informativo**.¡Estoy aquí para ayudarte en lo que necesites!",
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [chatOption, setChatOption] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Estado para controlar la visibilidad del modal
  const chatInputRef = useRef(null);
  const chatLogRef = useRef(null);

  // Modal de Cerrar Sesión
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [firstTimeOptionSelect, setFirstTimeOptionSelect] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(true);

  //user token
  const userToken = useSelector((state) => state.user.token);

  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    //save token in localhost

    localStorage.setItem("userToken", userToken);
  });

  //user send message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = { text: newMessage, isUser: true };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    chatInputRef.current.focus();
    scrollToBottom();

    handleChatReply({ message: newMessage, chatType: chatOption });
  };

  const handleChatReply = async ({ message, chatType }) => {
    const messageJson = {
      question: message,
    };

    const deleteLoadingMessage = () => {
      setMessages((prevMessages) => prevMessages.slice(0, -1));
    };

    if (chatType === "conversational") {
      //consume chatbot service
      try {
        const response = await fetch(
          "https://conversemos-back-end.onrender.com/api/chatbotDetection",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify(messageJson),
          }
        );

        const data = await response.text();
        const dataJson = JSON.parse(data);
        const reply =
          dataJson.pregunta || dataJson.recomendation || dataJson.ChatBot;

        const replyMessage = { text: reply, isUser: false };
        setMessages((prevMessages) => [...prevMessages, replyMessage]);
        scrollToBottom();
      } catch (error) {
        console.log(error);
      }
    }

    if (chatType === "informative") {
      const userMessageInformative = {
        message: message,
      };

      handleLoading();

      try {
        const response = await fetch(
          "https://conversemos-back-end.onrender.com/api/chatbot",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify(userMessageInformative),
          }
        );

        const data = await response.text();
        const dataJson = JSON.parse(data);
        deleteLoadingMessage();
        var reply =
          dataJson.message?.response?.texto || dataJson.message?.error;

        const replyMessage = { text: reply, isUser: false };
        setMessages((prevMessages) => [...prevMessages, replyMessage]);
        scrollToBottom();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLoading = () => {
    const loadingMessage = { text: "Espera un momento...", isUser: false };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);
    scrollToBottom();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
    localStorage.setItem("userToken", "");
  };

  const confirmLogout = () => {
    const isLogged = false;
    setLocation("/");
    // Dispatch login action with token and isLoggedIn
    dispatch(login({ isLogged, token: "" }));
    localStorage.setItem("userToken", "");
    localStorage.setItem("isLoggedIn", false);
    setShowLogoutModal(false);
  };
  //select chat option
  const handleChatOption = ({ option }) => {
    const chatMessages = {
      conversational: [
        { text: "¡Hola! Soy tu chatbot conversacional.", isUser: false },
        { text: `Para iniciar el chat por favor di "Hola"`, isUser: false },
      ],
      informative: [
        { text: "¡Hola! Soy tu chatbot informativo.", isUser: false },
      ],
    };
    const addNewMessage = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    const resetMessages = () => {
      setMessages([]);
    };

    setChatOption(option);

    if (firstTimeOptionSelect) {
      setInputDisabled(false);
      setFirstTimeOptionSelect(false);
      resetMessages();

      const messages = chatMessages[option];
      messages.forEach((message, index) => {
        setTimeout(() => {
          addNewMessage(message);
        }, index * 1000);
      });
    } else {
      if (option !== chatOption) {
        setShowConfirmationModal(true);
      } else {
        resetMessages();

        const messages = chatMessages[option];
        messages.forEach((message, index) => {
          setTimeout(() => {
            addNewMessage(message);
          }, index * 1000);
        });
      }
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    if (localToken) {
      dispatch(login({ isLoggedIn: true, token: localToken }));
    }

    chatInputRef.current.focus();
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    <>
      <div className="chat">
        <Navbar handleClick={handleChatOption} />
        <SideMenu handleLogout={handleLogout} />
        <section className="chatbox" ref={chatLogRef}>
          <p
            className={`mt-4  ${!firstTimeOptionSelect ? "d-none" : ""}`}
            style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Selecciona una opción
          </p>

          <div className="chatbot-options container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <ChatOption
                  option="conversational"
                  title="Chatbot Conversacional"
                  description="Un chatbot conversacional que simula una conversación con un terapeuta."
                  selectedOption={chatOption}
                  handleChatOption={() =>
                    handleChatOption({ option: "conversational" })
                  }
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <ChatOption
                  option="informative"
                  title="Chatbot Informativo"
                  description="Un chatbot que proporciona información sobre la depresión y recursos para su tratamiento."
                  selectedOption={chatOption}
                  handleChatOption={() =>
                    handleChatOption({ option: "informative" })
                  }
                />
              </div>
            </div>
          </div>
          <ChatLog messages={messages} />
          <ChatInput
            disabled={inputDisabled}
            newMessage={newMessage}
            handleSendMessage={handleSendMessage}
            handleChange={(e) => setNewMessage(e.target.value)}
            handleKeyPress={handleKeyPress}
            chatInputRef={chatInputRef}
          />
        </section>
      </div>

      {/* Modal de logout  */}
      <Modal
        title="Cerrar Sesión"
        body="¿Estás seguro de cerrar sesión?"
        onSave={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
        show={showLogoutModal}
      />

      {/* Modal de confirmación para cambiar de opción */}
      <Modal
        title="Cambiar de Opción"
        body="¿Estás seguro de cambiar de opción? Todos los mensajes actuales se perderán."
        onSave={() => {
          setChatOption(chatOption); // Cambia la opción del chat
          setShowConfirmationModal(false);
          setTimeout(() => {
            handleChatOption({
              option:
                chatOption === "conversational"
                  ? "conversational"
                  : "informative",
            });
          }, 1);
        }}
        onCancel={() => {
          handleChatOption({
            option:
              chatOption === "conversational"
                ? "informative"
                : "conversational",
          });
          setShowConfirmationModal(false);
        }}
        show={showConfirmationModal}
      />
    </>
  );
}

export default Chat;
