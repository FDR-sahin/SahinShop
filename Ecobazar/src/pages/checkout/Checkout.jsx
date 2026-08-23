import React, { useState } from 'react';
import Container from '../../components/contener/Container';
import PageBanner from '../../components/PageBanner/PageBanner';
import Subscrive from '../../components/subscribe/Subscrive';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    country: '',
    state: '',
    zipCode: '',
    email: '',
    phone: '',
    shipToDifferent: false,
    orderNotes: '',
    paymentMethod: 'cod', // default to Cash on Delivery
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted:', formData);
    alert('Order placed successfully!');
  };

  return (


   <>
   <PageBanner links="checkout"/>

    <Container>
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Billing Information & Additional Info */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Billing Information Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Information</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Your first name"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Your last name"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Company Name <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400"
              />
            </div>

            {/* Country, State, Zip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Country / Region</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white text-gray-500"
                >
                  <option value="">Select</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">States</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white text-gray-500"
                >
                  <option value="">Selects</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="Zip Code"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="shipToDifferent"
                name="shipToDifferent"
                checked={formData.shipToDifferent}
                onChange={handleInputChange}
                className="w-4 h-4 rounded text-green-600 focus:ring-green-500 border-gray-300"
              />
              <label htmlFor="shipToDifferent" className="text-xs font-medium text-gray-700 cursor-pointer">
                Ship to a different address
              </label>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Info</h2>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Order Notes <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <textarea
                rows={4}
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleInputChange}
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>

            {/* Item List */}
            <div className="space-y-4 mb-6">
              {/* Item 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=100&auto=format&fit=crop&q=80"
                    alt="Green Capsicum"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span className="text-xs text-gray-700">Green Capsicum <span className="text-gray-500">x5</span></span>
                </div>
                <span className="text-xs font-semibold text-gray-900">$70.00</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=100&auto=format&fit=crop&q=80"
                    alt="Red Capsicum"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span className="text-xs text-gray-700">Red Capsicum <span className="text-gray-500">x1</span></span>
                </div>
                <span className="text-xs font-semibold text-gray-900">$14.00</span>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="border-t border-gray-100 pt-4 space-y-3 mb-6 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-gray-900">$84.00</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span>Shipping:</span>
                <span className="font-semibold text-gray-900">Free</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-gray-900 pt-1">
                <span>Total:</span>
                <span className="text-base font-extrabold text-gray-900">$84.00</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">Payment Method</h4>
              <div className="space-y-2.5">
                {[
                  { id: 'cod', label: 'Cash on Delivery' },
                  { id: 'paypal', label: 'Paypal' },
                  { id: 'amazon', label: 'Amazon Pay' },
                ].map((method) => (
                  <label key={method.id} className="flex items-center space-x-3 cursor-pointer text-xs text-gray-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <span>{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#00B207] hover:bg-[#009A06] text-white font-medium py-3 px-4 rounded-full transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm"
            >
              Place Order
            </button>
          </div>
        </div>

      </form>
    </div>

    </Container>

    <Subscrive/>
   </>
  );
}