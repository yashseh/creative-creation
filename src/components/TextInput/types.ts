export interface ITextInputProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
  customStyles?: React.CSSProperties | undefined;
  heading: string;
}
