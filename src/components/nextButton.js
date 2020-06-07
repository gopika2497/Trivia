import React from 'react';

const Button = (props) =>
{
    return(
        <div>
           <input class="btn btn-success" type="button" value="Next" onClick={props.onNextButton}  />
        
       
        </div>
        
        

    );

}

export default Button;