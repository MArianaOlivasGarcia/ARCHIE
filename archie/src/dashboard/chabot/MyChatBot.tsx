
import { Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components'

import './my-chat-bot.css';

import icoLogo from '../../assets/images/logo.png'


const theme = {
  fontFamily: "Raleway",
  botBubbleColor: "#adf",
  botFontColor: "#000",
  userBubbleColor: "#FABD13",
  userFontColor: "#000",
};

export const MyChatBot = () => {
  return (
    <div className="p-3 p-md-5">
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle='AWS | Credentials & Region'
                hideUserAvatar
                hideHeader
                botAvatar={icoLogo}
                botDelay={ 750 }
                userDelay={ 500 }
                steps={[
                    {
                        id: "1",
                        message: "Hey, I'm Archie. Nice to meet you. Ready to start building?",
                        trigger: "2"
                    },
                    {
                        id: "2",
                        component: (
                          <>
                            I will need some permissions to deploy resources. Select your prefered
                            access type. Refer to the{" "}
                            <Link className="link link--bot-message" to="/tutorial">
                              Tutorial
                            </Link>{" "}
                            section if needed.
                          </>
                        ),
                        asMessage: true,
                        trigger: "3",
                    },
                    {
                        id: '3',
                        options: [
                        //   { value: 1, label: 'AWS Role ARN', trigger: '3' },
                          { value: 1, label: 'AWS Role ARN', trigger: '4'},
                          { value: 2, label: 'AWS Key'},
                        ],
                    },
                    {
                      id: "4",
                      component: (
                        <>
                          Small reminder, a Cross Account role is required to establish the
                          trust relationship between our AWS accounts. Check my{" "}
                          <Link className="link link--bot-message" to="/tutorial">
                            Tutorial
                          </Link>{" "}
                          for further details.
                        </>
                      ),
                      asMessage: true,
                      trigger: "5",
                    },
                    {
                      id: "5",
                      message: "What is the role ARN?",
                      trigger: "6",
                    },
                    {
                        id: "6",
                        user: true,
                        placeholder: 'Please enter the role ARN.',
                        validator: (value: any) => {
                            if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                return true;
                            }
                            else {
                                return 'Please enter the role ARN.';
                            }
                        },
                        // trigger: "3"
                    },
                    // {
                    //     id: "3",
                    //     message: "Hi {previousValue}, nice to meet you!",
                    //     // trigger: "4"
                    // },
                ]}
            />
        </ThemeProvider>
    </div>
  )
}
