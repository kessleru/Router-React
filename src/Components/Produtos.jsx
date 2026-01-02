import { useEffect, useState } from 'react';
import { PageHead } from '../seo/PageHead';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProduto() {
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
    fetchProduto();

    return () => controller.abort();
  }, []);

  if (produtos === null) return null;

  return (
    <>
      <PageHead title='Produtos' description='Informações para contato' />

      <h1 className='mb-4 font-bold text-3xl'>Produtos</h1>
      <section className='animate-animeLeft grid grid-cols-3 gap-8'>
        {produtos.map((produto) => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img
              className='rounded-md'
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
            />
            <h1 className='my-2 text-xl'>{produto.nome}</h1>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Produtos;
