import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, sender: string }[]>([]);
  const [userMessage, setUserMessage] = useState("");

  // Maneja el click en el botón flotante para abrir/cerrar el chatbot
  const toggleChatbot = () => setIsOpen((prev) => !prev);

  // Maneja el envío de mensajes
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { text: userMessage, sender: 'user' }]);
      setUserMessage("");

      // Simulación de respuesta del bot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Gracias por tu mensaje. ¿En qué más puedo ayudarte?", sender: 'bot' }
        ]);
      }, 1000);
    }
  };

  // Maneja el cierre del chatbot
  const handleCloseChatbot = () => setIsOpen(false);

  return (
    <div className={`fixed bottom-30 right-5 z-50 ${isOpen ? 'w-96 h-96' : 'w-16 h-16'}`}>

      {/* Botón flotante para abrir/cerrar el chatbot */}
      <button
        className="p-0 bg-transparent border-none"
        onClick={toggleChatbot}
      >
        <img
          src="/Images/chatbot-icon.png" // Ruta de la imagen
          alt="Chatbot"
          className="w-16 h-16 rounded-full shadow-lg" // Ajusta el tamaño y forma de la imagen
        />
      </button>

      {/* Ventana del Chatbot */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 bg-white p-4 rounded-lg shadow-lg w-full h-full">
          <div className="flex flex-col h-full">
            {/* Botón para cerrar el chatbot */}
            <button
              onClick={handleCloseChatbot}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times; {/* Símbolo de "X" */}
            </button>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-2 m-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Entrada de texto */}
            <div className="flex">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-l-lg"
                placeholder="Escribe tu mensaje..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-all duration-300"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
