import React, { useState } from 'react';
import '~style/chat-component.scss'; // 导入样式文件  
import AudioRecorder from "./autorecorder";
import MarqueeText from "./textScroller";
import {
    LikeOutlined, DislikeOutlined
} from '@ant-design/icons';

import { Modal,Input,Space } from "antd";
const { TextArea } = Input;
const RealTimeChat = () => {
    // useEffect(() => {  
    //     if (messageEndRef.current) {  
    //       messageEndRef.current.scrollIntoView({ behavior: 'smooth' });  
    //     }  
    //   }, [messages]); 
    const [messages, setMessages] = useState([]); // 存储聊天消息  
    const [realText, setRealText] = useState(''); // 存储用户输入 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInput,setUserInput] =useState('');
    const [index,setIndex]=useState('');
    // 定义回调函数  
    // let realTextOrigin = ''; //实时显示所有的文本
    // let realTextOriginString = ''// 原始文本
    const handleChildValue = (message) => {
        console.log(message)
        if(message.endpoint){
            setMessages([...messages,message]); 
        }else{
            setRealText(message.text)
        }
        // realTextOriginString += value;
        // console.log(realTextOriginString)
        // value = value.filter(v => v);
        // const message = []
        // value.map(v => {
        //     if (v.includes("speaker_") || v.includes('Ke_Yi') || v.includes('Ya_Ling')) {
        //         const tmp = v.split(':');
        //         message.push({
        //             sender: tmp[0] + ':',
        //             text: tmp[1]
        //         })
        //     } else {
        //         setRealText(realText + v)
        //         // realTextOrigin += realText + v;
        //         // setRealText(realTextOrigin);
        //     }
        // })
        // setMessages(message);
    };
    const hateGenerateResult = (index) => {
        setIndex(index)
        setIsModalOpen(true);
    }
    const handleOk = () => {
        let newMessages=messages.map((msg,idx)=>{
            if(idx===index){
                msg.text=userInput;
                let filename=encodeURI(msg.filename) 
                let text=encodeURI(msg.text)
                console.log(`http://8.155.27.36/voice-recognition/${filename}/${text}`)
                fetch(`http://8.155.27.36/voice-recognition/${filename}/${text}`).then(res=>{
                    console.log(res)
                })
            }
            return msg;
        });
        setIsModalOpen(false);
        setMessages(newMessages)

    };

    const handleCancel = () => {
        // setIndex('')
        setIsModalOpen(false);
    };
    return (
        <div className="chat-container">
            <div className="chat-box" >
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.name == "Ya_Ling:" ? "user" : "bot"}`}>
                        <strong>{msg.name}:{msg.text}</strong>
                        <Space><LikeOutlined /><DislikeOutlined onClick={()=>hateGenerateResult(index)} /></Space>
                    </div>
                ))}
            </div>
            <Modal title="Modify message" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <TextArea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="please input text"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
            </Modal>
            <div className="chat-input">
                <AudioRecorder onSendValue={handleChildValue} ></AudioRecorder>
            </div>
            <MarqueeText text={realText}></MarqueeText>
        </div>
    );
};

export default RealTimeChat;