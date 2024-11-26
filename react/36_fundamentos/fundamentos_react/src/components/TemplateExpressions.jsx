// aula 500 - template expressions
const TemplateExpressions = () => {
  const name = "Pedro";

  const data = {
    age: 31,
    job: "dev",
  };

  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Bem-vindo, {name}</h3>
      <p>
        Sua idade é {data.age} anos e você é {data.job}
      </p>
    </div>
  );
};

export default TemplateExpressions;
