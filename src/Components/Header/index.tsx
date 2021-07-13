//Package
import Grid from '@material-ui/core/Grid';

//Style
import { Img, ContainerText, MainBox, Info, InfoMorning } from './Style';

//Functions
import {  ReturnFormattedNumber } from '../../Functions/Utils/TextValidation';

//Assets
import Logo from "../../Assets/Images/Logo.svg"


interface iProps {
    day: string,
    hour: string,
    currentValue: Number
}
const Header = (props: iProps) => {
    return (
        <>
            <MainBox>
                <Grid container>
                    <Grid item xs={12} md={2} lg={2}>
                        <Img src={Logo}></Img>
                    </Grid>
                    <Grid item xs={12} md={8} lg={4}>
                        <InfoMorning>
                            <ContainerText>
                                <Info>
                                    $ {ReturnFormattedNumber(props.currentValue.toString())} |{" "}
                                    {props.day} | {props.hour}
                                </Info>
                                <InfoMorning>
                                    Dados de câmbio disponibilizados pela Morningstar.
                                </InfoMorning>
                            </ContainerText>
                        </InfoMorning>
                    </Grid>
                </Grid>
            </MainBox>
        </>
    );
};

export default Header
