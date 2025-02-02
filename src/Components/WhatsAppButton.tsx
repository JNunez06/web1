import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-40"
    >
      {/* Imagen del ícono de WhatsApp */}
      <img
        src="/Images/whatsapp-icon.png" // Ruta de la imagen
        alt="WhatsApp"
        className="w-10 h-10" // Ajusta el tamaño de la imagen
      />
    </a>
  );
};

export default WhatsAppButton;
