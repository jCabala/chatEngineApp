import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  letter-spacing: 0.5px;
}

.ce-chat-list {
  background-color: rgb(240, 240, 240) !important;
}

.ce-chats-container {
  background-color: rgb(240, 240, 240) !important;
}

.ce-active-chat-card {
  background-color: #cabcdc !important;
  border: 4px solid #cabcdc !important;
  border-radius: 0px !important;
}

.ce-chat-subtitle-text {
  color: #595959 !important;
}

.ce-chat-form-container {
  padding-bottom: 20px !important;
}

.ce-text-input {
  border-radius: 6px !important;
  border: 1px solid #3b2a50 !important;
}

.ce-primary-button {
  border-radius: 6px !important;
  background-color: #7554a0 !important;
  position: relative;
  bottom: 1px;
}

.ce-danger-button {
  background-color: white !important;
  border-radius: 22px !important;
}

.ce-settings {
  background-color: rgb(240, 240, 240) !important;
}

.ce-autocomplete-input {
  border-radius: 6px !important;
  border: 1px solid #3b2a50 !important;
}

.ce-autocomplete-options {
  border-radius: 6px !important;
  border: 1px solid #3b2a50 !important;
  background-color: white !important;
}

.ce-chat-settings-container {
  padding-top: 12px !important;
}

.ce-chat-avatars-row {
  display: none !important;
}
`;

export default GlobalStyles;
