import React from 'react'
import './Info2.css'
import ReactPlayer from 'react-player'
import Photo1 from '../../../imgs/photo1.png'
import Photo2 from '../../../imgs/photo2.png'

function Info2() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="duplo">
                            <div className="area border-form">
                                <h1 className="facilit">SEJA UM FACILITADOR</h1>
                                <h1>Participe do Training of Trainers</h1>

                                <h3 className="bene">Benefícios:</h3>

                                <ul className="areaul">
                                    <li  className="lista">Participação em nossos Sprints de aceleração na faixa.</li>
                                    <li  className="lista">Benefícios da nossa rede de parceiros, networking e oportunidades de negócio 
                                        Acesso à metodologias como Design Sprint e conteúdo startupeiro.</li>
                                    <li  className="lista">Experiência como facilitador de uma startup.</li>
                                    <li  className="lista">Participação no ecossistema de inovação da Bluefields.</li>
                                    <li  className="lista">Visibilidade profissional</li>
                                    <li  className="lista">Receber $ por isso</li>
                                </ul>

                                <h3 className="bene">Passos para se tornar um facilitador:</h3>

                                <ul className="areaul">
                                    <li  className="lista"><span className="enum">1º </span>Imersão no mundo Blue.</li>
                                    <li  className="lista"><span className="enum">2º </span>Callnhecer.</li>
                                    <li  className="lista"><span className="enum">3º </span>Aprender com quem já fez (estudar materiais, assistir facilitações do tema).</li>
                                    <li  className="lista"><span className="enum">4º </span>Provar que sabe (demonstrar a facilitação em 20min).</li>
                                    <li  className="lista"><span className="enum">5º </span>Ação! Hora de facilitar! </li>
                                </ul>
                                <ReactPlayer width='80%' url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>
                            </div>
                            <div className="area">
                                <h1 className="facilit">SEJA UM MENTOR!</h1>
                                <h3 className="bene">Benefícios:</h3>
                                <ul className="areaul">
                                <li className="lista">Participação em nossos Sprints de aceleração na faixa.</li>
                                <li  className="lista">Benefícios da nossa rede de parceiros, networking e oportunidades de negócio.</li>
                                <li  className="lista">Acesso à metodologias como Design Sprint e conteúdo startupeiro.</li>
                                <li  className="lista">Experiência como mentor de uma startup.</li>
                                <li  className="lista">Participação no ecossistema de inovação da Bluefields.</li>
                                <li  className="lista">Visibilidade profissional.</li>
                                </ul>
                                <h3 className="bene">Passos para se tornar um mentor:</h3>

                                <ul className="areaul">
                                    <li  className="lista"><span className="enum">1º </span>Avaliação de perfil </li>
                                    <li  className="lista"><span className="enum">2º </span>Callnhecer.</li>
                                    <li  className="lista"><span className="enum">3º </span>Ação! Hora da mentoria voluntária!</li>
                                    
                                </ul>
                                <ReactPlayer width='80%' url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row fundoA">
                    <div className="col">
                        <h3 className="map">MAPA DE</h3>
                        <h1 className="soft">SOFTSKILLS E HARDSKILLS</h1>
                        <div className="colunas">
                        <div className="card">
                            <center>
                                <img className="PhotoMobile" src={Photo1}/>
                            </center>
                            <h3 className="bene"  style={{textAlign:"center"}}>Softskills</h3>
                            <ul className="areaul">
                                <li className="lista">Comunicação eficaz e dinâmica.</li>
                                <li className="lista">Jogo de cintura.</li>
                                <li className="lista">Relacionamento interpessoal e empatia.</li>
                                <li className="lista">Flexibilidade e eficiência.</li>
                            </ul>
                        </div>
                            <div className="card">
                                <center>
                                <img className="PhotoMobile" src={Photo2}/>
                                </center>
                                <h3 className="bene" style={{textAlign:"center"}}>Hardskills</h3>
                                <ul className="areaul">
                                    <li className="lista">MKT & Vendas </li>
                                    <li className="lista">Design Sprint </li>
                                    <li className="lista">MVP + Tecnologia </li>
                                    <li className="lista">Pitch para investidor</li>
                                    <li className="lista">Identidade de startup</li>
                                    <li className="lista">Customer Experience / User Experience.</li>
                                    <li className="lista">Employee experience</li>
                                    <li className="lista">Impacto socioambiental</li>
                                    <li className="lista">Finanças</li>
                                    <li className="lista">OKR</li>
                                    <li className="lista">Metodologias Ágeis</li>
                                    
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="insc">INSCREVA-SE!</h1>
                        <h1 className="preen">Preencha o formulário abaixo e se inscreva!</h1>
                        <div className="divform">
                            <div className="coluna">
                                <input type="text" className="inputs" placeholder="Insira seu nome completo"/>
                                <input type="text" className="inputs" placeholder="Insira seu número de telefone"/>
                            </div>
                            <div className="coluna">
                                <input type="text" className="inputs" placeholder="Insira e-mail"/>
                                <input type="text" className="inputs" placeholder="Selecione qual formação deseja"/>
                            </div>
                        </div>
                        <button className="btn-info2">ENVIAR MINHA INSCRIÇÃO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info2
