// export default function Home() {
//   return <div className="container"></div>;
// }

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";

const ContentSection = ({ children, imagePath, imageOnTheLeft = true }) => {
  const ImageBlock = () => (
    <div className="w-full lg:w-1/2">
      <div className="w-full h-full pr-0 lg:pr-8 md:mt-2">
        <Image src={imagePath} width={632} height={592} layout="responsive" />
      </div>
    </div>
  );

  const ContentBlock = ({ content }) => (
    <div className="prose w-full lg:w-full space-y-8 mb-8 lg:mb-0">
      {content}
    </div>
  );

  return (
    <section className="container mx-auto my-4 w-full">
      <div
        className={`flex flex-col ${
          imageOnTheLeft && "flex-col-reverse"
        } lg:flex-row lg:space-x-9 items-center`}
      >
        {imageOnTheLeft ? (
          <>
            <ImageBlock />
            <ContentBlock content={children} />
          </>
        ) : (
          <>
            <ContentBlock content={children} />
            <ImageBlock />
          </>
        )}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      {/* note: BG color */}
      <div className="bg-green-100">
        <Header />
        <div className="flex flex-col space-y-16 lg:space-y-16 w-full overflow-x-hidden font-adelia">
          {/* Section */}
          <div className="mx-auto mt-8 lg:mt-16 lg:pt-16 lg:w-full lg:px-8">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full md:mt-10 lg:w-1/2 flex flex-col justify-center mb-16">
                <div className="prose md:mt-6 relative ml-2">
                  <h1 className="font-bold leading-normal text-6xl">
                    30 Iulie 2022
                  </h1>
                  <p className="text-2xl mt-8 pt-4 z-10">
                    Va ăîâțșm bla bla Va asteptam bla bla Va asteptam bla bla Va
                    asteptam bla bla bla bla bla bla bla
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      width: "259px",
                      height: "259px",
                      left: "-105px",
                      top: "-15px",
                      background:
                        "linear-gradient(90deg, rgba(0, 149, 182, 0.6) -14.86%, rgba(205, 63, 62, 0.6) 100%)",
                      filter: "blur(90px)",
                      transform: "rotate(44.89deg)",
                      zIndex: "0",
                      WebkitAnimation: "pulse 15s linear infinite",
                      MozAnimation: "pulse 15s linear infinite",
                      animation: "pulse 15s linear infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      width: "559px",
                      height: "559px",
                      left: "612.99px",
                      top: "200px",
                      background:
                        "linear-gradient(180deg, rgba(255, 158, 12, 0.5) 0%, rgba(60, 153, 146, 0.5) 100%)",
                      filter: "blur(150px)",
                      transform: "rotate(-57.09deg)",
                      zIndex: "0",
                      WebkitAnimation: "pulse 15s linear infinite",
                      MozAnimation: "pulse 15s linear infinite",
                      animation: "pulse 15s linear infinite",
                    }}
                  ></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 z-10 px-4">
                <div className="w-full h-full">
                  <Image
                    src="/img/caricatura.jpeg"
                    alt="Picture of the supported banks"
                    width={500}
                    height={592}
                    priority={true}
                    layout="responsive"
                    className="rounded-lg px-8"
                  />
                </div>
              </div>
            </div>
            {/* Section */}
          </div>
          {/* Section */}
          <div className="mx-auto mt-8 lg:mt-16 lg:pt-16 lg:w-full lg:px-8">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full md:mt-10 lg:w-1/2 flex flex-col justify-center mb-16">
                <div className="prose md:mt-6 relative ml-2">
                  <h1 className="font-bold leading-normal text-6xl">Locatie</h1>
                  <p className="text-2xl mt-8 pt-4 z-10">
                    Adresa: Galati, Calea Smardan 99 (In spatele fabricii ARCADA
                    Filesti)
                    <br />
                    <span className="flex flex-row items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
                      </svg>
                      <Link
                        href="https://www.google.com/maps/search/?api=1&query=Amiro+Events+Calea+Smardan"
                        // className="text-blue-700"
                        className="nav-link"
                      >
                        <span className="text-blue-700 text-lg px-2">
                          Apasati pentru locatia evenimentului
                        </span>
                      </Link>
                    </span>
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      width: "259px",
                      height: "259px",
                      left: "-105px",
                      top: "-15px",
                      background:
                        "linear-gradient(90deg, rgba(0, 149, 182, 0.6) -14.86%, rgba(205, 63, 62, 0.6) 100%)",
                      filter: "blur(90px)",
                      transform: "rotate(44.89deg)",
                      zIndex: "0",
                      WebkitAnimation: "pulse 15s linear infinite",
                      MozAnimation: "pulse 15s linear infinite",
                      animation: "pulse 15s linear infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      width: "559px",
                      height: "559px",
                      left: "612.99px",
                      top: "200px",
                      background:
                        "linear-gradient(180deg, rgba(255, 158, 12, 0.5) 0%, rgba(60, 153, 146, 0.5) 100%)",
                      filter: "blur(150px)",
                      transform: "rotate(-57.09deg)",
                      zIndex: "0",
                      WebkitAnimation: "pulse 15s linear infinite",
                      MozAnimation: "pulse 15s linear infinite",
                      animation: "pulse 15s linear infinite",
                    }}
                  ></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 z-10 px-4">
                <div className="w-full h-full">
                  <Image
                    src="/img/locatie.jpeg"
                    alt="Picture of the supported banks"
                    width={500}
                    height={592}
                    priority={true}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/* Section */}
          </div>
        </div>
        {/* <footer className="flex flex-col justify-center w-full py-16 px-4">
          <div className="text-center"></div>
          <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 py-4">
            <div className="text-center">
              <Link passHref href="/legal">
                <a className="text-center text-gray-700 mx-8 hover:underline">
                  Legal
                </a>
              </Link>
            </div>
          </div>
          <p className="text-center leading-none text-gray-700 mt-4">
            &copy; 2021 Aurelia Ltd.
          </p>
        </footer> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
