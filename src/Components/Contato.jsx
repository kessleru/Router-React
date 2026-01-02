import React from 'react';
import { PageHead } from './seo/PageHead';

const Contato = () => {
  return (
    <>
      <PageHead
        title="Contato"
        description="Informações para contato"
      />

      <div className="grid grid-cols-2 gap-8 animate-animeLeft mb-8">
        <img
          className="w-full rounded-md"
          src="/img/contato.jpg"
          alt="Máquina de escrever"
        />

        <div>
          <h1 className="text-2xl font-bold mb-4">
            Entre em contato.
          </h1>

          <ul>
            <li className="text-xl mb-2 before:inline-block before:w-5 before:h-0.5 before:bg-neutral-300 before:mr-2.5">
              contato@kessleru.com
            </li>
            <li className="text-xl mb-2 before:inline-block before:w-5 before:h-0.5 before:bg-neutral-300 before:mr-2.5">
              99999-9999
            </li>
            <li className="text-xl mb-2 before:inline-block before:w-5 before:h-0.5 before:bg-neutral-300 before:mr-2.5">
              Rua Sexta, Bairro Páscoa
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contato;
