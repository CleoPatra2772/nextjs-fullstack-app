import Image from "next/image";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from './page';
import Search from "../components/utility/search/Search";
import logo from '../assets/img/google-logo.png';
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
      src={logo}
      alt='Google Logo'
      width={272}
      height={92}
      priority
      />
        <Search />
        <p>
          Google offered in: {' '}
          <Link href="/" locale={locale == 'en' ? 'fr' : 'en'}>
            <a className="underline text-blue-600">Francais</a>
          </Link>
        </p> 
    </section>
  );
};


export default Home;

Home.getLayout = (page) => {
  return (
  <PrimaryLayout>
    
    {page}
  
    </PrimaryLayout>
  );
}
