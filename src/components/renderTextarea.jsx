import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const RenderTextarea = () => {
    const [sendButtonDisabled, setSendButtonDisabled] = useState(false)
    return (
        <div className="wrapper">
            <TextArea
                style={{ width: 240, marginTop: 16 }}
                placeholder='Send message'
            />
            <TextArea
                style={{ width: 240, marginTop: 16 }}
                placeholder='Receive message'
                disabled
            />
            <Button
                style={{ width: 240, marginTop: 16 }}
                type="primary"
                disabled={sendButtonDisabled}
            >
                Send Message
            </Button>
        </div>
    );
}

export default RenderTextarea