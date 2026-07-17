import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-neutral text-neutral-content py-20">
        <div className="hero-content text-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-base-content/70 text-lg">
              We'd love to hear from you. Reach out to us for any queries or
              support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">📍 Address</h4>
              <p className="text-base-content/70">
                Kolkata, West Bengal, India
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">📞 Phone</h4>
              <p className="text-base-content/70">+91 98765 43210</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">📧 Email</h4>
              <p className="text-base-content/70">
                support@shopkart.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">⏰ Working Hours</h4>
              <p className="text-base-content/70">
                Mon - Sat : 9:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-2xl mb-4">
              Send Message
            </h3>

            <form className="space-y-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email Address
                  </span>
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-neutral w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;