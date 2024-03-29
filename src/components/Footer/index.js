import Button from '../Button';


function Footer() {
    return <div className="fieldset-footer">
        <span id="form-step-span" step="1">Passo 1 de 4</span>
        <Button
            type="button"
            label="Proximo"
            id="btnNext"
            disabled={false}
            background="#F24E1E"
            color="#FFF"
            display=""
        />
        <Button
            type="button"
            label="Anterior"
            id="btnPrevious"
            disabled={false}
            background="#F24E1E"
            color="#FFF"
            display="none"
        />
    </div>
}

export default Footer