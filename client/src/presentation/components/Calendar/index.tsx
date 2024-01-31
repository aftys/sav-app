import type { Dayjs } from 'dayjs';
import React from 'react';
import { Calendar, theme } from 'antd';



interface Props {
    setDate: (date: string) => void;
}

const Schedular: React.FC<Props> = ({setDate}) => {
    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
        width: 300,
        border: `2px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div style={wrapperStyle}>
            <Calendar fullscreen={false} onChange={(value: Dayjs)=>setDate(value.format('YYYY-MM-DD'))} />
        </div>
    );
};

export default Schedular;