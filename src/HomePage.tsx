import { Button, Collapse, Divider, Image } from "antd";
import React from "react";
import ArticlesCard from "./ArticlesCard";

const HomePage = () => {
  const {Panel} = Collapse;
  return (
    <div className="w-full mt-16">
      {/* Start section 1 */}
      <div className="bg-background-gray">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-10 w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10">
          <div className="w-full md:w-1/2 flex flex-col space-y-10">
            <h2 className="font-bold text-3xl xl:text-4xl text-gray-700 w-full md:w-[20ch] lg:w-[30ch] lg:leading-[50px] xl:leading-[55px]">
              Don’t Let a Criminal Record Interfere with Your Life
            </h2>
            <p className="font-semibold text-gray-600">
              A DUI or DWI conviction can have long-term effects on your life,
              including your career, where you’re able to live, what
              professional licenses you can hold, and your peace of mind. An
              expungement is a small investment in you that will deliver
              tremendous benefits.
            </p>
            <Button
              type="primary"
              className="bg-[#F77C0C] text-white px-4 py-2.5 h-auto rounded-md border-0 font-semibold w-full sm:w-52 text-base"
            >
              Check Your Eligibility
            </Button>
          </div>
          <figure className="w-full mb-10 md:mb-0">
            <Image
              className="w-full h-full"
              preview={false}
              src="/images/01.svg"
            />
          </figure>
        </div>
      </div>
      {/* End section 1 */}
      {/* Start section 2 */}
      <div className="bg-white">
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10">
          <div className="mb-10">
            <h2 className="font-bold text-2xl text-gray-700 mb-4">
              Did You Know You May be Eligible for Expungement?
            </h2>
            <p className="font-semibold text-gray-500">
              It’s true. You may be able to have a DUI or DWI conviction
              expunged—i.e., removed from public view, and Intoxalock can help
              with Restorify.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <figure className="w-full sm:w-98 mb-10 md:mb-0">
              <Image
                className="w-full h-full"
                preview={false}
                src="/images/02.svg"
              />
            </figure>
            <div className="w-full flex flex-col space-y-5">
              <div>
                <h4 className="font-bold text-lg text-gray-700">Guided</h4>
                <p className="font-semibold text-gray-800">
                  Restorify is a self-service, guided web-based tool designed to
                  give you a general understanding of expungement law and to
                  help you prepare legal documents for submission to the court.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-700">
                  Step-by-Step
                </h4>
                <p className="font-semibold text-gray-800">
                  With Restorify, you’ll get step-by-step assistance through the
                  entire process, along with handy tips and FAQs to assist along
                  the way. And we will even submit the documents for you.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-700">
                  Peace of Mind
                </h4>
                <p className="font-semibold text-gray-800">
                  Restorify helps you find the peace of mind you deserve with
                  incredible ease. To start the process, just create an account.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-700">
                  Convenient form wizard
                </h4>
                <p className="font-semibold text-gray-800">
                  You’ll get more information about the benefits of having a DUI
                  or DWI expunged, the legal process, and what you might need,
                  along with access to our eligibility screening and pleading
                  wizard.
                </p>
              </div>
              <Button
                type="primary"
                className="bg-[#F77C0C] text-white px-4 py-2.5 h-auto rounded-md border-0 font-semibold w-full sm:w-52 text-base"
              >
                Create An Account
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* End section 2 */}
      {/* Start section 3 (How it works) */}
      <div className="bg-background-gray">
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10">
          <h2 className="font-bold text-3xl text-center text-gray-700 mb-10">
            How it works?
          </h2>
          <div className="flex justify-center items-center relative how-it-works">
            <figure className="w-[50rem] min-w-[40rem] mb-10 md:mb-0 hidden md:block relative">
              <Image
                className="w-full h-full"
                preview={false}
                src="/images/04.svg"
              />
              <figcaption>
                <div className="create-account flex flex-col items-center">
                  <figure className="w-9 mb-2">
                    <Image src="/images/create-account.svg" preview={false}/>
                  </figure>
                  <h4 className="font-bold text-lg text-gray-700">Create Account</h4>
                  <p className="font-semibold text-gray-500 mt-3 w-[20ch] text-center">Get started in minutes with no obligation</p>
                </div>
                <div className="screening flex flex-col items-center">
                  <figure className="w-9 mb-2">
                    <Image src="/images/screening.svg" preview={false}/>
                  </figure>
                  <h4 className="font-bold text-lg text-gray-700">Screening</h4>
                  <p className="font-semibold text-gray-500 mt-3 w-[20ch] text-center">Conveniently find out if you may qualify</p>
                </div>
                <div className="pleading-form flex flex-col items-center">
                  <figure className="w-8 mb-2">
                    <Image src="/images/pleading-form.svg" preview={false}/>
                  </figure>
                  <h4 className="font-bold text-lg text-gray-700">Pleading Form</h4>
                  <p className="font-semibold text-gray-500 mt-3 w-[20ch] text-center">Let our step-by-step wizard guide you</p>
                </div>
              </figcaption>
            </figure>
            <figure className="w-[15rem] max-w-[15rem] mb-10 md:mb-0 block md:hidden relative">
              <Image
                className="w-full h-full"
                preview={false}
                src="/images/05.svg"
              />
              <figcaption>
                <div className="create-account-mobile flex flex-col items-center">
                  <figure className="w-9 mb-2">
                    <Image src="/images/create-account.svg" preview={false}/>
                  </figure>
                  <h4 className="font-bold text-lg text-gray-700">Create Account</h4>
                  <p className="font-semibold text-gray-500 mt-3 w-[20ch] text-center">Get started in minutes with no obligation</p>
                </div>
                <div className="screening-mobile flex flex-col items-center">
                  <figure className="w-9 mb-2">
                    <Image src="/images/screening.svg" preview={false}/>
                  </figure>
                  <h4 className="font-bold text-lg text-gray-700">Screening</h4>
                  <p className="font-semibold text-gray-500 mt-3 w-[20ch] text-center">Conveniently find out if you may qualify</p>
                </div>
                <div className="pleading-form-mobile flex flex-col items-center">
                  <figure className="w-8 mb-2">
                    <Image src="/images/pleading-form.svg" preview={false}/>
                  </figure>
                  <h4 className="font-bold text-lg text-gray-700">Pleading Form</h4>
                  <p className="font-semibold text-gray-500 mt-3 w-[20ch] text-center">Let our step-by-step wizard guide you</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      {/* End section 3 (How it works) */}
      {/* Start section 4 */}
      <div className="bg-white">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-10 w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10">
          <div className="w-full md:w-3/5 flex flex-col space-y-10">
            <h2 className="font-bold text-3xl text-gray-700 w-full">
              Check Eligibility for Only{" "}
              <span className="text-theme-orange">$24.99</span>
            </h2>
            <ul className="list-disc space-y-5 font-semibold ml-5">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis modi vitae consequuntur ullam sit a dolorum,
                excepturi fugiat aut aperiam rerum, nesciunt
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis modi vitae consequuntur ullam sit a dolorum,
                excepturi fugiat aut aperiam rerum, nesciunt
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis modi vitae consequuntur ullam sit a dolorum,
                excepturi fugiat aut aperiam rerum, nesciunt
              </li>
            </ul>
            <Button
              type="primary"
              className="bg-theme-orange text-white px-4 py-2.5 h-auto rounded-md border-0 font-semibold w-full sm:w-52 text-base"
            >
              Start Screening Now
            </Button>
          </div>
          <figure className="w-full xs:w-[20rem] mb-10 md:mb-0">
            <Image
              className="w-full h-full"
              preview={false}
              src="/images/03.svg"
            />
          </figure>
        </div>
      </div>
      {/* End section 4 */}
      <Divider className="bg-[#C8C9C7] m-0" />
      {/* Start section 5 */}
      <div className="bg-white">
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10">
          <h2 className="font-bold text-3xl text-gray-700 w-full">
            Say Goodbye to Your DWI
          </h2>
          <div className="flex flex-col space-y-4 mt-8">
            <p className="font-semibold text-gray-800">
              With Restorify, you’ll have access to our handy pleading wizard
              that will walk you through the petition and other court-required
              paperwork in a step-by-step manner while easy-to-follow tips and
              prompts answer any questions you may have – all in a single,
              convenient source.
            </p>
            <p className="font-semibold text-gray-800">
              With Restorify, you can complete your pleadings on your own time
              and at your convenience without any hassle.
            </p>
            <p className="font-semibold text-gray-800">
              The payment of $349.99 includes your legal filing fees, so you
              won’t have to pay an additional fee upon submission of your
              documents to the court. And we even handle document submission –
              Restorify is the elegantly simple expungement solution
            </p>
          </div>
        </div>
      </div>
      {/* End section 5 */}
      {/* Start section 6 (FAQs) */}
      <div className="bg-background-gray">
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-bold text-gray-700 text-2xl">FAQs</h2>
            <p className="text-theme-orange font-semibold text-lg cursor-pointer">See All</p>
          </div>
          <Collapse
            className="flex flex-col space-y-8 text-base"
            accordion
            bordered={false}
            expandIconPosition="right"
          >
            <Panel className="panel" header="01. Who is Eligible to Get a DUI or DWI Offense Expunged?" key={1}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, suscipit?
              </p>
            </Panel>
            <Panel className="panel" header="02. How Does a DUI or DWI Expungement Work?" key={2}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, suscipit?
              </p>
            </Panel>
            <Panel className="panel" header="03. Will It Be Easier for Me to Find a Job? or Get a Promotion?" key={3}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, suscipit?
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
      {/* End section 6 (FAQs) */}
      {/* Start section 6 (Articles) */}
      <div className="bg-white">
        <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 py-10">
            <h2 className="font-bold text-gray-700 text-2xl mb-5">Popular Articles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12">
                <ArticlesCard />
                <ArticlesCard />
                <ArticlesCard />
            </div>
            <div className="flex justify-center mt-10">
              <Button
              type="primary"
              className="bg-[#F77C0C] text-white px-4 py-2.5 h-auto rounded-md border-0 font-medium w-52 text-base"
            >
              Get Expunged
            </Button>
            </div>
        </div>
      </div>
      {/* End section 6 (Articles) */}
    </div>
  );
};
export default HomePage;
