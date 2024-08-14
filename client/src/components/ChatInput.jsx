import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillFileImage, AiFillFile } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showFileOptions, setShowFileOptions] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleSendMsg(file);
      event.target.value = null; // Reset file input
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
        <div className="file-options">
          <AiOutlinePlus
            className="plus-icon"
            onClick={() => setShowFileOptions(!showFileOptions)}
          />
          {showFileOptions && (
            <div className="file-inputs">
              <label>
                <AiFillFileImage />
                <input

                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />Image
              </label>
              <label>
                <FaVideo />
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                />Video
              </label>
              <label>
                <AiFillFile />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  onChange={handleFileChange}
                />Document
              </label>
            </div>
          )}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #080420;
  
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 0.5rem;

    .emoji {
      position: relative;
      
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }

      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }

        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }

        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }

        .emoji-group:before {
          background-color: #080420;
        }
      }
    }

    .file-options {
      position: relative;

      .plus-icon {
        font-size: 1.5rem;
        color: #9a86f3;
        cursor: pointer;
        width: 50px;
      }

      .file-inputs {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -150px;
        left: -20px;
        background-color: #080420;
        padding: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 5px 10px #9a86f3;
        width: 150px;

        label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0;
          cursor: pointer;
          transition: background-color 0.3s;

          svg {
            font-size: 1.5rem;
            color: #9a86f3;
          }

          &:hover {
            background-color: #9a86f3;
            color: #fff;
          }

          input {
            display: none;
          }
        }
      }
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #ffffff34;
    border-radius: 2rem;

    input {
      flex: 1;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #9a86f3;
      border: none;
      border-radius: 2rem;
      padding: 0.5rem 1rem;
      cursor: pointer;

      svg {
        font-size: 1.5rem;
        color: white;
      }
    }
  }
`;
