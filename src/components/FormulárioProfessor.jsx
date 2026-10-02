import { useState } from "react";
import CampoTexto from "./CampoTexto";

function FormulárioProfessor(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [data_admissão, setDataAdmissão] = useState("");

  function aoEnviar(e) {
    e.preventDefault();
    const Professor = {
      nome: nome,
      email: email,
      cpf: cpf,
      disciplina: disciplina,
      data_admissão: data_admissão,
    };
    props.aoSalvar(Professor);
    setNome("");
    setEmail("");
    setCpf("");
    setdisciplina("");
    setdata_admissão("");
  }

  return (
    <form className="formulario-professor" onSubmit={aoEnviar}>
      <CampoTexto rotulo="Nome" valor={nome} aoAlterar={setNome} />
      <CampoTexto rotulo="Email" tipo="email" valor={email} aoAlterar={setEmail} />
      <CampoTexto rotulo="CPF" valor={cpf} aoAlterar={setCpf} />
      <CampoTexto rotulo="Data de Admissão" tipo="date" valor={data_admissão} aoAlterar={setDataAdmissão} />
      <CampoTexto rotulo="Disciplina" valor={disciplina} aoAlterar={setDisciplina} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormulárioProfessor;
