interface Props {
  result: number | string | undefined;
  first: number;
  second: number;
}

export const CalculatorResult = ({ result, first, second }: Props) => {
  return (
    <>
      <h1>{result}</h1>
      <p>
        Current values {first} and {second}
      </p>
    </>
  );
};
