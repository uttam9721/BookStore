import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        About Us
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">YourBrand</span> — your trusted online bookstore
          dedicated to bringing a vast collection of books right to your fingertips. Whether you're
          a casual reader or a passionate bibliophile, we aim to provide an easy and enjoyable
          shopping experience with carefully curated titles across all genres.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We believe books have the power to change lives, and our mission is to connect readers with
          stories, knowledge, and inspiration. We strive for excellent customer service, fast shipping,
          and competitive prices, ensuring your satisfaction with every purchase.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Rules of Purchase</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
          <li>
            <strong>Order Confirmation:</strong> All orders are confirmed via email within 24 hours of
            purchase. Please ensure your email address is correct.
          </li>
          <li>
            <strong>Payment Methods:</strong> We accept multiple payment options including credit/debit
            cards, net banking, and digital wallets.
          </li>
          <li>
            <strong>Shipping:</strong> We deliver within 3-7 business days depending on your location.
            Tracking details will be shared once your order ships.
          </li>
          <li>
            <strong>Returns & Refunds:</strong> Returns are accepted within 7 days of delivery for damaged
            or incorrect items. Books must be returned in original condition. Refunds will be processed
            within 5-10 business days.
          </li>
          <li>
            <strong>Price & Availability:</strong> Prices are subject to change without prior notice. Book
            availability is subject to stock.
          </li>
          <li>
            <strong>Bulk Orders:</strong> For bulk or corporate orders, please contact our support team for
            special pricing and arrangements.
          </li>
          <li>
            <strong>Customer Support:</strong> For any issues or queries regarding your purchase, please
            reach out to our customer care team within 48 hours of receiving your order.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
