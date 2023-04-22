const formulario = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telefoneInput = document.getElementById('telefone');
  const eventoSelect = document.getElementById('evento');
  const tipoIngressoSelect = document.getElementById('tipo-ingresso');
  const horarioInput = document.querySelector('input[name="horario"]:checked');
  const acompanhantesInput = document.getElementById('acompanhantes');
  const observacoesInput = document.getElementById('observacoes');

  const nome = nomeInput.value;
  const email = emailInput.value;
  const telefone = telefoneInput.value;
  const evento = eventoSelect.value;
  const tipoIngresso = tipoIngressoSelect.value;
  const horario = horarioInput ? horarioInput.value : 'Nenhum selecionado';
  const acompanhantes = acompanhantesInput.value;
  const observacoes = observacoesInput.value;

  const mensagem = `<p class="nome">O nome do usuário é: ${nome}</p>
                     <p class="email">O seu email é: ${email}</p>
                     <p class="telefone">O seu telefone é: ${telefone}</p>
                     <p class="evento">O evento é: ${evento}</p>
                     <p class="tipo-ingresso">O tipo de ingresso é: ${tipoIngresso}</p>
                     <p class="horario">Horário: ${horario}</p>
                     <p class="acompanhantes">Número de acompanhantes: ${acompanhantes}</p>
                     <p class="observacoes">Observações: ${observacoes}</p>`;

  resultadoDiv.innerHTML = mensagem;
});