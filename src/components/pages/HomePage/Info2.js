import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import './Info2.css'
import ReactPlayer from 'react-player'
import Photo1 from '../../../imgs/photo1.png'
import Photo2 from '../../../imgs/photo2.png'
import { Link } from 'react-router-dom';
import * as Api from '../../../services/api.service'
import * as Functions from '../../../services/functions.service';

function Info2() {

    const [info, setInfo] = React.useState({});
    const getInfo = async () => {
        try {
            let response = (await Api.getInfoData());
            // console.log(response.data)
            if (response?.data) {
                setInfo(Functions.dataExtractor(response?.data));
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getInfo();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="duplo">
                            <div className="area border-form">
                                <h1 className="facilit">{info?.be_facilitator_title?.content || "SEJA UM FACILITADOR"}</h1>
                                <h1>{info?.be_facilitator_description?.content || "Participe do Training of Trainers"}</h1>

                                <h3 className="bene">Benefícios:</h3>

                                <ul className="areaul">
                                    {info?.be_facilitator_benefits && info?.be_facilitator_benefits?.map((benefit) => {
                                        return (
                                            <li className="lista" key={benefit.content + benefit.order}>{benefit.content}</li>
                                        );
                                    })}
                                </ul>

                                <h3 className="bene">Passos para se tornar um facilitador:</h3>

                                <ul className="areaul">
                                    {info?.step_facilitator && info?.step_facilitator?.map((step) => {
                                        return (
                                            <li className="lista" key={step.content + step.order}><span className="enum">{step.order}º </span>{step.content}</li>
                                        );
                                    })}
                                </ul>
                                {/* <ReactPlayer width='80%' url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s" /> */}
                                {info?.step_facilitator_video_url && <ReactPlayer width='80%' url={info?.step_facilitator_video_url?.content} />}
                            </div>
                            <div className="area">
                                <h1 className="facilit">{info?.be_mentor_title?.content || "SEJA UM MENTOR!"}</h1>
                                <h1>{info?.be_mentor_description?.content || "..."}</h1>

                                <h3 className="bene">Benefícios:</h3>

                                <ul className="areaul">
                                    {info?.be_mentor_benefits && info?.be_mentor_benefits?.map((benefit) => {
                                        return (
                                            <li className="lista" key={benefit.content + benefit.order}>{benefit.content}</li>
                                        );
                                    })}
                                </ul>
                                <h3 className="bene">Passos para se tornar um mentor:</h3>

                                <ul className="areaul">
                                    <li className="lista"><span className="enum">1º </span>Avaliação de perfil </li>
                                    <li className="lista"><span className="enum">2º </span>Callnhecer.</li>
                                    <li className="lista"><span className="enum">3º </span>Ação! Hora da mentoria voluntária!</li>

                                </ul>
                                {/* <ReactPlayer width='80%' url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s" /> */}
                                {info?.step_mentor_video_url && <ReactPlayer width='80%' url={info?.step_mentor_video_url?.content} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row fundoA">
                    <div className="col">
                        <h3 className="map">MAPA DE</h3>
                        <h1 className="soft">SOFTSKILLS E HARDSKILLS</h1>
                        <div className="colunas">
                            <div className="card2">
                                <center>
                                    <img className="PhotoMobile" src={Photo1} />
                                </center>
                                {info?.softskills_title && <h3 className="bene" style={{ textAlign: "center" }}>{info?.softskills_title?.content}</h3>}
                                {info?.softskills_description && <h3 className="bene" style={{ textAlign: "center" }}>{info?.softskills_description?.content}</h3>}
                                <ul className="areaul">
                                    {info?.softskills_item && info?.softskills_item?.map((skill) => {
                                        return (
                                            <li className="lista" key={skill.content + skill.order}>{skill.content}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="card2">
                                <center>
                                    <img className="PhotoMobile" src={Photo2} />
                                </center>
                                {info?.hardskills_title && <h3 className="bene" style={{ textAlign: "center" }}>{info?.hardskills_title?.content}</h3>}
                                {info?.hardskills_description && <h3 className="bene" style={{ textAlign: "center" }}>{info?.hardskills_description?.content}</h3>}
                                <ul className="areaul">
                                    {info?.hardskills_item && info?.hardskills_item?.map((skill) => {
                                        return (
                                            <li className="lista" key={skill.content + skill.order}>{skill.content}</li>
                                        );
                                    })}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="time">Quem já faz parte do time:</h1>
                        <p className="descTime">Sinta-se à vontade para nos adicionar no LinkedIn e enviar uma mensagem :)</p>
                        <div className="Containercards">
                            {info?.team_persons?.map((person) => {
                                person = info.getPerson(person.order);
                                return (
                                    <div key={person?.person_name?.content + person?.person_name?.order} className="card">
                                        {person?.person_photo_url && <img src={person?.person_photo_url?.content} />}
                                        <div className="container2">
                                            <h4 className="nameTime"><b>{person?.person_name?.content}</b>
                                                <a href={person?.person_linkedin?.content}><FaLinkedin className="Linkedin" /></a></h4>
                                            <p className="descFunTime">{person?.person_function?.content}</p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* <Link to='/mentor'> */}
                        <h1 className="insc">INSCREVA-SE!</h1>
                        <h1 className="preen">Preencha o formulário abaixo e se inscreva!</h1>
                        <div className="divform">
                            <div className="coluna">
                                <input type="text" className="inputs" placeholder="Insira seu nome completo" />
                                <input type="text" className="inputs" placeholder="Insira seu número de telefone" />
                            </div>
                            <div className="coluna">
                                <input type="text" className="inputs" placeholder="Insira e-mail" />
                                <input type="text" className="inputs" placeholder="Selecione qual formação deseja" />
                            </div>
                        </div>
                        <button className="btn-info2">ENVIAR MINHA INSCRIÇÃO</button>

                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info2
