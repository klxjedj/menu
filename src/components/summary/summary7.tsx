import { useAppSelector } from '../../store/hooks';
import { dishData } from '../../data/data';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import { Circle } from './circle';
const Summary = () => {

    let cart = useAppSelector((state) => { return state.cart });
    let info = useAppSelector((state) => state.info)
    console.log(info)
    let totalCalory = 0, totalProtein = 0, totalFat = 0, totalHydroCarbon = 0, totalFibra = 0, totalDiversity = 0;
    cart.map(
        (num, index) => {
            if (num > 0) {
                totalCalory += dishData[index]['calory'] * num * dishData[index]['weight'] / 100;
                totalProtein += dishData[index]['protein'] * num * dishData[index]['weight'] / 100;
                totalFat += dishData[index]['fat'] * num * dishData[index]['weight'] / 100
                totalHydroCarbon += dishData[index]['hydroCarbon'] * num * dishData[index]['weight'] / 100
                totalFibra += dishData[index]['fibra'] * num * dishData[index]['weight'] / 100
                totalDiversity += dishData[index]['diversity']
            }

        }
    )
    let { gender: g, height: h, weight: w, exerciseFrequency: f, age: a } = info;

    let bmi = w / ((h / 100) * (h / 100))
    let figureLevel = (bmi < 18.5 ? 1 : (bmi < 24.9 ? 2 : (bmi < 29.9 ? 3 : (bmi < 34.9 ? 4 : 5))));
    let genderCode = (g == 1 ? 'm' : 'f')
    let bmr = (g == 1 ? (66 + 13.7 * w + 5 * h - 6.8 * a) : (655 + 9.6 * w + 1.8 * h - 4.7 * a))
    let d = bmr * (1.025 + 0.175 * f) * 0.4
    let [dh, dp, df, dr, dv] = [0.55 * d / 4, 0.2 * d / 4, 0.25 * d / 9, 10, 6]
    let [cp, hp, pp, fp, rp, vp] = [totalCalory / d, totalHydroCarbon / dh, totalProtein / dp, totalFat / df, totalFibra / dr, totalDiversity / dv]
    console.log(bmi)
    console.log(d)

    let getColor = (p) => `rgb(${(p == 0) ? 0xcc : (p > 1 ? 0 : 0)},${(p == 0) ? 0xcc : (p > 1 ? 50 : Math.floor(150 + (150 - 50) * p))},${(p == 0) ? 0xcc : (p > 1 ? 0 : Math.floor(0 * (1 - p)))})`


    return (
        <>
            <Col className={'d-flex flex-column align-items-center'} xs={3}>
                <Circle totalCalory={totalCalory} cp={cp}></Circle>
                <div className={'totalCalory d-flex text-center align-items-center justify-content-center'}>
                    <div className={'align-self-center'}>
                        <div><p>推荐摄入量</p><p>{d.toFixed(1)}cal</p></div>
                    </div>
                </div>
            </Col>
            <Col xs={9} style={{ 'paddingLeft': 0 }}>

                <Row className={'align-items-center justify-content-center flex-nowrap'}>
                    <Col xs={9} className={' d-flex flex-column justify-content-end  align-items-center'}>
                        {cp < 1 ?
                            <div >根据您的bmi计算，您当前的体型如右图所示。</div> :
                            <div >按照当前卡路里摄入量，您的体型将变成如右图所示</div>
                        }

                    </Col>
                    <Col className={'d-flex  justify-content-center text-center align-items-center'}>
                        <img style={{ 'height': '100%' }} src={`/menu/${genderCode}${cp < 1 ? figureLevel : (figureLevel == 1 ? 1 : (figureLevel + 1))}.jpg`}></img>
                    </Col>
                </Row>


            </Col>
        </>



    )

}

export default Summary;