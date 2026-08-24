import React from "react";
import Container from "../../components/contener/Container";
import PageBanner from "../../components/PageBanner/PageBanner";

function Single() {
  return (
    <>
      <PageBanner links="page-name" />
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to Page Name
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            This is a placeholder page. Replace this content with your actual page content.
            You can add any components, text, images, or features here.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-700">Feature 1</h3>
              <p className="text-gray-600 mt-2">Description of feature 1</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-700">Feature 2</h3>
              <p className="text-gray-600 mt-2">Description of feature 2</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-700">Feature 3</h3>
              <p className="text-gray-600 mt-2">Description of feature 3</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Single;