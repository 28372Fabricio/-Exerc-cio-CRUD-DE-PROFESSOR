import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav className="barra-navegacao">
      <Link to="/">Início</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/cadastro">Cadastrar Aluno</Link>
      <Link to="/PaginaCadastroProfessor">Cadastrar Professor</Link>
      <Link to="/professores">Professores</Link>
    </nav>
  );
}

export default BarraNavegacao;
