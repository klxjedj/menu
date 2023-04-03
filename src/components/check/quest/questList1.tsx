import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { Likert } from './likert';
import questListText from './questListText';
import { useAppSelector } from '../../../store/hooks';
import { dishData } from '../../../data/data';
import { useRef } from 'react';
import { End } from './end';
import axios from 'axios';


export function QuestList(props) {
    let [showEnd, setShowEnd] = useState(false)
    let { show, setQuest } = props
    let info = useAppSelector((state) => state.info)
    let cart = useAppSelector((state) => { return state.cart });
    let totalCalory = 0
    let form = useRef(null);
    cart.map(
        (num, index) => {
            if (num > 0) {
                totalCalory += dishData[index]['calory'] * num * dishData[index]['weight'] / 100;
            }
        }
    )
    let submitInfo = () => {
        let data = {};

        for (let k in info) { data[k] = info[k] }
        data['totalCalory'] = totalCalory
        data['group'] = window.group
        let formData = new FormData(form.current)
        for (let k of formData.keys()) {
            data[k] = formData.getAll(k)
        }
        console.log(data)
        axios.put('./api/menu', data)
        setQuest(false)
        setShowEnd(true)
    };

    let checkboxList = [10];

    return (
        <>
            <Modal show={show} centered scrollable>
                <Modal.Header><Modal.Title>请完成以下问卷</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form ref={form}>
                        {questListText.slice(0,15).map((item, index) => {
                            return (
                                <Form.Group key={index}>
                                    <Form.Label>{item[1]}</Form.Label><br></br>
                                    <Likert name={item[0]} optionList={item[2]} type={checkboxList.includes(index) ? 'checkbox' : 'radio'}></Likert>
                                </Form.Group>)
                        })}
                        <br />
                        <p style={{'fontSize':'1.2rem'}}>以下问题请您根据您的自身感受进行评分：</p>
                        <br />
                        {questListText.slice(15,22).map((item, index) => {
                            return (
                                <Form.Group key={index}>
                                    <Form.Label>{item[1]}</Form.Label><br></br>
                                    <Likert name={item[0]} optionList={item[2]} type={'radio'}></Likert>
                                </Form.Group>)
                        })}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={submitInfo}>完成问卷并提交</Button>

                </Modal.Footer>
            </Modal>
            <End show={showEnd}></End>
        </>
    )
}