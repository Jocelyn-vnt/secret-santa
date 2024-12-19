import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const addParticipant = () => {
    if (currentName.trim() !== "") {
      onAddParticipant(currentName);
      setCurrentName("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center  bg-gradient-to-b from-red-900 to-red-700 text-white py-24">
      <div className="absolute top-0 right-4 bg-white h-20 p-5 rounded-b-full">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-3xl">
          <FaBars />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white flex flex-col items-center justify-center">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-red-800 text-3xl">
            <FaTimes />
          </button>
          <div>
            
          </div>
          <nav>
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <a href="#" className="text-red-800 font-bold text-2xl">
                  Secret Santa
                </a>
              </li>
              <li>
                <a href="#" className="text-red-800 hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-red-800 hover:text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-red-800 hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <h1 className="text-5xl font-extrabold mb-10 text-center">
        <div className="flex justify-center w-full">
          <img src="./Members.svg" alt="" className="w-1/2" />
        </div>
      </h1>

      <div className="flex flex-col items-center w-full space-y-4">
        {participants.map((name, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white text-red-700 w-3/4 max-w-lg px-4 py-3 rounded-lg shadow-md"
          >
            <span className="font-semibold text-lg">{name}</span>
            <button
              className="text-red-600 hover:text-red-800 font-bold"
              onClick={() => onRemoveParticipant(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex w-3/4 max-w-lg space-x-2">
          <input
            type="text"
            className="flex-grow px-4 py-3 rounded-l-lg border-none text-gray-800 focus:ring focus:ring-green-400 outline-none"
            placeholder="Enter a name"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addParticipant()}
          />
          <button
            className="bg-green-500 px-6 py-3 rounded-r-lg font-bold text-white hover:bg-green-600"
            onClick={addParticipant}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
