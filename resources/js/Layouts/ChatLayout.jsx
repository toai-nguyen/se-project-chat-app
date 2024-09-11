const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversation = page.props.selectedConversation;

    console.log("Conversation", conversations);
    console.log("selected conversation", selectedConversation);
    return(

    )
    
}

export default ChatLayout;