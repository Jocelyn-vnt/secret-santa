import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import Snowfall from "react-snowfall";

// Ce composant affiche la liste des assignments

// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className="grow flex flex-col items-center text-white">
      <Snowfall/>
      <div className="absolute p-4 right-4 bg-white rounded-b-full">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-3xl">
          <FaBars />
        </button>
      </div>
      <div className={`absolute top-0 right-0 w-2/3 h-full bg-white grid grid-rows-7 transition-transform duration-500 py-10 ${menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="row-span-1 flex flex-col justify-start items-center w-full mt-8 gap-5">
          <img src="/Members.svg" alt="" className="w-1/2"/>
          <p className="text-5xl text-black font-modak">John Doe</p>
        </div>
        <nav className="row-span-5 flex justify-center items-center">
          <ul className="flex flex-col items-center space-y-4 text-3xl font-bold">
            <li className="border-b border-green-800 w-full text-center pb-4">
              <a href="#" className="text-green-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li className="border-b border-red-800 w-full text-center pb-4 ">
              <a href="#" className="text-red-800 hover:text-gray-600">
                About
              </a>
            </li>
            <li className="w-full text-center">
              <a href="#" className="text-black hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-red-800 text-3xl">
          <FaTimes />
        </button>
      </div>
      <h1 className="text-5xl font-extrabold mb-10 text-center">
        <div className="flex justify-center w-full pt-20">
          <img src="./Members.svg" alt="" className="w-2/3" />
        </div>
      </h1>

      <ul className="space-y-2">
        {assignments.map((assignment, index) => (
          <li key={index}>
            <span>{assignment.giver}</span> offre un beau cadeau à{" "}
            <span>{assignment.receiver}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}