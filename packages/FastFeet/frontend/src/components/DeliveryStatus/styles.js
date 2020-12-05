import styled from 'styled-components';

const textColor = ['#C1BC35', '#4D85EE', '#2CA42B', '#DE3B3B'];
const backgroundColor = ['#F0F0DF', '#BAD2FF', '#DFF0DF', '#FAB0B0'];

export const Content = styled.div`
  width: auto;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.8rem;
  border-radius: 1.8rem;
  font-weight: bold;
  padding-right: 10px;
  color: ${(props) => textColor[props.status]};
  background: ${(props) => backgroundColor[props.status]};

  svg {
    margin-right: 10px;
  }
`;
