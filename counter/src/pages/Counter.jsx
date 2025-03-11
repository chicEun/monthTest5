import React, { useContext } from "react";
import { CounterContext } from "../store";
import { StyledButton, StyledLDiv, StyledRDiv, StyledDiv} from "../styled/CounterStyled";


export const Counter = () => {
    const { state, dispatch } = useContext(CounterContext)
    const { history, setHistory } = useContext(CounterContext);

    return (
        <>
            <StyledDiv>
                <StyledRDiv>
                    {state.count}
                    <StyledButton onClick={() => dispatch({type: "INCREMENT"})}> + </StyledButton>
                    <StyledButton onClick={() => dispatch({type: "DECREMENT"})}> - </StyledButton>
                    <StyledButton onClick={() => dispatch({type: "RESET"})}>RESET</StyledButton>
                </StyledRDiv>
                <StyledLDiv>
                    {/* <StyledHistory></StyledHistory> */}
                </StyledLDiv>
            </StyledDiv>
        </>
    )
}