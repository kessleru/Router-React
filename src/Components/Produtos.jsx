import { useEffect, useState } from 'react';
import { PageHead } from '../Seo/PageHead';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const FORCE_LOADING = false;

  const [produtos, setProdutos] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgCarregada, setImgCarregada] = useState({});

  const isLoading = FORCE_LOADING || loading;

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProdutos() {
      try {
        setLoading(true);
        setErro(null);
        const response = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto',
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const result = await response.json();
        setProdutos(result);
      } catch (error) {
        if (error?.name !== 'AbortError') setErro(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();

    return () => controller.abort();
  }, []);

  if (erro) return `${erro}`;

  return (
    <>
      <PageHead title='Produtos' description='Informações para contato' />

      <h1 className='mb-4 font-bold text-3xl'>Produtos</h1>
      <section className='animate-animeLeft grid grid-cols-3 gap-8 mb-8'>
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='pointer-events-none'>
              <div className='rounded-md aspect-square w-full bg-zinc-200 animate-pulse' />
              <div className='my-2 h-6 w-3/4 rounded bg-zinc-200 animate-pulse' />
            </div>
          ))}
        {!isLoading &&
          produtos?.map((produto) => {
            const src = produto.fotos?.[0]?.src;
            const titulo = produto.fotos?.[0]?.titulo || produto.nome;

            return (
              <Link to={`produto/${produto.id}`} key={produto.id}>
                <div className='relative rounded-md aspect-square overflow-hidden'>
                  {!imgCarregada[produto.id] && (
                    <div className='absolute inset-0 bg-zinc-200 animate-pulse' />
                  )}
                  {src && (
                    <img
                      className={`absolute inset-0 h-full w-full object-cover ${imgCarregada[produto.id] ? 'block' : 'hidden'}`}
                      src={src}
                      alt={titulo}
                      onLoad={() =>
                        setImgCarregada((estado) => ({
                          ...estado,
                          [produto.id]: true,
                        }))
                      }
                    />
                  )}
                </div>
                <h1 className='my-2 text-xl'>{produto.nome}</h1>
              </Link>
            );
          })}
      </section>
    </>
  );
};

export default Produtos;
