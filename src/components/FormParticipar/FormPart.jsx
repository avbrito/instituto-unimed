import React, { Component, useState, useRef } from 'react';
import './FormPart.css';
import inspiracao from '../../img/inspiracao.png';
import viva from '../../img/viva.png';
import impulso from '../../img/impulso.png';
import { Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import axios from 'axios';

function FormPart() {

    const [campos, setFormData] = useState({
        nomeProjeto : '',
        numeroProjeto : '',
        valorTotAprovCap : '',
        leiIncentivo : '',
        conseguiuCaptar : '',
        oferecidoComunidade : '',
        faixaEtaria : '',
        nomeProponente : '',
        cpf : '',
        email : '',
        telefone : '',
        tipoPessoa : '',
        razaoSocial : '',
        cnpj : '',
        endereco : '',
        dadosPessoaJuridica : '',
        ecolabCooperado : '',
        ecolabCoopParentesco : '',
        eFuncPub : '',
        conflitoInteresse : '',
        nomeRespPreench : '',
        cpfRespPreench : '',
        deuAceiteConfInter : '',
        deuAceiteTermos : '',
        docPubAprov : '',
        docApresProj : '',
        docHistReali : ''
      });

      const fileInputRef = useRef(null);
      const fileInputRef1 = useRef(null);
      const fileInputRef2 = useRef(null);

      const [docPubAprov, setnomePdf1] = useState(null);
      const [docApresProj, setnomePdf2] = useState(null);
      const [docHistReali, setnomePdf3] = useState(null);

      const [isLoading, setIsLoading] = useState(false);
      const [isSucesso, setIsSucesso] = useState(false);
      const [isErro, setisErro] = useState(false);

      const handleInputChange = (e) => {
        setFormData({
          ...campos,
          [e.target.name]: e.target.value,
        });
      };


      const handleButtonClick1 = () => {
        fileInputRef.current.click();
      };

      const handleButtonClick2 = () => {
        fileInputRef1.current.click();
      };

      const handleButtonClick3 = () => {
        fileInputRef2.current.click();
      };
    
      const handleFileChange = (e) => {
        const fieldName = e.target.name;
        const file = e.target.files[0];
      
        // Atualizar o estado local com o nome do arquivo
        if (fieldName === "docPubAprov") {            
            setnomePdf1(file.name);
        } else if (fieldName === "docApresProj") {            
            setnomePdf2(file.name);
        } else if (fieldName === "docHistReali") {
            setnomePdf3(file.name);
        }
      
        // Atualizar o estado local dos campos do formulário
        const updatedFormData = { ...campos };
      
        if (fieldName === "docPubAprov") {
          updatedFormData.docPubAprov = file;
        } else if (fieldName === "docApresProj") {
          updatedFormData.docApresProj = file;
        } else if (fieldName === "docHistReali") {
          updatedFormData.docHistReali = file;
        }
      
        setFormData(updatedFormData);

      };
    

        const handleSubmit = async (e) => {
        e.preventDefault();  
        setIsLoading(true);
        setIsSucesso(false);
        setisErro(false);

        try {
                const formData = new FormData();
                Object.keys(campos).forEach(key => formData.append(key, campos[key]));

                // Adicionar apenas os arquivos selecionados ao FormData
                if (docPubAprov) formData.append('docPubAprov', docPubAprov);
                if (docApresProj) formData.append('docApresProj', docApresProj);
                if (docHistReali) formData.append('docHistReali', docHistReali);

                axios.post('https://apisunimed.unimeduberlandia.coop.br/apisuni/Api_institutounimed/enviaFormSolPatrocinio', 
                formData,
                {
                    headers: {
                        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                    }
                })
                .then(response => { 
                    setIsLoading(false);
                    
                    if(response.data.status === "sucesso"){
                        setIsSucesso(true);
                        setisErro(false);
                    }else{
                        setIsSucesso(false);
                        setisErro(true);
                    } 
                });

        } catch (error) {
          console.error('Erro ao enviar o formulário:', error);
        }
      };

    return (
        <div className="container text-center">
            <form className="my-form" onSubmit={handleSubmit}>

                <h2>Inscrição do Projeto</h2>
                <br />
                <div class="mb-3">
                    <label for="nomeProjeto" class="form-label">Nome do projeto:</label>
                    <input type="text" class="form-control" id="nomeProjeto" name="nomeProjeto" minlength="8" onChange={handleInputChange} required />
                </div>
                <div class="mb-3">
                    <label for="numeroProjeto" class="form-label">Número do projeto (PRONAC/CA):</label>
                    <input type="text" class="form-control" id="numeroProjeto" name="numeroProjeto" onChange={handleInputChange} required />
                </div>
                <div class="mb-3">
                    <label for="valorAprovado" class="form-label">Valor total aprovado para a captação (R$):</label>
                    <input type="text" class="form-control" id="valorTotAprovCap" name="valorTotAprovCap" onChange={handleInputChange} required />
                </div>
                <div class="mb-3">
                    <label for="tipoLeiIncentivo" class="form-label">Selecione a lei de incentivo:</label>
                    <select class="form-select" id="tipoLeiIncentivo" name="leiIncentivo" onChange={handleInputChange} required>
                        <option value="">Tipo do evento</option>
                        <option value="Lei 1">Evento 1</option>
                        <option value="Lei 2">Evento 2</option>
                        <option value="Lei 3">Evento 3</option>

                    </select>
                </div>
                <div class="mb-3">
                    <label for="captacaoRecurso" class="form-label">O projeto já conseguiu captar algum recurso?</label>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="conseguiuCaptar" id="conseguiuCaptar" onChange={handleInputChange} value="Sim" />
                            <label class="form-check-label" for="captacaoRecursoSim">Sim</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="conseguiuCaptar" id="conseguiuCaptar" onChange={handleInputChange} value="Não" />
                            <label class="form-check-label" for="captacaoRecursoNao">Não</label>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="gratuitoComunidade" class="form-label">O projeto é oferecido para a comunidade de forma totalmente gratuita?</label>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="oferecidoComunidade" onChange={handleInputChange} id="oferecidoComunidade" value="Sim" />
                            <label class="form-check-label" for="gratuitoComunidadeSim">Sim</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="oferecidoComunidade" onChange={handleInputChange} id="oferecidoComunidade" value="Não" />
                            <label class="form-check-label" for="gratuitoComunidadeNao">Não</label>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="faixaEtaria" class="form-label">Faixa etária dos participantes:</label>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="faixaEtaria" id="0_5_anos" value="0 - 5 anos" onChange={handleInputChange}/>
                            <label class="form-check-label" for="0_5_anos">0 - 5 anos</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="faixaEtaria" id="6_14_anos" value="6 - 14 anos" onChange={handleInputChange}/>
                            <label class="form-check-label" for="6_14_anos">6 - 14 anos</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="faixaEtaria" id="15_18_anos" value="15 - 18 anos" onChange={handleInputChange}/>
                            <label class="form-check-label" for="15_18_anos">15 - 18 anos</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="faixaEtaria" id="19_39_anos" value="19 - 39 anos" onChange={handleInputChange}/>
                            <label class="form-check-label" for="19_39_anos">19 - 39 anos</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="faixaEtaria" id="40_59_anos" value="40 - 59 anos" onChange={handleInputChange}/>
                            <label class="form-check-label" for="40_59_anos">40 - 59 anos</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="faixaEtaria" id="60_79_anos" value="60 - 79 anos" onChange={handleInputChange}/>
                            <label class="form-check-label" for="60_79_anos">60 - 79 anos</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="faixaEtaria" id="acima_80_anos" value="Acima de 80" onChange={handleInputChange}/>
                            <label class="form-check-label" for="acima_80_anos">Acima de 80</label>
                        </div>
                    </div>
                </div>



                <h2>Dados do(a) proponente</h2>
                <div class="mb-3">
                    <label for="nomeProponente" class="form-label">Nome do proponente:</label>
                    <input type="text" class="form-control" id="nomeProponente" name="nomeProponente" onChange={handleInputChange} required />
                </div>
                <div class="mb-3">
                    <label for="emailProponente" class="form-label">E-mail do proponente:</label>
                    <input type="email" class="form-control" id="emailProponente" name="email" onChange={handleInputChange} required />
                </div>
                <div class="mb-3">
                    <label for="cpfProponente" class="form-label">CPF do proponente:</label>
                    <InputMask type="text" class="form-control" id="cpfProponente" mask="999.999.999-99" required />
                </div>
                <div class="mb-3">
                    <label for="telefoneProponente" class="form-label">Telefone do proponente:</label>
                    <InputMask type="tel" class="form-control" id="telefoneProponente" mask="(99) 99999-9999" required />
                </div>
                <div class="mb-3">
                    <label for="tipoProponente" class="form-label">O projeto foi inscrito em nome da pessoa física ou jurídica?</label>
                    <br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="tipoPessoa" id="tipoProponenteFisica" value="Física" onChange={handleInputChange} />
                        <label class="form-check-label" for="tipoProponenteFisica">Pessoa Física</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="tipoPessoa" id="tipoProponenteJuridica" value="Jurídica" onChange={handleInputChange} />
                        <label class="form-check-label" for="tipoProponenteJuridica">Pessoa Jurídica</label>
                    </div>
                </div>
                <br />
                <div class="mb-3">
                    <label for="razaoSocial" class="form-label" style={{ color: '#979797' }}>Razão Social:</label>
                    <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="cnpj" class="form-label" style={{ color: '#979797' }}>CNPJ:</label>
                    <input type="text" class="form-control" id="cnpj" name="cnpj" onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="endereco" class="form-label" style={{ color: '#979797' }}>Endereço completo (Rua/Av./Praça, número, bairro, CEP):</label>
                    <textarea class="form-control" id="endereco" name="endereco" rows="3" onChange={handleInputChange}></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label" style={{ color: '#979797' }}>Os dados do representante legal da pessoa jurídica são os mesmos que já foram informados nesse formulário?</label>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="dadosPessoaJuridica" id="mesmoRepresentanteSim" value="Sim" onChange={handleInputChange} />
                            <label class="form-check-label" for="mesmoRepresentanteSim">Sim</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="dadosPessoaJuridica" id="mesmoRepresentanteNao" value="Não" onChange={handleInputChange} />
                            <label class="form-check-label" for="mesmoRepresentanteNao">Não</label>
                        </div>
                    </div>
                </div>


                <h2>Documentos do Projeto</h2>
                <br />
                <div class="mb-3">
                    <label for="publicacaoAprovacao" class="form-label">Publicação de aprovação ou prorrogação dos projetos no diário oficial:</label>
                    <div class="input-group">
                        <input type="file" id="docPubAprov" name="docPubAprov" ref={fileInputRef} key={docPubAprov} style={{ display: 'none' }} onChange={handleFileChange}/>
                        <button type="button" class="btn btn-primary" id="anexar" onClick={handleButtonClick1}>Anexo</button>
                        
                    </div>
                </div>

                <div class="mb-3">
                    <label for="apresentacaoProjeto" class="form-label">Apresentação do projeto, incluindo as suas contrapartidas sociais:</label>
                    <div class="input-group">
                        <input type="file" id="docApresProj" name="docApresProj" ref={fileInputRef1} key={docApresProj} style={{ display: 'none' }} onChange={handleFileChange} />
                        <button type="button" class="btn btn-primary" id="anexar"  onClick={handleButtonClick2} >Anexo</button>
                        <span id="nomePdf2"></span>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="historicoProjetos" class="form-label">Histórico de projetos realizados:</label>
                    <div class="input-group">
                        <input type="file" id="docHistReali" name="docHistReali" ref={fileInputRef2} key={docHistReali} style={{ display: 'none' }} onChange={handleFileChange} />
                        <button type="button" class="btn btn-primary" id="anexar" onClick={handleButtonClick3}>Anexo</button>
                        <span id="nomePdf3"></span>
                    </div>
                </div>



                <h2>Compliance</h2>
                <div class="mb-3">
                    <label class="form-label">O proponente ou algum dos terceiros listados em seu projeto é colaborador ou cooperado do grupo Unimed?</label>
                    <div>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="ecolabCooperado" id="colaboradorUnimedSim" onChange={handleInputChange} value="Sim" />
                            <label class="form-check-label" for="colaboradorUnimedSim">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="ecolabCooperado" id="colaboradorUnimedNao" onChange={handleInputChange} value="Não" />
                            <label class="form-check-label" for="colaboradorUnimedNao">Não</label>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">O proponente ou algum dos terceiros listados em seu projeto possuem relação de parentesco com algum colaborador ou cooperado do grupo Unimed?</label>
                    <div>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="ecolabCoopParentesco" id="colaboradorUnimedParentescoSim" onChange={handleInputChange} value="Sim" />
                            <label class="form-check-label" for="colaboradorUnimedSim">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="ecolabCoopParentesco" id="colaboradorUnimedParentescoNao" onChange={handleInputChange} value="Não" />
                            <label class="form-check-label" for="colaboradorUnimedNao">Não</label>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">O proponente ou algum dos terceiros listados em seu projeto é funcionário público, seja de esfera municipal, estadual ou federal?</label>
                    <div>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="eFuncPub" id="colaboradorFuncPubUnimedSim" onChange={handleInputChange} value="Sim" />
                            <label class="form-check-label" for="colaboradorUnimedSim">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="eFuncPub" id="colaboradorFuncPubUnimedNao" onChange={handleInputChange} value="Não" />
                            <label class="form-check-label" for="colaboradorUnimedNao">Não</label>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Considerando todas as pessoas envolvidas no seu projeto, você afirma que não há relações que gerem conflito de interesse?</label>
                    <p id='obs'>Por conflito de interesse entende-se: quando questões diversas (profissionais, financeiras, familiares, políticas ou pessoais) podem interferir no julgamento das pessoas ao exercerem suas ações dentro das organizações e projetos sociais, favorecendo ou facilitando qualquer etapa do processo em benefício próprio ou de alguém.</p>
                    <div>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="conflitoInteresse" id="colaboradorUnimedSim" onChange={handleInputChange} value="Sim" />
                            <label class="form-check-label" for="colaboradorUnimedSim">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="conflitoInteresse" id="colaboradorUnimedNao" onChange={handleInputChange} value="Não" />
                            <label class="form-check-label" for="colaboradorUnimedNao">Não</label>
                        </div>
                    </div>
                </div>


                <br />
                <h2>Declaração</h2>
                <br />
                <div class="mb-3">
                    <label for="responsavelPreenchimento" class="form-label">Nome do responsável pelo preenchimento deste formulário:</label>
                    <input type="text" class="form-control" id="responsavelPreenchimento" name="nomeRespPreench" required onChange={handleInputChange}/>
                </div>
                <div class="mb-3">
                    <label for="cpfResponsavelPreenchimento" class="form-label">CPF do responsável pelo preenchimento deste formulário:</label>
                    <input type="text" class="form-control" id="cpfResponsavelPreenchimento" name="cpfRespPreench" required onChange={handleInputChange}/>
                </div>
                <div class="mb-3">
                    <label class="form-label" id='declaro'>Declaro, para os devidos fins, que as informações fornecidas no Formulário de Conflito de Interesses são verdadeiras, condizentes com os fatos à época de seu preenchimento e não ocultaram quaisquer dados. Se em algum momento as informações prestadas deixarem de representar a realidade, concordo em comunicar as mudanças imediatamente ao grupo Unimed, por meio do e-mail contato@institutounimeduberlandia.coop.br</label>
                    <div>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="deuAceiteConfInter" id="confInteresseSim" value="Sim" onChange={handleInputChange}/>
                            <label class="form-check-label" for="colaboradorUnimedSim">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="deuAceiteConfInter" id="confInteresseNao" value="Não" onChange={handleInputChange}/>
                            <label class="form-check-label" for="colaboradorUnimedNao">Não</label>
                        </div>
                    </div>
                </div>
                <br />
                <div class="mb-3">
                    <label class="form-label">Com o objetivo de avaliar os projetos que serão patrocinados via leis de incentivo fiscal, os dados não serão compartilhados com terceiros e as informações coletadas serão armazenadas em nuvem da Microsoft e/ou pasta física. O acesso aos dados e informações fornecidos se limitará à área de Governança Corporativa e de Riscos/Compliance.
                        <br /><br />
                        Os dados e informações serão retidos por 12 meses, desde que não haja obrigatoriedade legal que determine extensão ao prazo de retenção. Após o prazo informado, os dados serão permanentemente eliminados dos bancos de dados e as cópias físicas serão descartadas de forma segura.
                        <br /><br />
                        Ao preencher o formulário declaro estar ciente e de acordo com os Termos de uso informados e com a <a href='https://www.unimeduberlandia.coop.br/portal/privacidadededados/'>Política de Privacidade da Unimed Uberlândia.</a></label>
                    <div>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="deuAceiteTermos" id="aceiteSim" value="Sim" onChange={handleInputChange}/>
                            <label class="form-check-label" for="colaboradorUnimedSim">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="deuAceiteTermos" id="aceiteNao" value="Não" onChange={handleInputChange}/>
                            <label class="form-check-label" for="colaboradorUnimedNao">Não</label>
                        </div>
                    </div>
                </div>


                <div className="mb-3 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" id='enviar' disabled={isLoading}>{isLoading ? 'Enviando...' : 'Enviar Projeto'}</button>
                </div>

                <div className="mb-3 d-flex justify-content-center" >     
                    <div style={{ display: 'none' }}>               
                        <div class="spinner-border text-success" role="status"  >
                            <span class="sr-only"></span>
                        </div>&nbsp;&nbsp;Enviando...
                    </div>
                </div>


                {isLoading && <div className="loader">
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only"></span>
                    </div>&nbsp;&nbsp;Enviando...</div>
                }

                {isSucesso && 
                    <div className="mb-3 d-flex justify-content-center"  >
                        <alert class="alert alert-success" id="msgSuccesso">Mensagem enviada com sucesso.</alert>
                        
                    </div>
                }

                {isErro && 
                    <div className="mb-3 d-flex justify-content-center" >
                            <alert class="alert alert-danger" id="msgErro">Nenhum processamento realizado. Aguarde alguns minutos e tente novamente</alert>
                    </div>
                }

            </form>
        </div>
    );
};

export default FormPart;