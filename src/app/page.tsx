export const metadata = {
  title: "Trafix | Bienvenue",
  description: "Entreprise de signalisation routière",
};

import Image from "next/image";
import * as React from "react";
import * as Icon from "react-icons/hi2";

export default function Home() {
  return (
    <main
      data-item="main"
      className="w-full h-auto flex-col items-start bg-white"
    >
      <section className="w-full flex flex-col justify-between items-center md:flex-row h-auto bg-gun pt-8 md:pb-0">
        <div className="w-full md:w-1/2 h-auto">
          <div
            data-item="headlineParent"
            className="w-full h-auto flex items-center justify-center mt-8 md:mt-0"
          >
            <h2
              data-text="headline"
              className="font-medium text-xl mb-2 text-white"
            >
              {" "}
              Obtenir un dévis rapide.{" "}
            </h2>
          </div>
          <form
            className="md:w-1/2 w-3/4 mx-auto flex-col items-center justify-center rounded-xl bg-gun-600 shadow-lg py-3 px-4 mb-16
           md:pb-0"
          >
            <div className="flex flex-col items-start px-6">
              <label className="mb-2 font-medium text-white">Nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="bg-white w-full border-none p-2 rounded-md text-white"
              />
            </div>

            <div className="flex flex-col items-start px-6 mt-2">
              <label className="mb-2 font-medium text-white">Entreprise</label>
              <input
                type="text"
                name="comapny"
                placeholder="L'entreprise"
                className="bg-white w-full border-none p-2 rounded-md text-white"
              />
            </div>
            <div className="flex flex-col items-start px-6 mt-2">
              <label className="mb-2 font-medium text-white">Détails</label>
              <textarea
                placeholder="Détails"
                className="pt-2 pb-6 w-full px-2 bg-white rounded-lg"
              ></textarea>
            </div>
            <div className="flex flex-col items-start px-6">
              <button
                type="submit"
                className="py-2 px-4 bg-gun-500 text-white mt-4 rounded-lg border-2 border-white"
                rounded-lg
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 h-full overflow:hidden">
          <div className="absolute left-0 top-0 w-1/2 opacity:0.5 bg-gun -z-3"></div>
          <video autoPlay muted loop className="w-full h-auto">
            <source src="/img/road.mp4" />
          </video>
        </div>
      </section>

      <section id="serivces" className="w-full py-20 bg-gun-600">
        <div
          data-item="headlineParent"
          className="w-full flex items-center justify-center"
        >
          {" "}
          <h2
            data-text="headline"
            className="text-2xl pb-2 mb-8 font-bold text-white"
          >
            {" "}
            Nos services{" "}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:px-[64px] px-[24px] gap-8">
          <div
            id="s1"
            className="flex flex-col items-start justify-around p-8 border-3 border-flamingo-200 rounded-lg w-full md:w-1/3 bg-white"
          >
            <Image
              src="/img/barricade.png"
              alt="signaleurs routiers"
              width="120"
              height="60"
            />
            <h2
              data-text="headline"
              className="text-2xl pb-4 mt-2 font-bold text-gun"
            >
              {" "}
              Signalisation routière
            </h2>
            <p data-text="body" className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="py-3 px-6 bg-flamingo-500 text-white rounded-lg"
              href="/services/signalisation"
            >
              En savoir plus
            </a>
          </div>
          <div
            id="s2"
            className="flex flex-col items-start justify-around p-8 border-3 border-flamingo-200 rounded-lg w-full md:w-1/3 bg-white"
          >
            <Image src="/img/sign.png" alt="sign" width="120" height="120" />
            <h2
              data-text="headline"
              className="text-2xl pb-4 font-bold mt-2 text-gun"
            >
              {" "}
              Véhicule d'accompagnement
            </h2>
            <p data-text="body" className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="py-3 px-6 bg-flamingo-500 text-white rounded-lg"
              href="/services/signalisation"
            >
              En savoir plus
            </a>
          </div>
          <div
            id="s3"
            data-item="headlineParent"
            className="flex flex-col items-start justify-around p-8 border-3 border-flamingo-200 rounded-lg w-full md:w-1/3 bg-white"
          >
            <Image
              src="/img/cone.png"
              alt="location d'équipement de chantier temporaire"
              width="120"
              height="160"
            />
            <h2
              data-text="headline"
              className="text-2xl pb-4 mt-2 font-bold text-gun"
            >
              {" "}
              Location d'équipement
            </h2>
            <p data-text="body" className="pb-4 text-gun-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="py-3 px-6 bg-flamingo-500 text-white rounded-lg"
              href="/services/signalisation"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col px-[24px] md:px-[64px] py-16">
        <div
          data-item="headlineParent"
          className="pt-8 items-center justify-center"
        >
          {" "}
          <h2
            data-text="headline"
            className="text-2xl text-center text-gun pb-8"
          >
            {" "}
            Qui sommes nous ?{" "}
          </h2>{" "}
        </div>
        <div className="w-full flex md:flex-row flex-col h-auto items-center justify-between">
          <div className="md:w-1/2 w-full flex items-center justify-center md:py-16">
            <Image
              src="/img/eye.png"
              alt="notre vision"
              width="300"
              height="400"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col py-16">
            <h1 className="text-5xl text-gun-400 pt-4 pb-8"> Notre vision </h1>
            <p className="text-gun-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-full flex md:flex-row-reverse flex-col h-auto items-center justify-between md:py-16">
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <Image
              src="/img/value.png"
              alt="nos valeurs"
              width="300"
              height="400"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col">
            <h1 className="text-5xl text-gun-400 pt-4 pb-8"> Nos valeurs </h1>
            <p className="text-gun-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col h-auto items-center justify-between py-16">
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <Image src="/img/hand.png" alt="wheel" width="300" height="400" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col">
            <h1 className="text-5xl text-gun-400 pt-4 pb-8">
              {" "}
              Notre promesse{" "}
            </h1>
            <p className="text-gun-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col px-[24px] md:px-[64px] py-16 bg-titan-100">
        <div
          data-item="headlineParent"
          className="pt-8 items-center justify-center"
        >
          {" "}
          <h2
            data-text="headline"
            className="text-2xl text-center text-gun pb-8"
          >
            {" "}
            Témoignages{" "}
          </h2>{" "}
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="py-[24px] md:py-[64px] md:w-1/2 w-full">
            <img src="/img/video-placeholder.png" alt="testimonials" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8">
            <div
              data-text="headline"
              id="rating"
              className="flex flex-row gap-3 items-start justify-around self-start pb-6"
            >
              <Icon.HiStar className="text-sin-400 text-xl" />
              <Icon.HiStar className="text-sin-400 text-xl" />
              <Icon.HiStar className="text-sin-400 text-xl" />
              <Icon.HiStar className="text-sin-400 text-xl" />
              <Icon.HiStar className="text-sin-400 text-xl" />
            </div>
            <div className="flex flex-col items-center justify-around">
              <p data-text="body" id="testimonial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
                feugiat in fermentum posuere urna nec. Arcu risus quis varius
                quam quisque.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col px-[24px] md:px-[64px]">
        <div
          data-item="headlineParent"
          className="pt-16 items-center justify-center "
        >
          {" "}
          <h2 data-text="headline" className="text-2xl text-center text-gun">
            {" "}
            Nous embauchons{" "}
          </h2>{" "}
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between overflow:hidden">
          <div className="flex md:items-center md:justify-start  w-full md:w-1/2">
            <Image
              src="/img/flagger.jpg"
              alt="offres emplois signaleurs routiers"
              width="400"
              height="400"
            />
          </div>
          <div
            data-item="parentHeadline"
            className="flex flex-col items-start justify-start w-full md:w-1/2 md:py-0 pb-8"
          >
            <h1 data-text="headline" className="text-5xl text-gun md:pb-4 py-8">
              {" "}
              Joins-toi a l'équipe !{" "}
            </h1>
            <p data-text="body" className="pb-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="py-3.5 px-4 md:justify-center md:mx-0 mx-auto md:w-1/4 bg-gun flex md:items-center text-white rounded-md"
              href="/"
            >
              {" "}
              Voir les postes{" "}
            </a>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col px-[24px] md:px-[64px] py-16 bg-flamingo">
        <div
          data-item="headlineParent"
          className="pt-8 flex flex-col items-center justify-center text-white py-12"
        >
          {" "}
          <h2
            data-text="headline"
            className="text-2xl text-center pb-3 text-white"
          >
            {" "}
            FAQS{" "}
          </h2>{" "}
          <p>
            Vous avez des questions sur nos services de signaleurs routiers ou
            de location d'équipement ? Vous trouverez ci-dessous les questions
            les plus fréquentes.
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-around justify-center gap-4">
          <div className="p-8 border border-2-gun rounded-md text-white flex flex-row justify-between items-center">
            En quoi conciste le travail d'un signaleur routier ?{" "}
            <span className="text-2xl mx-3"> + </span>
          </div>
          <div className="p-8 border border-2-gun rounded-md text-white flex flex-row justify-between items-center">
            {" "}
            Ou peut on louer vos équipements ?{" "}
            <span className="text-2xl mx-3"> + </span>{" "}
          </div>
          <div className="p-8 border border-2-gun rounded-md text-white flex flex-row justify-between items-center">
            {" "}
            Ou ce situe vos bureaux ? <span className="text-2xl mx-3"> + </span>
          </div>
          <div className="p-8 border border-2-gun rounded-md text-white flex flex-row justify-between items-center">
            {" "}
            Quelle est le délais moyen suite a une demande de signaleur routier
            ? <span className="text-2xl mx-3"> + </span>
          </div>
          <div className="p-8 border border-2-gun rounded-md text-white flex flex-row justify-between items-center">
            {" "}
            Comment nous joindres ? <span className="text-2xl mx-3"> + </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full py-16 px-[24px] md:px-[64px]">
        <div className="w-full flex items-center justify-center">
          <h2 className="w-full text-2xl text-center pb-12"> Nous joindres </h2>
        </div>
        <div className="flex flex-col md:flex-row md:w-1/2 w-full items-center justify-center">
          <div className="md:w-1/2 flex items-center justify-center"></div>
          <form className="w-full h-auto px-2 py-16 flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <label className="mb-2 text-gun-400">Nom</label>
              <input
                type="text"
                placeholder="Nom complet"
                className="py-3 px-4 bg-titan rounded-lg text-white outline-none placeholder:text-gun-100"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="mb-2 text-gun-400">Courriel</label>
              <input
                type="text"
                placeholder="Adresse courriel"
                className="py-3 px-4 bg-titan rounded-lg text-white outline-none placeholder:text-gun-100"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="mb-2 text-gun-400">Entreprise</label>
              <input
                type="text"
                placeholder="L'entreprise"
                className="py-3 px-4 bg-titan rounded-lg text-white outline-none placeholder:text-gun-100"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="mb-2 text-gun-400">Détails</label>
              <textarea
                placeholder="Détails"
                className="pt-3 pb-9 bg-titan placeholder:text-gun-100 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-4 bg-gun mt-2 text-white rounded-lg "
            >
              {" "}
              Envoyer{" "}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
