// aula 522 - funções em props
const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui</button>
    </div>
  );
};

export default ExecuteFunction;
