import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `}
`;

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 23px;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `}
`;