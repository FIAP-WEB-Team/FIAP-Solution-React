function Header(props) {
    return <div className="container">
        <h2>Com a GOL, você entra em 2023 voando! </h2>

        <div className="steps clearfix">
            <ul role="tablist">
                <li role="tab" className="flight-form-step-li done" cod="1">
                    <a className="flight-form-step-a" href="/">
                        <span className="current-info audible"> </span>
                        <div className="title">
                            <span className="number">1</span>
                            <span className="title_text">Escolha a viagem</span>
                        </div>
                    </a>
                </li>
                <li role="tab" className="flight-form-step-li disabled" cod="2">
                    <a className="flight-form-step-a" href="/flight" >
                        <div className="title">
                            <span className="number">2</span>
                            <span className="title_text">Selecione o voo</span>
                        </div>
                    </a>
                </li>
                <li role="tab" className="flight-form-step-li disabled last" cod="3">
                    <a className="flight-form-step-a" href="/passenger" >
                        <div className="title">
                            <span className="number">3</span>
                            <span className="title_text">Dados do passageiro</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
}

export default Header