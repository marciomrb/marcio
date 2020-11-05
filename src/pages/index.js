import Sobre from '../components/sobre';
import Design from '../components/design';
import Web from '../components/webdesign';
import Port from '../components/portfolio';
import Exp from '../components/experiencia';

export default function Home({ beha }) {
  return (
    <>
      <Sobre />
      <Design />
      <Web />
      <Port beha={beha} />
      <Exp />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://behance.net/v2/users/marciomrb/projects?api_key=CDE4h183exq2KsymA02qhHZU3DUvvW4e');
  const data = await response.json();
  return {
    props: {
      beha: data
    },
    revalidate: 86400,
  }
}