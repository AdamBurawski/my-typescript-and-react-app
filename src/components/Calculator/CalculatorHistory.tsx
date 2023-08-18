interface Props {
  history: string[];
}

export const CalculatorHistory = ({ history }: Props) => {
  return (
    <ul>
      {history.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};
