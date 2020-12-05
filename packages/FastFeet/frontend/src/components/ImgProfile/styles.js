import styled from 'styled-components';
import { saturate, lighten, transparentize } from 'polished';

function getHex(text) {
  const arr1 = [];
  let newText = text;
  do {
    newText += text;
  } while (newText.length < 3);

  for (let n = 0, l = newText.length; n < l; n += 1) {
    const hex = Number(newText.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }

  return arr1.slice(1, 4).join('');
}

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 1em;
  background: ${(props) =>
    props.url || !props.initials
      ? ''
      : transparentize(
          0.5,
          lighten(0.2, saturate(1, `#${getHex(props.initials)}`))
        )};
  color: ${(props) =>
    props.initials ? saturate(1, `#${getHex(props.initials)}`) : '#dddddd'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.border ? '2px dashed' : 'none')};
  border-color: ${(props) =>
    props.initials ? saturate(1, `#${getHex(props.initials)}`) : '#dddddd'};
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const New = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 0.3em;
  }
`;
