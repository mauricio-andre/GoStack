import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTechs } from '../../store/modules/techs/actions';

export default function TechList() {
  const dispatch = useDispatch();
  const [newTech, setNewTech] = useState('');
  const techs = useSelector((state) => state.techs);

  function handleAddTech() {
    dispatch(addTechs(newTech));
    setNewTech('');
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="textTechs">
        Tech
        <input
          type="text"
          id="textTechs"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
        />
      </label>

      <button type="submit">Adicionar</button>
    </form>
  );
}
