// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-green-700 flex flex-col p-4">
      {/* Première moitié */}
      <div className="flex flex-col justify-end items-center h-1/2 w-full">
        {/* Image SVG alignée en bas */}
        <div className="w-32 h-32 bg-gray-300 rounded flex items-center justify-center">
          <img
            src="./PapaNoel.svg"
            alt="Papa Noel"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Deuxième moitié */}
      <div className="flex flex-col items-center justify-center h-1/2 w-full">
        <h1 className="text-4xl font-bold text-white">Secret Santa</h1>
        <button
          onClick={onStart}
          className="mt-8 bg-white text-green-700 font-bold text-lg px-8 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Commencer
        </button>
      </div>
    </div>


  );
}
