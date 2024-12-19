// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="h-screen bg-green-700 flex flex-col">
      {/* Première moitié */}
      <div className="flex flex-col justify-end items-center h-1/2 w-full">
        {/* Image SVG alignée en bas */}
        <div className="w-44 h-44 rounded flex items-center justify-center">
          <img
            src="./PapaNoel.svg"
            alt="Papa Noel"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Deuxième moitié */}
      <div className="flex flex-col items-center justify-between h-1/2 pb-20 px-4">
        <h1 className="text-5xl text-white font-modak text-center"> Secret Santa 
        start now !</h1>
        <button
          onClick={onStart}
          className="mt-8 text-2xl bg-white text-green-700 border-4 border-green-800 w-full px-10 py-5 rounded-full shadow hover:bg-gray-100 transition font-poppins uppercase font-bold "
        >
          Commencer
        </button>
      </div>
    </div>



  );
}
