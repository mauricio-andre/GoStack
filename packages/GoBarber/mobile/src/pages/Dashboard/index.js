import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import Background from '~/components/Background';
import Appointments from '~/components/Appointments';
import BottomTabs from '~/components/BottomTabs';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');
      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceledAt: response.data.canceledAt,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointments onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
      <BottomTabs />
    </Background>
  );
}
