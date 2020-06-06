import React from 'react';

import Background from '~/components/Background';
import Appointments from '~/components/Appointments';
import BottomTabs from '~/components/BottomTabs';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5, 6];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointments data={item} />}
        />
      </Container>
      <BottomTabs />
    </Background>
  );
}
