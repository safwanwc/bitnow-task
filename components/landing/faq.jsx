import axios from "axios";
import React from "react";
import FAQInstance from "../FAQ/faq-instance";

const FAQ = async () => {
  let faq = [];
  let error = null;

  try {
    const { data } = await axios.get(
      "https://mocki.io/v1/94cb45d3-da0b-4d55-b874-0afbf87f3fd3"
    );
    faq = data?.faq;
  } catch (err) {
    error = err;
  }

  return (
    <div id="faq">
      <div className="wrapper py-20">
        <div className="content bg-[#E4E4E42E] p-10 rounded-2xl">
          <div className="text-center text-white">
            <h3 className="text-[40px] monomaniac-one-regular">
              Most Trusted Cryptocurrency Platform
            </h3>
            <p className="text-[18px] max-w-[70%] mx-auto mt-4">
              Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod
              arcu arcu aliquet laoreet blandit. Nam velit euismod egestas in.
              Sed purus .
            </p>
          </div>
          <ul className="faq bg-[#5E767F] rounded-xl p-5 mt-8">
            {faq?.map((item, index) => (
              <li
                key={index}
                className="mb-6 last:mb-0 border-b border-[#091C23] last:border-0"
              >
                <FAQInstance item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
