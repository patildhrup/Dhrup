import React from "react";
import { FaClock, FaBoxes, FaShieldAlt, FaHeartbeat, FaHospital, FaHandshake } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const ProjectAim = () => {
  return (
    <div className="py-8 px-4 md:px-8 bg-white rounded-lg shadow-md my-6">
      <div className="flex items-center justify-center mb-4">
        <MdOutlineHealthAndSafety className="text-green-600 text-4xl mr-3" />
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome to TransplantNet
        </h2>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600 mb-4">
          Revolutionizing organ transfer with speed, efficiency, and precision
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FaClock className="text-green-600 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Time-Critical Solution</h3>
          <p className="text-gray-600">
            Reducing the time between organ availability and transfer, replacing manual processes with digital efficiency
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FaBoxes className="text-blue-600 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Centralized Inventory</h3>
          <p className="text-gray-600">
            Display organs from multiple procurement centers in one platform, eliminating the need for individual communication
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-purple-600 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Requests</h3>
          <p className="text-gray-600">
            Hospitals can request compatible organs and confirm transfers with secure payment processing
          </p>
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <div className="flex items-center mb-3">
          <FaHeartbeat className="text-green-700 text-2xl mr-2" />
          <h3 className="text-xl font-bold text-green-800">Our Mission</h3>
        </div>
        <p className="text-gray-700 mb-4">
          TransplantNet transforms the organ transfer process from a manual, error-prone system to a streamlined digital platform. 
          By reducing administrative delays and improving communication between procurement centers and hospitals, 
          we help ensure that life-saving organs reach patients faster than ever before.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6 mb-6">
          <div className="flex items-start">
            <FaHospital className="text-green-600 text-xl mt-1 mr-3" />
            <div>
              <h4 className="font-bold text-gray-800">For Hospitals</h4>
              <p className="text-gray-600">Quick access to available organs with compatibility matching</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaHandshake className="text-green-600 text-xl mt-1 mr-3" />
            <div>
              <h4 className="font-bold text-gray-800">For Procurement Centers</h4>
              <p className="text-gray-600">Streamlined inventory management and request processing</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={() => window.scrollTo({top: document.getElementById('organ-section').offsetTop, behavior: 'smooth'})}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center">
            <FaBoxes className="mr-2" /> View Available Organs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectAim; 