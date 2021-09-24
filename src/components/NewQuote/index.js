import React, {useEffect} from "react";

//styles
import {Wrapper} from './NewQuote.styles';

const NewQuote = ({text, callback}) =>

(
    <Wrapper type="button" onClick={callback} id="new-quote">
{text}
</Wrapper>


);





export default NewQuote;
