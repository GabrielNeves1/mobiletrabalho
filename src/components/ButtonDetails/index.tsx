import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text, ButtonNext} from './styles';

interface Props {
  id: number;
  nome: string;
}

const ButtonDetails: React.FC<Props> = ({nome, id}) => {
  const navigator = useNavigation();

  const handlerDetails = React.useCallback(() => {
    navigator.navigate('Details', {
      id,
    });
  }, [id, navigator]);

  return (
    <ButtonNext onPress={handlerDetails}>
      <Text>{nome}</Text>
    </ButtonNext>
  );
};

export default ButtonDetails;
