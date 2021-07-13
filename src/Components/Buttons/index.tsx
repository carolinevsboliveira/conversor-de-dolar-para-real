//Packages
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Style
import {ConvertButtonStyled, BackButtonStyled} from './Style'

interface iProps{
    btnName: string
    btnClicked:boolean,
    btnEnabled?:boolean,
    btnkClickedHandler: Function,

}
const BackButton = (props:iProps) =>{
    return(
        <BackButtonStyled 
        variant="contained"
        size="large"
        startIcon={<ArrowBackIcon />} onClick={() => {document.location.reload()}}>&nbsp;{props.btnName}</BackButtonStyled>
    )
}
const ConvertButton = (props:iProps) =>{
    return(
        <ConvertButtonStyled
        variant="contained"
        size="large"
        disabled={props.btnEnabled}
        startIcon={<SwapHorizIcon />}
        onClick={() => props.btnkClickedHandler(!props.btnClicked)}>{props.btnName}</ConvertButtonStyled>

    )
}
export { BackButton, ConvertButton}