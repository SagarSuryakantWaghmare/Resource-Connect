import React from 'react';

const Services = () => {
  const servicesList = [
    { name: 'Electricians', description: 'Skilled electricians for residential, commercial, and industrial work.' },
    { name: 'Plumbers', description: 'Expert plumbers available for installation, repair, and maintenance.' },
    { name: 'Carpenters', description: 'Professional carpenters for custom furniture, renovation, and repairs.' },
    { name: 'Painters', description: 'Experienced painters for indoor and outdoor projects.' },
    { name: 'Construction Workers', description: 'Reliable construction laborers for various building tasks.' },
  ];

  return (
    <div className="services-container p-8 max-w-7xl mx-auto bg-[#ECDDD6]"> {/* stdBg */}
      {/* Header Section */}
      <header className="services-header text-center mb-12">
        <h1 className="text-4xl font-bold text-[#223265]">Our Services</h1> {/* stdBlue */}
        <p className="text-lg text-[#C7C8CC] mt-4">We connect you with the best tradespeople in the business for all your home and office needs.</p> {/* inpBg */}
      </header>

      {/* Services List */}
      <section className="services-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card bg-[#FAD5B3] rounded-lg p-6 text-center shadow-lg"> {/* reviewdiv */}
            <h2 className="text-xl font-semibold text-[#223265] mb-4">{service.name}</h2> {/* stdBlue */}
            <p className="text-[#C7C8CC] mb-4">{service.description}</p> {/* inpBg */}
            <button className="service-btn bg-[#FFC107] text-[#223265] px-6 py-2 rounded hover:bg-[#FFB300]"> {/* stdYellow */}
              Request a Quote
            </button>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center mt-12">
        <h2 className="text-3xl font-bold text-[#223265]">Ready to hire a professional?</h2> {/* stdBlue */}
        <p className="text-lg text-[#C7C8CC] mt-4 mb-6">Get in touch with us to find the right tradesperson for your project.</p> {/* inpBg */}
        <button className="cta-btn bg-[#FFC107] text-[#223265] px-8 py-3 rounded hover:bg-[#FFB300]"> {/* stdYellow */}
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Services;
