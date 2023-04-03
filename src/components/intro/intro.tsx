import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useAppDispatch } from '../../store/hooks';
import { setInfo } from '../../store/slices/infoSlice';
import { useRef } from 'react';

export function Intro({ showInfo, setShowInfo,setShowInfo2 }) {
    let dispatch = useAppDispatch()
    let form = useRef(null);

    let startExp = (e) => {

        let formData = new FormData(form.current)
        for (let k of formData.keys()) {
            console.log(k,formData.get(k))
            dispatch(setInfo({ 'key': k, 'value': formData.get(k) }))
        }
        setShowInfo(false);
        setShowInfo2(true)
        return false;
    }

    return (
        <Modal show={showInfo} centered scrollable>
            <Modal.Header>
                <Modal.Title>电子点菜系统消费者行为调查</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <p>您好，这是一份关于电子点菜系统及菜品喜好的情况调查，问卷采用匿名形式，并且仅用于论文数据分析研究，希望您如实填写，非常感谢。</p>
                <Form ref={form}>

                    <Form.Group className='mb-3'>
                        <Form.Label>1、	您的性别（单选题）</Form.Label><br></br>
                        <Form.Check value={1} inline type='radio' name='gender' label='男' required></Form.Check>
                        <Form.Check value={2} inline type='radio' name='gender' label='女'></Form.Check>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>2、	您的学历（单选题）</Form.Label><br></br>
                        <Form.Check value={1} inline type='radio' name='degree' label='高中及以下' required></Form.Check>
                        <Form.Check value={2} inline type='radio' name='degree' label='专科生'></Form.Check>
                        <Form.Check value={3} inline type='radio' name='degree' label='本科生'></Form.Check>
                        <Form.Check value={4} inline type='radio' name='degree' label='研究生及以上'></Form.Check>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>3、	您的职业（单选题）：</Form.Label><br></br>
                        <Form.Check value={1} inline type='radio' name='profession' label='在校学生' required></Form.Check>
                        <Form.Check value={2} inline type='radio' name='profession' label='就业（全职）'></Form.Check>
                        <Form.Check value={3} inline type='radio' name='profession' label='就业（兼职）'></Form.Check>
                        <Form.Check value={4} inline type='radio' name='profession' label='自由职业'></Form.Check>
                        <Form.Check value={5} inline type='radio' name='profession' label='失业'></Form.Check>
                        <Form.Check value={6} inline type='radio' name='profession' label='离退休人员'></Form.Check>
                        <Form.Check value={7} inline type='radio' name='profession' label='其他'></Form.Check>

                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>4、	您一个月的收入大概是（单选题）：</Form.Label><br></br>
                        <Form.Check value={1} inline type='radio' name='income' label='1500以下' required></Form.Check>
                        <Form.Check value={2} inline type='radio' name='income' label='1500-3000'></Form.Check>
                        <Form.Check value={3} inline type='radio' name='income' label='3000-5000 '></Form.Check>
                        <Form.Check value={4} inline type='radio' name='income' label='5000-8000'></Form.Check>
                        <Form.Check value={5} inline type='radio' name='income' label='8000以上'></Form.Check>
                    </Form.Group>

                    <Form.Group className={'align-items-baseline mb-3'} as={Row}>
                        <Col xs={7}>
                            <Form.Label >5、	您的年龄（填空题）：</Form.Label>
                        </Col>
                        <Col xs={2}>
                            <Form.Control type='number' name='age' required></Form.Control>
                        </Col>
                        <Col >
                            <Form.Text>岁</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group className={'align-items-baseline mb-3'} as={Row}>
                        <Col xs={7}>
                            <Form.Label >6、	您的身高（填空题）：</Form.Label>
                        </Col>
                        <Col xs={2}>
                            <Form.Control type='number' name='height' required></Form.Control>
                        </Col>
                        <Col >
                            <Form.Text>cm</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group className={'align-items-baseline mb-3 flex-left'} as={Row}>
                        <Col xs={7}>
                            <Form.Label >7、	您的体重（填空题）：</Form.Label>
                        </Col>
                        <Col xs={2}>
                            <Form.Control type='number' name='weight' required></Form.Control>
                        </Col>
                        <Col >
                            <Form.Text>kg</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>8、	您的日常运动量：</Form.Label><br></br>
                        <Form.Check value={1}  type='radio' name='exerciseFrequency' label='基本没有' required></Form.Check>
                        <Form.Check value={2}  type='radio' name='exerciseFrequency' label='轻微运动（每周1-3次）'></Form.Check>
                        <Form.Check value={3}  type='radio' name='exerciseFrequency' label='中度运动（每周3-5次）'></Form.Check>
                        <Form.Check value={4}  type='radio' name='exerciseFrequency' label='积极运动（每周5-6次）'></Form.Check>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>9、	您现在的饥饿程度（单选题）：</Form.Label><br></br>
                        <Form.Check value={1}  type='radio' name='hungryStatus' label='1（“一点也不饿”）' required></Form.Check>
                        <Form.Check value={2}  type='radio' name='hungryStatus' label='2（“有些饱”）'></Form.Check>
                        <Form.Check value={3}  type='radio' name='hungryStatus' label='3(“不饱不饿”) '></Form.Check>
                        <Form.Check value={4}  type='radio' name='hungryStatus' label='4(“有些饿”）'></Form.Check>
                        <Form.Check value={5}  type='radio' name='hungryStatus' label='5（“非常饿”）'></Form.Check>
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>

                <Button onClick={startExp}>开始实验</Button>
            </Modal.Footer>
        </Modal>
    )


}