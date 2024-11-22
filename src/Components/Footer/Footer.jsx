
import FooterLogo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <section className="">
      <div className="cart w-2/3 translate-y-1/3 mx-auto p-5  border rounded-2xl mb-5">
        <div className="mx-auto text-center border rounded-2xl py-20 bg-gradient-to-tr from-sky-100 from-1% via-white via-60%  to-yellow-100 to-1%">
          <h2 className="text-2xl font-bold text-center">
            Subscribe to our Newsletter
          </h2>
          <small className="text-gray-500">
            Get the latest updates and news right in your inbox!
          </small>
          <div className="mt-5 mx-auto">
            <input
              className="text-sm mr-5 lg:px-16 border border-gray-400 text-gray-400 rounded-xl p-2 "
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn btn-sm rounded-xl text-black bg-yellow-400 bg-gradient-to-tr from-purple-400 from-10%">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black px-10 py-28 rounded-2xl justify-center">
        <div className="mx-auto">
          <img
            className="mx-auto w-[110px]"
            src={FooterLogo}
            alt=""
          />
        </div>
        {/* About Us */}
        <div className="grid grid-cols-1 lg:grid-cols-3 px-10 gap-6">
          <div className="mx-auto mt-11">
            <h2 className="font-bold text-white">About Us</h2>
            <small className="text-gray-400">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </small>
          </div>
          {/* Quick Links */}
          <div className="mx-auto mt-11">
            <h2 className="font-bold text-white">Quick Links</h2>
            <ul>
              <li className="text-gray-400">
                <small>. Home</small>
              </li>
              <li className="text-gray-400">
                <small>. Services</small>
              </li>
              <li className="text-gray-400">
                <small>. About</small>
              </li>
              <li className="text-gray-400">
                <small>. Contact</small>
              </li>
            </ul>
          </div>
          {/* Subscribe */}
          <div className="mx-auto mt-11">
            <h2 className="font-bold text-white">Subscribe</h2>
            <small className="text-gray-400">
              Subscribe to our newsletter for <br /> the latest updates.
            </small>
            <div className="mt-2 flex">
              <input
                className="text-sm text-gray-400 rounded-xl p-2 "
                type="text"
                placeholder="Enter your email"
              />
              <button className="btn btn-sm rounded-lg text-black bg-yellow-400 bg-gradient-to-tr from-purple-400 from-10%">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
