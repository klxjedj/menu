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

export function Info({ show,setShowInfo2}) {


    let hideInfo = () => {
        setShowInfo2(false)
    }

    return (
        <Modal show={show} centered onHide={()=>{setShowInfo2(false)}}>
            <Modal.Header>
                <Modal.Title>情景设定</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <p>您好，我们是一家中式餐饮公司，准备在您家/单位附近开设一家店面，同时上线外卖配送服务，现在希望对餐厅提供的菜品是否符合您的喜好进行前期调研。假设您现在是午餐时间，请根据您的情况，订购您想要的菜品。</p>
                

            </Modal.Body>
            <Modal.Footer>

                <Button onClick={hideInfo}>确定</Button>
            </Modal.Footer>
        </Modal>
    )


}