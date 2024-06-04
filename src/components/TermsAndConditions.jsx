import React from "react";
import "../assets/css/termsAndConditions.css"

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { modal, onClose, onSwap } = this.props;
    return (
      <>
        {modal && (
          <div className="modal-term">
            <div className="overlay-modal-term" onClick={onClose}></div>
            <div className="modal-content-term">
              <div className="fundo">
                <div className="modal-right-content">
                  <span className="close" onClick={onClose}>
                    <div className="x"></div>
                  </span>
                <div className="content_terms">
                <h1>Termos e Condições Gerais de Uso do Site www.animematch.com ou Aplicativo AnimeMatch</h1>
                        <p>Os serviços do AnimeMatch são fornecidos pela pessoa jurídica ou física com a seguinte Razão Social/nome: AnimeMatch, com nome fantasia AnimeMatch, inscrito no CNPJ/CPF sob o nº 000.000.000.00, titular da propriedade intelectual sobre software, website, aplicativos, conteúdos e demais ativos relacionados à plataforma AnimeMatch.</p>
                        <h2>1. Do Objeto</h2>
                            <p>A plataforma visa licenciar o uso de seu software, website, aplicativos e demais ativos de propriedade intelectual, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.</p>
                            <p>A plataforma caracteriza-se pela prestação do seguinte serviço: </p>
                            <ul>
                                <li>Entregar informações sobre animes e mangás;</li>
                                <li>Possibilitar criação de listas padrões e personalizadas para organização;</li>
                                <li>Interação na comunidade com as abas de comentarios em cada titulo;</li>
                                <li>Ser direcionado para os canais licenciados para consumo das obras</li>
                            </ul>
                        <h2>2. Da Aceitação</h2>
                            <p>O presente Termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas ou jurídicas, usuárias do site ou aplicativo.</p>
                            <p>Ao utilizar a plataforma, o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de aplicação das penalidades cabíveis.</p>
                            <p>A aceitação do presente instrumento é imprescindível para o acesso e para a utilização de quaisquer serviços fornecidos pela empresa. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los.</p>
                        <h2>3. Do Acesso dos Usuários</h2>
                            <p>Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.</p>
                        <h2>4. Do suporte</h2>
                            <p>Em caso de qualquer dúvida, sugestão ou problema com a utilização da plataforma, o usuário poderá entrar em contato com o suporte, através do email animematch@email.com .</p>
                            <p>Estes serviços de atendimento ao usuário estarão disponíveis nos seguintes dias e horários: De segunda a .</p>
                        <h2> 5. Das responsabilidades </h2>
                            <h3>É de responsabilidade do usuário:</h3>
                                <p>a) defeitos ou vícios técnicos originados no próprio sistema do usuário;</p>
                                <p>b) a correta utilização da plataforma, dos serviços ou produtos oferecidos, prezando pela boa convivência, pelo respeito e cordialidade entre os usuários;</p>
                                <p>c) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Geral de Uso, na respectiva Política de Privacidade e na legislação nacional e internacional;</p>
                                <p>d) pela proteção aos dados de acesso à sua conta/perfil (login e senha).</p>
                            <h3>É de responsabilidade da plataforma animematch:</h3>
                                <p>a) indicar as características do serviço ou produto;</p>
                                <p>b) os defeitos e vícios encontrados no serviço ou produto oferecido desde que lhe tenha dado causa;</p>
                                <p>c) as informações que foram por ele divulgadas, sendo que os comentários ou informações divulgadas por usuários são de inteira responsabilidade dos próprios usuários;</p>
                                <p>d) os conteúdos ou atividades ilícitas praticadas através da sua plataforma.</p>
                                <p>A plataforma não se responsabiliza por links externos contidos em seu sistema que possam redirecionar o usuário à ambiente externo a sua rede.</p>
                                <p>Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas.</p>
                        <h2>6. Dos direitos autorais</h2>
                            <p>O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciável, para acessar e fazer uso da plataforma e dos serviços e produtos por ela disponibilizados.</p>
                            <p>A estrutura do site ou aplicativo, as marcas, logotipos, nomes comerciais, layouts, gráficos e design de interface, imagens, ilustrações, fotografias, apresentações, vídeos, conteúdos escritos e de som e áudio, programas de computador, banco de dados, arquivos de transmissão e quaisquer outras informações e direitos de propriedade intelectual da razão social animematch, observados os termos da Lei da Propriedade Industrial (Lei nº 9.279/96), Lei de Direitos Autorais (Lei nº 9.610/98) e Lei do Software (Lei nº 9.609/98), estão devidamente reservados.</p>
                            <p>Este Termos de Uso não cede ou transfere ao usuário qualquer direito, de modo que o acesso não gera qualquer direito de propriedade intelectual ao usuário, exceto pela licença limitada ora concedida.</p>
                            <p>O uso da plataforma pelo usuário é pessoal, individual e intransferível, sendo vedado qualquer uso não autorizado, comercial ou não-comercial. Tais usos consistirão em violação dos direitos de propriedade intelectual da razão social AnimeMatch, puníveis nos termos da legislação aplicável.</p>
                        <h2>7. Das sanções</h2>
                            <h3>Sem prejuízo das demais medidas legais cabíveis, a razão social animematch poderá, a qualquer momento, advertir, suspender ou cancelar a conta do usuário:</h3>
                                <p>a) que violar qualquer dispositivo do presente Termo;</p>
                                <p>b) que descumprir os seus deveres de usuário;</p>
                                <p>c) que tiver qualquer comportamento fraudulento, doloso ou que ofenda a terceiros.</p>
                        <h2>8. Da rescisão</h2>
                            <p>A não observância das obrigações pactuadas neste Termo de Uso ou da legislação aplicável poderá, sem prévio aviso, ensejar a imediata rescisão unilateral por parte da razão social animematch e o bloqueio de todos os serviços prestados ao usuário.</p>
                        <h2>9. Das alterações</h2>
                            <p>Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, por parte de AnimeMatch, para adequar ou modificar os serviços, bem como para atender novas exigências legais. As alterações serão veiculadas OU pelo site www.animematch.com.br OU pelo aplicativo AnimeMmatch e o usuário poderá optar por aceitar o novo conteúdo ou por cancelar o uso dos serviços, caso seja assinante de algum serviço.</p>
                        <h2>10. Da política de privacidade</h2>
                            <p>Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma.</p>
                        <h2>11. Do foro</h2>
                            <p>Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.</p>
                            <p>Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede da empresa.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default TermsAndConditions;
