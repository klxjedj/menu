import Form from 'react-bootstrap/Form'

export function Likert(props){
    let {name,optionList,type}=props;

    return(
        <>
        {optionList.map((option,index)=>
            <Form.Check key={index} type={type} value={index+1} name={name} label={option} required></Form.Check>
        )}
        </>
    )
}