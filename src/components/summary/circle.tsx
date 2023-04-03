import './circle.css';
export const Circle = ({ totalCalory,cp }) => {

    let process = (cp > 1 ? 1 : cp);
    let leftDegree=-135,rightDegree=-135;
    if (process<0.5){
        leftDegree+=process*360
    }
    else{
        leftDegree=45;
        rightDegree+=process*360-180;
    }

    let warningColor=process<1?`rgba(0,0,${0xaa},${255*process})`:`#f00`

    return (
        // <div className={'outer'}>
        //     <div className={'inner d-flex justify-content-center align-items-center'}>
        //         {totalCalory.toFixed(0)}
        //     </div>
        // </div>
        <div className={'position-relative'}>
            <div className={'d-flex'}>

                <div className="left" >
                    <div className="leftcircle" style={{"transform":`rotate(${leftDegree}deg)`,'borderLeftColor':warningColor,'borderBottomColor':warningColor}}></div>
                </div>
                <div className="right">
                    <div className="rightcircle" style={{"transform":`rotate(${rightDegree}deg)`,'borderRightColor':warningColor,'borderTopColor':warningColor}}></div>
                </div>
            </div>
            <div><span className={'position-absolute start-50 top-50 translate-middle text-center'}>
                {totalCalory.toFixed(0)}<br /><span className={'detail'}>总热量</span>
            </span></div>
        </div>
    )
}