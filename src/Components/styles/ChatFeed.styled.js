import styled from 'styled-components';

export const Feed = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  background-color: rgb(240, 240, 240);
`;

export const ChatTitle = styled.h1`
  width: calc(100% - 36px);
  padding: 18px;
  text-align: center;

  color: #7554a0;
  font-weight: 800;
  font-size: 24px;
`;

export const ChatFormContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: calc(100% - 36px);
  padding: 18px;
  background-color: rgb(240, 240, 240);
`;
