import Image from 'next/image';
import Link from 'next/link';
import compactBuyButton from '../../public/compactBuy.png';
import { generateOnRampConfig } from '../../constants';
import { generateOnRampURL } from '@coinbase/cbpay-js';

export default function GenerateOnRampButton() {
  const payURL = generateOnRampURL({ ...generateOnRampConfig });
  console.log(payURL);

  return (
    <div>
      <Link href={payURL}>
        <button>
          <Image src={compactBuyButton} alt='pay button' />
        </button>
      </Link>
    </div>
  );
}
