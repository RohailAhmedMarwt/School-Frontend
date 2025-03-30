import React from "react";
import steam from "../assets/images/steam.jpg";
import software from "../assets/images/software.jpeg";
import spac from "../assets/images/spac.jpeg";
import space from "../assets/images/space.jpg";
import activity from "../assets/images/activity.jpeg";

const NationalAndInternationalAch = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2
        className="text-3xl font-bold text-green-800 mb-6 text-center"
        data-aos="fade-up"
      >
        National Achievements
      </h2>
      <p
        className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our students have proudly represented the school in diverse national
        and international platforms through innovation, creativity, and
        academic excellence.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src={steam}
            alt="STEAM Pakistan"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-900">
              STEAM Pakistan
            </h3>
            <p className="text-gray-700 text-sm">
              Achieved multiple A+ stars and completed the Star School Journey.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={software}
            alt="Software Development"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-900">
              Software Development Competition
            </h3>
            <p className="text-gray-700 text-sm">
              Secured 1st Place in the Regional Contest (Abbottabad Station).
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src={spac}
            alt="SUPARCO Contest"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-900">
              Best Space School (SUPARCO)
            </h3>
            <p className="text-gray-700 text-sm">
              Among two KPK schools recognized as notable entries in
              collaboration with SUPARCO.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={space}
            alt="World Space Week"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-900">
              World Space Week
            </h3>
            <p className="text-gray-700 text-sm">
              Research paper submitted with SUPARCO and SEAD collaboration.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden md:col-span-2"
          data-aos="fade-up"
        >
          <img
            src={activity}
            alt="Regional Competitions"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-900">
              Regional Competitions
            </h3>
            <p className="text-gray-700 text-sm">
              Multiple 1st positions in Essay, Story Writing & Declamation
              (Urdu & English).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalAndInternationalAch;
