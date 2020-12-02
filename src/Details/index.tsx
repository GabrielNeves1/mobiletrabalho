import React from 'react';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

import {Container, Text} from './styles';

interface Aluno {
  id: number;
  materiaId: number;
  name: string;
}

interface AxiosRes {
  body: Aluno[];
}

const Details: React.FC = () => {
  const route = useRoute();

  const [alunos, setAlunos] = React.useState<AxiosRes>({body: []});

  React.useEffect(() => {
    async function getAlunos() {
      const res = await axios.post<AxiosRes>('http://192.168.0.25:3000/aluno', {
        materiaId: route.params?.id,
      });

      setAlunos(res.data);
    }

    getAlunos();
  }, []);

  if (alunos.body.length <= 0) {
    return null;
  }

  console.log(alunos.body[0].name);

  return (
    <Container>
      {alunos.body.map((aluno) => (
        <Text key={aluno.id}>{aluno.name}</Text>
      ))}
    </Container>
  );
};

export default Details;
