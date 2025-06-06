import React from 'react'

const Hearder = () => {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-gray-600 mb-6">
            Find and book appointments with the best doctors in your area. 
            Get the care you deserve with MediLink.
          </p>
          <Link to="/doctors">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
              Find Doctors
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={assets.header_img} alt="Healthcare" className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Specialities Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Specialities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialityData.map((item, index) => (
            <Link to={`/doctors/${item.speciality}`} key={index}>
              <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.speciality} className="w-16 h-16 mx-auto mb-3" />
                <h3 className="font-medium">{item.speciality}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Find a Doctor</h3>
            <p className="text-gray-600">Browse through our list of qualified doctors by specialty or location.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
            <p className="text-gray-600">Select a convenient time slot and book your appointment online.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-500 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Care</h3>
            <p className="text-gray-600">Visit the doctor at the scheduled time and receive quality healthcare.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hearder
