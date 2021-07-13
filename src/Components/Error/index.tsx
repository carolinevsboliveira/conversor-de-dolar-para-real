//Package
import RotateLeftIcon from '@material-ui/icons/RotateLeft'

//Style
import { BackButtonStyled } from "../Buttons/Style"
import { ErrorBox, ErrorText, Img } from "./Style"

//Assets
import Logo from "../../Assets/Images/Logo.svg"

const Error = () => {

    return (
        <>
            <Img src={Logo}></Img>
            <ErrorBox>
                <BackButtonStyled
                    variant="contained"
                    size="large"
                    startIcon={<RotateLeftIcon />} onClick={() => { document.location.reload() }}>&nbsp;Recarregar</BackButtonStyled>
                <ErrorText>Uh, algo deu errado :/</ErrorText>
            </ErrorBox>
        </>
    );
};
export default Error