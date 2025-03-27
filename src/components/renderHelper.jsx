import { Button, Input } from "antd";

const RenderHelper = () => {
    return (
        <div className="wrapper">
            <Input
                placeholder="User ID"
                style={{ width: 240, marginTop: 16 }}
            />
            <Input
                placeholder="Channel Name"
                style={{ width: 240, marginTop: 16 }}
            />
            <Button
                style={{ width: 240, marginTop: 16 }}
                type="primary"
            >
                Call
            </Button>
            <Button
                danger
                style={{ width: 240, marginTop: 16 }}
                type="primary"
            >
                Hangup
            </Button>
        </div>
    );
}

export default RenderHelper