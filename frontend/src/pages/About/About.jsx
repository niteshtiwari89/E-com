import React from 'react';
import { assets } from '../../assets/assets';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="container mx-auto py-8 px-6">
      {/* Our Team Section */}
      <section className="text-center mb-12">
        <img
          alt="Team photo of Two Brothers Organic Farms"
          className="team-photo mx-auto mb-4"
          src="https://images.pexels.com/photos/1245055/pexels-photo-1245055.jpeg?auto=compress&cs=tinysrgb&w=800"
          width="1200"
          height="400"
        />
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 mb-8">
          What started as a journey to return to their village and take up farming full-time,
          with a vision to fight the good fight, today the Two Brothers Organic Farms is a
          biodiverse, self-sustaining food system, certified by ECOCERT, located in Bhodani village, Maharashtra.
        </p>
        <p className="text-gray-600">
          Our work is inspired by the simplicity and stillness of the village life and guided
          by principles of Regenerative Agriculture. While securing Rural livelihoods and employment,
          we harness the power of Community to offer solutions to Public Health and Climate Change.
        </p>
      </section>

      {/* Founding Farmers Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">FOUNDING FARMERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              alt="Ajinkya Hange"
              className="mx-auto mb-4 rounded-full"
              src="https://images.pexels.com/photos/1245055/pexels-photo-1245055.jpeg?auto=compress&cs=tinysrgb&w=250&h=250"
            />
            <h3 className="text-xl font-bold">AJINKYA HANGE</h3>
            <p className="text-gray-600">
              Farmers son Ajinkya is a graduate in computer science and has done his MBA from Indira College Pune.
              He has worked in the banking sector for almost 4 years with companies like HDFC and HSBC.
              Ajinkya oversees the farms daily operations and is the Co-founding farmer at Two Brothers Organic Farm.
            </p>
          </div>
          <div className="text-center">
            <img
              alt="Satyajit Hange"
              className="mx-auto mb-4 rounded-full"
              src="https://images.pexels.com/photos/1245055/pexels-photo-1245055.jpeg?auto=compress&cs=tinysrgb&w=250&h=250"
            />
            <h3 className="text-xl font-bold">SATYAJIT HANGE</h3>
            <p className="text-gray-600">
              Farmers son Satyajit is a graduate in Economics and has done his MBA from Pune.
              He has worked in the banking sector for a decade in companies like Kotak Life Insurance, Citicorp Finance and DBS.
              Satyajit oversees the farm operations with Ajinkya and is also the Co-founding farmer at Two Brothers Organic Farm.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">THE TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                alt={member.name}
                className="team-member-photo mx-auto mb-4 rounded-full"
                src="https://images.pexels.com/photos/1245055/pexels-photo-1245055.jpeg?auto=compress&cs=tinysrgb&w=250&h=250"
                width="150"
                height="150"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Dummy data for team members
const teamMembers = [
  {
    name: 'Yash Maheshwari',
    position: 'AVP Revenue',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/...'
  },
  {
    name: 'Kapil Varghal',
    position: 'Manager - Offline Sales',
    image: 'https://oaidalleapiprodscus.blob.core.windows.net/...'
  },
  {
    name: 'Shiva Chandra Nishtala',
    position: 'Team Lead - Customer Delight',
    image: 'https://placehold.co/150x150'
  },
  {
    name: 'Shiva Chandra Nishtala',
    position: 'Team Lead - Customer Delight',
    image: 'https://placehold.co/150x150'
  },
  // Add more team members as needed
];

export default About;
