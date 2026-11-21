import { useState } from 'react';

interface AddToCartButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  label?: string;
}

export function AddToCartButton({
  onClick,
  className = '',
  label = 'Add to cart',
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick(e);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1100);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`font-abeezee border border-black transition-colors duration-150 cursor-pointer ${
        added
          ? 'bg-[#FFF600] text-black'
          : 'bg-[#FFF7ED] hover:bg-[#FFF600] text-black'
      } ${className}`}
    >
      {added ? 'Successful!' : label}
    </button>
  );
}
