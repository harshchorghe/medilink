import React, { useState } from 'react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Harsh Chorghe',
    email: 'harshchorghe@gmail.com',
    phone: '+1 123 456 7890',
    address: '57th Cross, Richmond Circle, Church Road, London',
    gender: 'Male',
    birthday: '2024-07-20',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can make an API call to save the data
    console.log('Saved profile:', profile);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans text-gray-800">
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-6 mb-6">
  
</div>

        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
          👤
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">{profile.name}</h2>

      <hr className="mb-4" />
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Contact Information</h3>
        <div className="space-y-2">
          <div>Email Id: {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border px-2 py-1 rounded"
            />
          ) : (
            <a href={`mailto:${profile.email}`} className="text-blue-600">
              {profile.email}
            </a>
          )}</div>
          <div>Phone: {isEditing ? (
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="border px-2 py-1 rounded"
            />
          ) : (
            <a href={`tel:${profile.phone}`} className="text-blue-600">
              {profile.phone}
            </a>
          )}</div>
          <div>Address: {isEditing ? (
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="border px-2 py-1 rounded w-full"
            />
          ) : (
            <span>{profile.address}</span>
          )}</div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Basic Information</h3>
        <div className="space-y-2">
          <div>Gender: {isEditing ? (
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="border px-2 py-1 rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <span>{profile.gender}</span>
          )}</div>
          <div>Birthday: {isEditing ? (
            <input
              type="date"
              name="birthday"
              value={profile.birthday}
              onChange={handleChange}
              className="border px-2 py-1 rounded"
            />
          ) : (
            new Date(profile.birthday).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          )}</div>
        </div>
      </div>

      <div className="flex gap-4">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-50"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-50"
          >
            Save information
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
