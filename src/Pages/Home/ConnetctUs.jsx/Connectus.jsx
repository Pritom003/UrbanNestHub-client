import { Facebook } from '@mui/icons-material';
import React from 'react';

const Connectus = () => {
  return (
    <div>
    <div className="text-center mt-5 ">
    <h1 className="text-4xl font-semibold">Find Answers to Common Queries</h1>
      <h5 className="text-[#93b4ce] text-xl font-medium">FREQUENTLY ASKED QUESTIONS</h5>
 
    </div>

    <div className="lg:flex sm:gap-5 md:gap-10 space-y-5">
      <div className="flex-1 mt-5 space-y-3">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What services does Urban Nest House offer?
          </div>
          <div className="collapse-content">
            <p>
              Urban Nest House provides a comprehensive platform for real estate transactions. Whether you are
              looking to buy, sell, or rent properties, our platform facilitates seamless and secure transactions.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I list my property on Urban Nest House?
          </div>
          <div className="collapse-content">
            <p>
              Listing your property on Urban Nest House is easy! Simply create an account, navigate to your
              dashboard, and follow the steps to add your property details, including images and relevant
              information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any fees for using Urban Nest House services?
          </div>
          <div className="collapse-content">
            <p>
              Urban Nest House offers free registration and property listing. However, transaction fees may apply
              based on the type of service. Please review our pricing page for detailed information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I contact customer support?
          </div>
          <div className="collapse-content">
            <p>
              Our dedicated customer support team is available 24/7. You can reach us through our contact form on
              the website, or email us at support@urbannesthouse.com.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I trust the authenticity of listings on Urban Nest House?
          </div>
          <div className="collapse-content">
            <p>
              Yes, Urban Nest House ensures the authenticity of listings through a rigorous verification process.
              We work with trusted agents and verify property details to provide a secure and reliable experience for
              our users.
            </p>
          </div>
        </div>
      </div>

   
    </div>
  </div>
  );
};

export default Connectus;