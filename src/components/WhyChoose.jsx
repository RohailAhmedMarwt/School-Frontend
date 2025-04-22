import { Link } from "react-router-dom";
import disciplinedIcon from "../assets/images/disciplined.png";
import faculty from "../assets/images/faculty.png";
import acadmic from "../assets/images/acadmic.png";

const WhyChoose = () => {
  return (
    <section id="why-choose" className="bg-gray-50 py-16 px-6 md:px-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold text-center text-green-900 mb-14"
          data-aos="fade-up"
          data-aos-duration="1200" // Adjust the duration here (ms)
        >
          Why Choose <span className="text-green-700">FG Piffers?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div
                className="bg-white shadow-md p-6 rounded-md border border-gray-100"
                data-aos="fade-right"
                data-aos-duration="1000" // Adjust the duration here (ms)
                data-aos-delay="100" // Adjust delay to make it slower
              >
                <img src={disciplinedIcon} alt="Disciplined Environment" className="w-11 h-11 mb-1" />
                <h3 className="font-semibold text-green-800 text-lg mb-1">
                  Disciplined Environment
                </h3>
                <p className="text-gray-600 text-sm">
                  A culture of respect, punctuality, and discipline fosters a safe and productive learning atmosphere.
                </p>
              </div>

              <div
                className="bg-white shadow-md p-6 rounded-md border border-gray-100"
                data-aos="fade-left"
                data-aos-duration="1000" // Adjust the duration here (ms)
                data-aos-delay="100" // Adjust delay to make it slower
              >
                <img src={faculty} className="w-11 h-11 mb-1" />
                <h3 className="font-semibold text-green-800 text-lg mb-1">
                  Experienced Faculty
                </h3>
                <p className="text-gray-600 text-sm">
                  Our dedicated and qualified teachers nurture each student to reach their academic potential.
                </p>
              </div>
            </div>

            <div
              className="bg-white shadow-md p-6 rounded-md border border-gray-100"
              data-aos="fade-up"
              data-aos-duration="1000" // Adjust the duration here (ms)
              data-aos-delay="100" // Adjust delay to make it slower
            >
              <img src={acadmic} className="w-11 h-11 mb-1" />
              <h3 className="font-semibold text-green-800 text-lg mb-1">
                Focus on Moral & Academic Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                We shape not only the minds but also the character of our students with Islamic values and academic rigor.
              </p>
            </div>
          </div>

          {/* Right Highlight Card */}
          <div
            className="bg-green-900 text-white rounded-md p-8 flex flex-col justify-between"
            data-aos="zoom-in-left"
            data-aos-duration="1000" // Adjust the duration here (ms)
            data-aos-delay="100" // Adjust delay to make it slower
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">All-Round Development</h3>
              <p className="text-sm">
                At FG Piffers, students participate in co-curricular activities, competitions, 
                and physical training that build confidence, leadership, and teamwork — preparing 
                them for life beyond the classroom.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/achievements-this-year">
                <button className="mt-4 bg-white text-green-900 px-5 py-2 rounded-md font-semibold hover:bg-green-900 hover:text-white hover:border transition">
                  Achievements this year
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
