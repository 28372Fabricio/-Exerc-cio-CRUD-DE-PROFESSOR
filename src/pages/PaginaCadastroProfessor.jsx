import FormulárioProfessor from "../components/FormulárioProfessor";

function PaginaCadastroProfessor(props) {
  return (
    <div className="pagina-cadastro">
      <h2>Cadastrar Professor</h2>
      <FormulárioProfessor aoSalvar={props.aoSalvar} />
    </div>
  );
}

export default PaginaCadastroProfessor;
