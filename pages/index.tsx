
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from './page';
import Search from "../components/utility/search/Search";

const Home: NextPageWithLayout = () => {
  return (
    <section>
        <Search />
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
