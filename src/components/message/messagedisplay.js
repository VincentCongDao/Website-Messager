import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core'

// CSS
import "./messagedisplay.css"

function Messagedisplay({m, username}) {
    const isUser = username === m.username;

    return (
        <div className={`message ${isUser && 'message_user'} `}>
            <Card className={isUser ? "message__userCard" : "message_guestCard"}>
                <CardContent>
                    {m.username}
                    <Typography className="texture-message"
                        variant="h5"
                        component="h2">
                             {m.text}
                        </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Messagedisplay