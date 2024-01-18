"use client";

import Image from "next/image";

import * as React from "react";
import * as Icon from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const AnimateTruck = React.useEffect(() => {
    gsap.timeline({
      trigger: "#hero",
      start: "center center",
      end: "bottom right",
      scrub: true,
    });
  });
  return (
    <main className="w-[100%] flex-col items-start bg-white">
      <section
        id="hero"
        className="w-full flex flex-col justify-between md:flex-row py-20 bg-gray-700"
      >
        <div className="flex items-center justify-center h-auto w-1/2 py-[100px]">
          <Image
            id="truck"
            src="/img/truck.png"
            width="700"
            height="700"
            alt="truck"
          />
        </div>
        <div className="w-1/2 h-auto">
          <div className="w-full h-auto flex items-center justify-center">
            <h2 className="font-medium text-2xl mt-2 mb-4 text-white">
              {" "}
              Soumission express{" "}
            </h2>
          </div>

          <form className="w-1/2 mx-auto flex-col items-center justify-center rounded-xl bg-red-500 shadow-lg py-6 px-8">
            <div className="flex flex-col items-start px-6">
              <label className="mb-2 font-medium">Nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="bg-white border-none py-2 px-4 rounded-lg text-white"
              />
            </div>

            <div className="flex flex-col items-start px-6 mt-2">
              <label className="mb-2 font-medium text-white">Entreprise</label>
              <input
                type="text"
                name="comapny"
                placeholder="L'entreprise"
                className="bg-white border-none py-2 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start px-6 mt-2">
              <label className="mb-2 font-medium text-white">Détails</label>
              <textarea className="py-8 px-4 bg-white rounded-lg"></textarea>
            </div>
            <div className="flex flex-col items-start px-6">
              <button
                type="submit"
                className="py-2 px-4 bg-red-500 text-white mt-4 rounded-lg border-2 border-white"
                rounded-lg
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="w-full py-20 bg-red-500">
        <div className="w-full flex items-center justify-center">
          {" "}
          <h2 className="text-2xl pb-2 mb-8 font-medium text-white">
            {" "}
            Nos services{" "}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:px-[64px] px-[24px] gap-8">
          <div className="flex flex-col items-start justify-around p-8 border-3 border-red-200 rounded-lg w-full md:w-1/3 bg-white">
            <Icon.HiArchiveBox className="text-5xl text-red-500 pb-4" />
            <h2 className="text-2xl pb-4 font-bold text-gray-400">
              {" "}
              Signalisation routière
            </h2>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="py-3 px-6 bg-red-500 text-white rounded-lg"
              href="/services/signalisation"
            >
              En savoir plus
            </a>
          </div>
          <div className="flex flex-col items-start justify-around p-8 border-3 border-red-200 rounded-lg w-full md:w-1/3 bg-white">
            <Icon.HiArchiveBox className="text-5xl text-red-500 pb-4" />
            <h2 className="text-2xl pb-4 font-bold text-gray-400">
              {" "}
              Véhicule d'accompagnement
            </h2>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="py-3 px-6 bg-red-500 text-white rounded-lg"
              href="/services/signalisation"
            >
              En savoir plus
            </a>
          </div>
          <div className="flex flex-col items-start justify-around p-8 border-3 border-red-200 rounded-lg w-full md:w-1/3 bg-white">
            <Icon.HiArchiveBox className="text-5xl text-red-500 pb-4" />
            <h2 className="text-2xl pb-4 font-bold text-gray-400">
              {" "}
              Location d'équipement
            </h2>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="py-3 px-6 bg-red-500 text-white rounded-lg"
              href="/services/signalisation"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col px-[24px] md:px-[64px] py-16">
        <div className="pt-8 items-center justify-center">
          {" "}
          <h2 className="text-2xl text-center text-gray-800 font-medium">
            {" "}
            Nos partenaires{" "}
          </h2>{" "}
        </div>
        <div className="flex flex-row">
          <div className="py-[24px] md:py-[64px]">
            <img src="/img/video-placeholder.png" alt="testimonials" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8">
            <div
              id="rating"
              className="flex flex-row gap-3 items-start justify-around self-start pb-6"
            >
              <Icon.HiStar className="text-yellow-400 text-xl" />
              <Icon.HiStar className="text-yellow-400 text-xl" />
              <Icon.HiStar className="text-yellow-400 text-xl" />
              <Icon.HiStar className="text-yellow-400 text-xl" />
              <Icon.HiStar className="text-yellow-400 text-xl" />
            </div>
            <div className="flex flex-col items-center justify-around">
              <p id="testimonial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
                feugiat in fermentum posuere urna nec. Arcu risus quis varius
                quam quisque.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
