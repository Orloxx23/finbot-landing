import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-5 bg-gray-100">
      <h1 className="text-center text-3xl text-gray-800 mb-5">Términos y Condiciones</h1>

      <p className="mb-4">
        Bienvenido a nuestro bot de WhatsApp para la gestión de gastos e ingresos. Al utilizar nuestro servicio, aceptas los siguientes términos y condiciones.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">1. Aceptación de los términos</h2>
      <p className="mb-2">
        Al utilizar este bot de WhatsApp, reconoces que has leído y aceptado estos términos. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar el bot.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">2. Uso del bot</h2>
      <p className="mb-2">
        Este bot está diseñado para ayudarte a llevar un registro de tus finanzas personales, incluyendo ingresos y gastos. Nos reservamos el derecho de modificar o descontinuar el servicio en cualquier momento sin previo aviso.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">3. Privacidad</h2>
      <p className="mb-2">
        Nos comprometemos a proteger la privacidad de tus datos. Toda la información que compartas con nosotros a través del bot será tratada de acuerdo con nuestras políticas de privacidad.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">4. Limitación de responsabilidad</h2>
      <p className="mb-2">
        {`El bot se ofrece "tal cual" y no garantizamos la exactitud ni la disponibilidad del servicio en todo momento. No seremos responsables de ningún daño o pérdida que pueda resultar del uso del bot.`}
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">5. Cambios en los términos</h2>
      <p className="mb-2">
        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Te notificaremos sobre cualquier cambio importante y, al continuar utilizando el bot, aceptas los términos actualizados.
      </p>

      <h2 className="text-gray-700 text-2xl mt-5">6. Contacto</h2>
      <p className="mb-4">
        Si tienes alguna pregunta sobre estos términos, por favor contáctanos a través de nuestro soporte en WhatsApp.
      </p>

      <p className="font-bold">
        <strong>Última actualización:</strong> Octubre 23, 2024
      </p>
    </div>
  );
};

export default TermsAndConditions;
