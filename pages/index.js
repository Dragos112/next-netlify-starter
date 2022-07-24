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
        <main className=" flex flex-col space-y-16 lg:space-y-24 w-full overflow-x-hidden">
          <section className="mx-auto mt-8 lg:mt-16 lg:pt-16 lg:w-full lg:px-8">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full md:mt-10 lg:w-1/2 flex flex-col justify-center mb-16">
                <div className="prose md:mt-6 relative ml-2">
                  <h1 className="font-bold leading-normal text-6xl">
                    30 Iulie 2022
                  </h1>
                  <p className="text-2xl mt-8 pt-4 z-10">
                    Va asteptam bla bla Va asteptam bla bla Va asteptam bla bla
                    Va asteptam bla bla bla bla bla bla bla
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
          </section>
          <section className="mx-auto mt-8 lg:mt-16 lg:pt-16 lg:w-full lg:px-8">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full md:mt-10 lg:w-1/2 flex flex-col justify-center mb-16">
                <div className="prose md:mt-6 relative ml-2">
                  <h1 className="font-bold leading-normal text-6xl">Locatie</h1>
                  <p className="text-2xl mt-8 pt-4 text-gray-700 z-10">
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
                        <path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                      </svg>
                      <Link
                        href="https://www.google.com/maps/search/?api=1&query=Amiro+Events+Calea+Smardan"
                        // className="text-blue-700"
                        className="nav-link"
                      >
                        <span className="text-blue-700">
                          Apasati pentru Locatie
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
          </section>
        </main>
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
