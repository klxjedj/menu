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
    let bmr = (g == 1 ? (66 + 13.7 * w + 5 * h - 6.8 * a) : (655 + 9.6 * w + 1.8 * h - 4.7 * a))
    let d = bmr * (1.025 + 0.175 * f) * 0.4
    let [dh, dp, df, dr, dv] = [0.55 * d / 4, 0.2 * d / 4, 0.25 * d / 9, 10, 6]
    let [cp, hp, pp, fp, rp, vp] = [totalCalory / d, totalHydroCarbon / dh, totalProtein / dp, totalFat / df, totalFibra / dr, totalDiversity / dv]
    console.log(bmi)
    console.log(d)

    let getColor = (p) => `rgb(${(p == 0) ? 0xcc : (p > 1 ? 0 : 0)},${(p == 0) ? 0xcc : (p > 1 ? 50 : Math.floor(    150+(150- 50)*p    ))},${(p == 0) ? 0xcc : (p > 1 ? 0 : Math.floor(0 * (1 - p)))})`


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
                <Row className={'align-items-end flex-nowrap'}>
                    <Col className={'nutritionSummary d-flex flex-column justify-content-end align-items-center'}>
                        <div >{totalProtein.toFixed(0)}</div>
                        <div style={{ 'width': "50%", "height": "calc(20vh*0.4", "backgroundColor": getColor(pp) }}></div>
                        <div>{'蛋白质'}</div>
                        <div>{dp.toFixed(1)}g</div>
                    </Col>
                    <Col className={'nutritionSummary d-flex flex-column justify-content-end align-items-center'}>
                        <div>{totalFat.toFixed(0)}</div>
                        <div style={{ 'width': "50%", "height": "calc(20vh*0.4", "backgroundColor": getColor(fp) }}></div>
                        <div>{'脂肪'}</div>
                        <div>{df.toFixed(1)}g</div>
                    </Col>
                    <Col className={'nutritionSummary d-flex flex-column justify-content-end align-items-center'}>
                        <div>{totalHydroCarbon.toFixed(0)}</div>
                        <div style={{ 'width': "50%", "height": "calc(20vh*0.4", "backgroundColor": getColor(hp) }}></div>
                        <div>{'碳水'}</div>
                        <div>{dh.toFixed(1)}g</div>
                    </Col>
                    <Col className={'nutritionSummary d-flex flex-column justify-content-end align-items-center'}>
                        <div>{totalFibra.toFixed(0)}</div>
                        <div style={{ 'width': "50%", "height": "calc(20vh*0.4", "backgroundColor": getColor(rp) }}></div>
                        <div>{'纤维'}</div>
                        <div>{dr.toFixed(1)}g</div>
                    </Col>
                    <Col className={'nutritionSummary d-flex flex-column justify-content-end align-items-center'}>
                        <div>{totalDiversity.toFixed(0)}</div>
                        <div style={{ 'width': "50%", "height": "calc(20vh*0.4", "backgroundColor": getColor(vp) }}></div>
                        <div>{'多样性'}</div>
                        <div>{dv.toFixed(0)}种</div>
                    </Col>
                </Row>





                {/* <div className={'summary d-flex text-start align-items-center justify-content-start'}  >
                    <div  >
                        <p>营养汇总</p>
                        <p>蛋白质：{totalProtein.toFixed(2)}g</p>
                        <p>脂肪：{totalFat.toFixed(2)}g</p>
                        <p>碳水化合物：{totalHydroCarbon.toFixed(2)}g</p>
                        <p>膳食纤维：{totalFat.toFixed(2)}g</p>
                        <p>食物多样性：{totalDiversity.toFixed(0)}</p>

                    </div>
                </div> */}

            </Col>
        </>



    )

}

export default Summary;