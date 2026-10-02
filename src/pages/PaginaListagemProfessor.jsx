import ListarProfessores from "../components/ListarProfessores";

function PaginaListagemProfessor(props) {
  return (
    <div className="pagina-listagem">
      <h2>Professores cadastrados</h2>
      <ListarProfessores professores={props.professores} aoExcluir={props.aoExcluirProfessor} />
    </div>
  );
}

export default PaginaListagemProfessor;
