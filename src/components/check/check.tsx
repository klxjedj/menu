//问卷2 有警告
import Col from 'react-bootstrap/Col'
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import { CheckDetail } from './checkDetail';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
import { Confirm } from './quest/confirm';
import { QuestList } from './quest/questList2'
import { dishData } from '../../data/data';

const Check = () => {
    let cart = useAppSelector((state) => { return state.cart });
    let totalSum = cart.reduce((x, sum) => sum += x);
    let [detailShow, setDetailShow] = useState(false);
    let [confirm, setConfirm] = useState(false);
    let [quest, setQuest] = useState(false);
    let info = useAppSelector((state) => state.info)
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
    let d = bmr * (1.075 + 0.175 * f) * 0.4
    let [dh, dp, df, dr, dv] = [0.4 * d, 0.55 * d / 4, 0.2 * d / 4, 0.25 * d / 9, 10, 6]
    let [cp, hp, pp, fp, rp, vp] = [totalCalory / d, totalHydroCarbon / dh, totalProtein / dp, totalFat / df, totalFibra / dr, totalDiversity / dv]



    let checkConfirm = () => {
        if (cp>1)
            setConfirm(true)
        else
            setQuest(true)
    }

    let confirmed = () => {

        setConfirm(false);
        setQuest(true);
    }
    let cancelled = () => {
        setConfirm(false);

    }


    let showDetail = () => {
        if (totalSum > 0) {
            setDetailShow(true);
        }
    }

    let hideDetail = () => {
        setDetailShow(false)
    }


    return (
        <>
            <Col className={'ps-0'}>
                <div className={'cartIcon d-flex text-center align-items-center justify-content-center'} onClick={showDetail}>
                    <div>{`已点菜品`}{totalSum > 0 ? `(${totalSum})` : null}</div>
                </div>
            </Col>
            <Col className={'pe-0'}>
                <div className={'checkIcon d-flex text-center align-items-center justify-content-center'}>
                    <div onClick={checkConfirm}>{'提交订单'}</div>
                </div>

            </Col>
            <Confirm show={confirm} confirmed={confirmed} cancelled={cancelled}></Confirm>
            <QuestList show={quest} setQuest={setQuest}></QuestList>
            <CheckDetail show={detailShow} hide={hideDetail}></CheckDetail>
        </>)

}

export default Check;