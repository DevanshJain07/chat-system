const socket=io('http://localhost:3000')
const messageForm=document.getElementById('send-container')
const messageInput=document.getElementById('message-input')
const messageContainer=document.getElementById('message-container')

socket.on('chat-message',data=>{
    console.log(data)
})

messageForm.addEventListener('submit',e=>{
    e.preventDefault()
    const message=messageInput.value
    socket.emit('send-chat-message',message)
    messageInput.value=''
})

function appendMessage(message){
    const messageElement=document.createElement('div')
    messageElement.innerHTML=message
    messageContainer.append(messageElement)
}