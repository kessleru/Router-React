import { memo } from "react";

const Footer = () => {
  console.log('Footer renderizou');
  return (
    <footer className='border-t border-zinc-200 py-6 text-center text-sm text-zinc-600'>
      <p>Router. Alguns direitos reservados.</p>
    </footer>
  );
};

export default memo(Footer);
