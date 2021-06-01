import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Top.css';
import * as Api from '../services/api.service';
import * as Functions from '../services/functions.service';

function Top({ lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, imgStart, caminho
}) {

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
            <div className={lightBg ? 'home__hero-section fundoImage' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                    }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>

                                {info?.main_title_h1 && <h1 className={lightText ? 'heading' : 'heading dark'}>{info?.main_title_h1?.content}</h1>}
                                {info?.main_title_h2 && <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{info?.main_title_h2?.content}</p>}
                                <Link to={caminho}>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col">
                            <div className="home__hero-img-wrapper">
                               <img src={img} alt={alt} className="home__hero-img"/> 
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;
