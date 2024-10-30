import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-5 bg-gray-100">
      <h1 className="text-center text-3xl text-gray-800 mb-5">
        Política de Privacidad
      </h1>

      <p className="mb-4">
        Esta Política de Privacidad describe cómo recopilamos, usamos y
        protegemos tu información personal cuando utilizas nuestro bot de
        WhatsApp para gestionar tus finanzas personales.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">
        1. Información que recopilamos
      </h2>
      <p className="mb-2">
        Podemos recopilar información personal que compartas con nosotros, como:
      </p>
      <ul className="list-disc ml-5 mb-4">
        <li>Nombre y número de teléfono.</li>
        <li>
          Datos relacionados con tus ingresos y gastos, proporcionados a través
          del bot.
        </li>
        <li>Interacciones con el bot (mensajes, comandos, etc.).</li>
      </ul>

      <h2 className="text-gray-700 text-2xl mt-5">
        2. Cómo usamos tu información
      </h2>
      <p className="mb-2">Usamos tu información para:</p>
      <ul className="list-disc ml-5 mb-4">
        <li>
          Proporcionar el servicio de gestión de finanzas a través del bot.
        </li>
        <li>Mejorar el rendimiento y funcionalidad del bot.</li>
        <li>Responder a tus consultas o solicitudes de soporte.</li>
      </ul>

      <h2 className="text-gray-700 text-2xl mt-5">
        3. Compartir tu información
      </h2>
      <p className="mb-2">
        No compartimos tu información personal con terceros, excepto cuando sea
        necesario para cumplir con la ley o para proteger nuestros derechos y
        los de otros usuarios.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">
        4. Seguridad de tu información
      </h2>
      <p className="mb-2">
        Nos esforzamos por proteger la información personal que nos
        proporcionas. Implementamos medidas de seguridad razonables para evitar
        el acceso no autorizado, alteración o divulgación de tus datos.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">5. Retención de datos</h2>
      <p className="mb-2">
        Conservaremos tu información personal mientras utilices el bot. Si
        decides dejar de usar el servicio, eliminaremos tu información de
        nuestras bases de datos, excepto cuando sea necesario para cumplir con
        obligaciones legales.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">6. Tus derechos</h2>
      <p className="mb-2">
        Tienes derecho a acceder, corregir o eliminar tu información personal en
        cualquier momento. Si deseas ejercer estos derechos, por favor
        contáctanos a través de nuestro soporte en WhatsApp.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">
        7. Cambios en esta política
      </h2>
      <p className="mb-2">
        Nos reservamos el derecho de modificar esta Política de Privacidad en
        cualquier momento. Te notificaremos sobre cualquier cambio importante y
        tu uso continuado del bot implicará la aceptación de la política
        actualizada.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">8. Contacto</h2>
      <p className="mb-4">
        Si tienes preguntas sobre nuestra Política de Privacidad, por favor
        contáctanos a través de nuestro soporte en WhatsApp.
      </p>

      <p className="font-bold">
        <strong>Última actualización:</strong> Octubre 23, 2024
      </p>
    </div>
  );
};

export default PrivacyPolicy;
