import React from 'react';
import axios from 'axios';

import {Container} from './styles';
import ButtonDetails from '../components/ButtonDetails';

interface Materia {
  id: number;
  nome: string;
}

interface AxiosRes {
  body: Materia[];
}

const Home: React.FC = () => {
  const [materias, setMaterias] = React.useState<AxiosRes>({body: []});

  React.useEffect(() => {
    async function getMaterias() {
      const res = await axios.get<AxiosRes>('http://192.168.0.25:3000');

      setMaterias(res.data);
    }

    getMaterias();
  }, []);

  if (materias.body.length <= 0) {
    return null;
  }

  return (
    <Container>
      {materias.body.map((materia) => (
        <ButtonDetails
          key={String(materia.id)}
          nome={materia.nome}
          id={materia.id}
        />
      ))}
    </Container>
  );
};

export default Home;
