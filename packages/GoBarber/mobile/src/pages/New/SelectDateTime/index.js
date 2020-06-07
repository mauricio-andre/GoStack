import React, { useState } from 'react';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Contianer } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Contianer>
        <DateInput date={date} onChange={setDate} />
      </Contianer>
    </Background>
  );
}
