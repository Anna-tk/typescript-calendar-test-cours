import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";

const EventForm: FC = () => {
    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>

            //дата
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}>
                <DatePicker/>
            </Form.Item>
            //выпадающий список

            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Select>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                        Disabled
                    </Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
            </Form.Item>

            //кнопка
            <Row justify={'center'}>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;