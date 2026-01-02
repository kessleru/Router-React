import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageHead } from '../Seo/PageHead';

const Produto = () => {
  const FORCE_LOADING = false;

  const { id } = useParams();

  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fotoCarregada, setFotoCarregada] = useState({});

  const isLoading = FORCE_LOADING || loading;

  useEffect(() => {
    const controller = new AbortController();
    setFotoCarregada({});

    async function fetchProduto() {
      try {
        setLoading(true);
        setErro(null);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const result = await response.json();
        setProduto(result);
      } catch (error) {
        if (error?.name !== 'AbortError') setErro(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto();

    return () => controller.abort();
  }, [id]);

  if (isLoading)
    return (
      <>
        <PageHead title='Carregando' />
        <section className='animate-animeLeft grid grid-cols-2 gap-8'>
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className='relative rounded-md aspect-square w-full overflow-hidden'
            >
              <div className='absolute inset-0 bg-zinc-200 animate-pulse' />
            </div>
          ))}

          <div className='col-start-2 row-start-1'>
            <div className='h-8 w-2/3 rounded bg-zinc-200 animate-pulse mb-2' />
            <div className='inline-block w-1/4 mb-4 text-xl p-1 rounded-md bg-zinc-200 animate-pulse'>
              &nbsp;
            </div>
            <div className='w-[40ch] space-y-2'>
              <div className='h-4 w-full rounded bg-zinc-200 animate-pulse' />
              <div className='h-4 w-full rounded bg-zinc-200 animate-pulse' />
              <div className='h-4 w-2/3 rounded bg-zinc-200 animate-pulse' />
            </div>
          </div>
        </section>
      </>
    );

  if (erro) return <p>Erro: {erro.message}</p>;

  if (!produto) return null;

  return (
    <>
      <PageHead
        title={produto.nome}
        description={`Esse é um produto: ${produto.nome}`}
      />
      <section className='animate-animeLeft grid grid-cols-2 gap-8'>
        {produto.fotos.map((foto) => (
          <div
            key={foto.src}
            className='relative rounded-md aspect-square w-full overflow-hidden'
          >
            {!fotoCarregada[foto.src] && (
              <div className='absolute inset-0 bg-zinc-200 animate-pulse' />
            )}
            <img
              className={`absolute inset-0 h-full w-full object-cover ${fotoCarregada[foto.src] ? 'block' : 'hidden'}`}
              src={foto.src}
              alt={foto.titulo}
              onLoad={() =>
                setFotoCarregada((estado) => ({
                  ...estado,
                  [foto.src]: true,
                }))
              }
            />
          </div>
        ))}
        <div className='col-start-2 row-start-1'>
          <h1 className='text-2xl mb-2'>{produto.nome}</h1>
          <span className='inline-block mb-4 text-xl p-1 bg-green-400 text-green-900 rounded-md'>
            R$ {produto.preco}
          </span>
          <p className='w-[40ch] text-balance'>{produto.descricao}</p>
        </div>
      </section>
    </>
  );
};

export default Produto;
