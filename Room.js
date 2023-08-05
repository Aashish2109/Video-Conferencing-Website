import React from 'react'; // Import useEffect
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() 
{

    const { roomID } = useParams();
    const myMeeting = async (element) => 
    {
        const appID = 1689043823;
        const serverSecret = "af38052520f9393fe9c719ffe4b60e2d";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Aashish");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
            
        zp.joinRoom
        ({
            container: element,
            sharedLinks: 
            [
                {
                    name: 'Copy link',
                    url:`http://localhost3000/room/${roomID}`
                },
            ],
            scenario: 
            {
                mode: ZegoUIKitPrebuilt.GroupCall,
                
            },
            showRoomTimer:true
        });
    }
    return (
        <div ref={myMeeting}></div>
    )
}



export default Room;
