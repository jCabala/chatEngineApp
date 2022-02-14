import styled from 'styled-components';

export const MessageWrapper = styled.div`
  width: 100%;
`;

export const MessageBlock = styled.div`
  width: 100%;
  display: inline-block;
`;

export const ReadRecipts = styled.div`
  position: relative;
  bottom: 6px;

  margin-left: ${({ isMyMessage }) => (isMyMessage ? '0' : '69px')};
  margin-right: ${({ isMyMessage }) => (isMyMessage ? '18px' : '0')};
`;

export const ReadRecipt = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 13px;
  margin: 1.5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 14px;

  float: ${({ isMyMessage }) => (isMyMessage ? 'right' : 'left')};

  background-image: 'url(${({ avatar }) => avatar})';
`;

export const Message = styled.div`
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  max-width: 60%;
`;

export const MessageImg = styled.img`
  margin-right: 18px;
  object-fit: contain;
  border-radius: 6px;
  height: 30vw;
  /* width: 30vw; */
  max-height: 250px;
  max-width: 250px;
  min-height: 100px;
  min-width: 100px;

  border: 5px solid
    ${({ isMyMessage, theme }) =>
      isMyMessage ? theme.colors.messageSend : theme.colors.messageReceived};

  padding: 10px;

  float: ${({ isMyMessage }) => (isMyMessage ? 'right' : 'none')};

  margin-left: ${({ isMyMessage, isFirst }) => {
    if (isMyMessage) {
      return '0';
    } else {
      const marg = isFirst ? '4px' : '48px';
      return marg;
    }
  }};
`;
