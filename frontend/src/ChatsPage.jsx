import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
        <div style={{height: '100vh'}}>
          <PrettyChatWindow 
          
          projectId='5b97d71f-2f02-4ba3-9fc7-5d0e255f620a'
          username={props.user.username}
          secret={props.user.secret}
          style={{height:'100%'}}
          
          />
        </div>
    )
}

export default ChatsPage 