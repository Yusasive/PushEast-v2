import React from "react";
import PushEat from "../assets/PushEat.png";
import LogoImage from "../assets/Logo.png";

const FooterLeft = () => {
  return (
    <div className="md:fixed lg:flex-col md:flex  lg:h-screen lg:w-16 w-full bottom-0 lg:left-0 lg:items-start  lg:justify-start p-4 lg:space-y-2 space-x-4 lg:space-x-0">
      {/* Social Icons */}
      <div className="hidden lg:flex lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0">
        <a
          href="https://www.linkedin.com/company/pusheat/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32648)"
            />
            <g clip-path="url(#clip0_6757_32648)">
              <path
                d="M35.2234 13H14.7719C13.7922 13 13 13.7734 13 14.7297V35.2656C13 36.2219 13.7922 37 14.7719 37H35.2234C36.2031 37 37 36.2219 37 35.2703V14.7297C37 13.7734 36.2031 13 35.2234 13ZM20.1203 33.4516H16.5578V21.9953H20.1203V33.4516ZM18.3391 20.4344C17.1953 20.4344 16.2719 19.5109 16.2719 18.3719C16.2719 17.2328 17.1953 16.3094 18.3391 16.3094C19.4781 16.3094 20.4016 17.2328 20.4016 18.3719C20.4016 19.5062 19.4781 20.4344 18.3391 20.4344ZM33.4516 33.4516H29.8937V27.8828C29.8937 26.5562 29.8703 24.8453 28.0422 24.8453C26.1906 24.8453 25.9094 26.2937 25.9094 27.7891V33.4516H22.3563V21.9953H25.7687V23.5609H25.8156C26.2891 22.6609 27.4516 21.7094 29.1813 21.7094C32.7859 21.7094 33.4516 24.0813 33.4516 27.1656V33.4516Z"
                fill="#4D4D4A"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6757_32648"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
              <clipPath id="clip0_6757_32648">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(13 13)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@justpusheat" target="_blank" rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32645)"
            />
            <path
              d="M30.0725 13H26.0278V29.3478C26.0278 31.2957 24.4722 32.8957 22.5363 32.8957C20.6003 32.8957 19.0447 31.2957 19.0447 29.3478C19.0447 27.4348 20.5658 25.8695 22.4326 25.8V21.6957C18.3187 21.7652 15 25.1391 15 29.3478C15 33.5913 18.3879 37 22.5708 37C26.7538 37 30.1416 33.5565 30.1416 29.3478V20.9652C31.6627 22.0783 33.5295 22.7391 35.5 22.7739V18.6696C32.4579 18.5652 30.0725 16.0609 30.0725 13Z"
              fill="#4D4D4A"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6757_32645"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <a href="https://x.com/JustPushEat" target="_blank" rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32646)"
            />
            <path
              d="M31.3263 14.9043H34.6998L27.3297 23.3278L36 34.7903H29.2112L23.894 27.8383L17.8099 34.7903H14.4344L22.3174 25.7804L14 14.9043H20.9611L25.7674 21.2586L31.3263 14.9043ZM30.1423 32.7711H32.0116L19.9454 16.8174H17.9395L30.1423 32.7711Z"
              fill="#4D4D4A"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6757_32646"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32644)"
            />
            <g clip-path="url(#clip0_6757_32644)">
              <path
                d="M25 15.1609C28.2063 15.1609 28.5859 15.175 29.8469 15.2312C31.0188 15.2828 31.6516 15.4797 32.0734 15.6438C32.6313 15.8594 33.0344 16.1219 33.4516 16.5391C33.8734 16.9609 34.1313 17.3594 34.3469 17.9172C34.5109 18.3391 34.7078 18.9766 34.7594 20.1437C34.8156 21.4094 34.8297 21.7891 34.8297 24.9906C34.8297 28.1969 34.8156 28.5766 34.7594 29.8375C34.7078 31.0094 34.5109 31.6422 34.3469 32.0641C34.1313 32.6219 33.8687 33.025 33.4516 33.4422C33.0297 33.8641 32.6313 34.1219 32.0734 34.3375C31.6516 34.5016 31.0141 34.6984 29.8469 34.75C28.5813 34.8062 28.2016 34.8203 25 34.8203C21.7938 34.8203 21.4141 34.8062 20.1531 34.75C18.9813 34.6984 18.3484 34.5016 17.9266 34.3375C17.3688 34.1219 16.9656 33.8594 16.5484 33.4422C16.1266 33.0203 15.8688 32.6219 15.6531 32.0641C15.4891 31.6422 15.2922 31.0047 15.2406 29.8375C15.1844 28.5719 15.1703 28.1922 15.1703 24.9906C15.1703 21.7844 15.1844 21.4047 15.2406 20.1437C15.2922 18.9719 15.4891 18.3391 15.6531 17.9172C15.8688 17.3594 16.1313 16.9562 16.5484 16.5391C16.9703 16.1172 17.3688 15.8594 17.9266 15.6438C18.3484 15.4797 18.9859 15.2828 20.1531 15.2312C21.4141 15.175 21.7938 15.1609 25 15.1609ZM25 13C21.7422 13 21.3344 13.0141 20.0547 13.0703C18.7797 13.1266 17.9031 13.3328 17.1438 13.6281C16.3516 13.9375 15.6813 14.3453 15.0156 15.0156C14.3453 15.6813 13.9375 16.3516 13.6281 17.1391C13.3328 17.9031 13.1266 18.775 13.0703 20.05C13.0141 21.3344 13 21.7422 13 25C13 28.2578 13.0141 28.6656 13.0703 29.9453C13.1266 31.2203 13.3328 32.0969 13.6281 32.8563C13.9375 33.6484 14.3453 34.3188 15.0156 34.9844C15.6813 35.65 16.3516 36.0625 17.1391 36.3672C17.9031 36.6625 18.775 36.8687 20.05 36.925C21.3297 36.9812 21.7375 36.9953 24.9953 36.9953C28.2531 36.9953 28.6609 36.9812 29.9406 36.925C31.2156 36.8687 32.0922 36.6625 32.8516 36.3672C33.6391 36.0625 34.3094 35.65 34.975 34.9844C35.6406 34.3188 36.0531 33.6484 36.3578 32.8609C36.6531 32.0969 36.8594 31.225 36.9156 29.95C36.9719 28.6703 36.9859 28.2625 36.9859 25.0047C36.9859 21.7469 36.9719 21.3391 36.9156 20.0594C36.8594 18.7844 36.6531 17.9078 36.3578 17.1484C36.0625 16.3516 35.6547 15.6813 34.9844 15.0156C34.3188 14.35 33.6484 13.9375 32.8609 13.6328C32.0969 13.3375 31.225 13.1313 29.95 13.075C28.6656 13.0141 28.2578 13 25 13Z"
                fill="#4D4D4A"
              />
              <path
                d="M25 18.8359C21.5969 18.8359 18.8359 21.5969 18.8359 25C18.8359 28.4031 21.5969 31.1641 25 31.1641C28.4031 31.1641 31.1641 28.4031 31.1641 25C31.1641 21.5969 28.4031 18.8359 25 18.8359ZM25 28.9984C22.7922 28.9984 21.0016 27.2078 21.0016 25C21.0016 22.7922 22.7922 21.0016 25 21.0016C27.2078 21.0016 28.9984 22.7922 28.9984 25C28.9984 27.2078 27.2078 28.9984 25 28.9984Z"
                fill="#4D4D4A"
              />
              <path
                d="M32.8469 18.5924C32.8469 19.3893 32.2 20.0314 31.4078 20.0314C30.6109 20.0314 29.9688 19.3846 29.9688 18.5924C29.9688 17.7955 30.6156 17.1533 31.4078 17.1533C32.2 17.1533 32.8469 17.8002 32.8469 18.5924Z"
                fill="#4D4D4A"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6757_32644"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
              <clipPath id="clip0_6757_32644">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(13 13)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>

      {/* Spacer to push the image down */}
      <div className="hidden lg:flex lg:flex-grow"></div>

      {/* Logo */}
      <div className="hidden lg:flex lg:mt-auto ">
        <img
          src={PushEat}
          alt="Push Eat"
          className="w-auto h-auto rotate-90 md:rotate-0"
        />
      </div>

      {/* Logo Text */}
      <div className="lg:hidden flex font-sans ml-3 mt-4 justify-between">
        <div className="flex">
          <img src={LogoImage} alt="Push Eat" className="w-[117px] h-auto" />
        </div>
        <div className="flex flex-row space-x-1 justify-end mr-4">
          {" "}
          {/* Added space-x-4 and ml-4 */}
          <a
          href="https://www.linkedin.com/company/pusheat/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32648)"
            />
            <g clip-path="url(#clip0_6757_32648)">
              <path
                d="M35.2234 13H14.7719C13.7922 13 13 13.7734 13 14.7297V35.2656C13 36.2219 13.7922 37 14.7719 37H35.2234C36.2031 37 37 36.2219 37 35.2703V14.7297C37 13.7734 36.2031 13 35.2234 13ZM20.1203 33.4516H16.5578V21.9953H20.1203V33.4516ZM18.3391 20.4344C17.1953 20.4344 16.2719 19.5109 16.2719 18.3719C16.2719 17.2328 17.1953 16.3094 18.3391 16.3094C19.4781 16.3094 20.4016 17.2328 20.4016 18.3719C20.4016 19.5062 19.4781 20.4344 18.3391 20.4344ZM33.4516 33.4516H29.8937V27.8828C29.8937 26.5562 29.8703 24.8453 28.0422 24.8453C26.1906 24.8453 25.9094 26.2937 25.9094 27.7891V33.4516H22.3563V21.9953H25.7687V23.5609H25.8156C26.2891 22.6609 27.4516 21.7094 29.1813 21.7094C32.7859 21.7094 33.4516 24.0813 33.4516 27.1656V33.4516Z"
                fill="#4D4D4A"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6757_32648"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
              <clipPath id="clip0_6757_32648">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(13 13)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@justpusheat" target="_blank" rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32645)"
            />
            <path
              d="M30.0725 13H26.0278V29.3478C26.0278 31.2957 24.4722 32.8957 22.5363 32.8957C20.6003 32.8957 19.0447 31.2957 19.0447 29.3478C19.0447 27.4348 20.5658 25.8695 22.4326 25.8V21.6957C18.3187 21.7652 15 25.1391 15 29.3478C15 33.5913 18.3879 37 22.5708 37C26.7538 37 30.1416 33.5565 30.1416 29.3478V20.9652C31.6627 22.0783 33.5295 22.7391 35.5 22.7739V18.6696C32.4579 18.5652 30.0725 16.0609 30.0725 13Z"
              fill="#4D4D4A"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6757_32645"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <a href="https://x.com/JustPushEat" target="_blank" rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32646)"
            />
            <path
              d="M31.3263 14.9043H34.6998L27.3297 23.3278L36 34.7903H29.2112L23.894 27.8383L17.8099 34.7903H14.4344L22.3174 25.7804L14 14.9043H20.9611L25.7674 21.2586L31.3263 14.9043ZM30.1423 32.7711H32.0116L19.9454 16.8174H17.9395L30.1423 32.7711Z"
              fill="#4D4D4A"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6757_32646"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer">
          <svg
            width="33.33"
            height="33.33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="24.5"
              stroke="url(#paint0_linear_6757_32644)"
            />
            <g clip-path="url(#clip0_6757_32644)">
              <path
                d="M25 15.1609C28.2063 15.1609 28.5859 15.175 29.8469 15.2312C31.0188 15.2828 31.6516 15.4797 32.0734 15.6438C32.6313 15.8594 33.0344 16.1219 33.4516 16.5391C33.8734 16.9609 34.1313 17.3594 34.3469 17.9172C34.5109 18.3391 34.7078 18.9766 34.7594 20.1437C34.8156 21.4094 34.8297 21.7891 34.8297 24.9906C34.8297 28.1969 34.8156 28.5766 34.7594 29.8375C34.7078 31.0094 34.5109 31.6422 34.3469 32.0641C34.1313 32.6219 33.8687 33.025 33.4516 33.4422C33.0297 33.8641 32.6313 34.1219 32.0734 34.3375C31.6516 34.5016 31.0141 34.6984 29.8469 34.75C28.5813 34.8062 28.2016 34.8203 25 34.8203C21.7938 34.8203 21.4141 34.8062 20.1531 34.75C18.9813 34.6984 18.3484 34.5016 17.9266 34.3375C17.3688 34.1219 16.9656 33.8594 16.5484 33.4422C16.1266 33.0203 15.8688 32.6219 15.6531 32.0641C15.4891 31.6422 15.2922 31.0047 15.2406 29.8375C15.1844 28.5719 15.1703 28.1922 15.1703 24.9906C15.1703 21.7844 15.1844 21.4047 15.2406 20.1437C15.2922 18.9719 15.4891 18.3391 15.6531 17.9172C15.8688 17.3594 16.1313 16.9562 16.5484 16.5391C16.9703 16.1172 17.3688 15.8594 17.9266 15.6438C18.3484 15.4797 18.9859 15.2828 20.1531 15.2312C21.4141 15.175 21.7938 15.1609 25 15.1609ZM25 13C21.7422 13 21.3344 13.0141 20.0547 13.0703C18.7797 13.1266 17.9031 13.3328 17.1438 13.6281C16.3516 13.9375 15.6813 14.3453 15.0156 15.0156C14.3453 15.6813 13.9375 16.3516 13.6281 17.1391C13.3328 17.9031 13.1266 18.775 13.0703 20.05C13.0141 21.3344 13 21.7422 13 25C13 28.2578 13.0141 28.6656 13.0703 29.9453C13.1266 31.2203 13.3328 32.0969 13.6281 32.8563C13.9375 33.6484 14.3453 34.3188 15.0156 34.9844C15.6813 35.65 16.3516 36.0625 17.1391 36.3672C17.9031 36.6625 18.775 36.8687 20.05 36.925C21.3297 36.9812 21.7375 36.9953 24.9953 36.9953C28.2531 36.9953 28.6609 36.9812 29.9406 36.925C31.2156 36.8687 32.0922 36.6625 32.8516 36.3672C33.6391 36.0625 34.3094 35.65 34.975 34.9844C35.6406 34.3188 36.0531 33.6484 36.3578 32.8609C36.6531 32.0969 36.8594 31.225 36.9156 29.95C36.9719 28.6703 36.9859 28.2625 36.9859 25.0047C36.9859 21.7469 36.9719 21.3391 36.9156 20.0594C36.8594 18.7844 36.6531 17.9078 36.3578 17.1484C36.0625 16.3516 35.6547 15.6813 34.9844 15.0156C34.3188 14.35 33.6484 13.9375 32.8609 13.6328C32.0969 13.3375 31.225 13.1313 29.95 13.075C28.6656 13.0141 28.2578 13 25 13Z"
                fill="#4D4D4A"
              />
              <path
                d="M25 18.8359C21.5969 18.8359 18.8359 21.5969 18.8359 25C18.8359 28.4031 21.5969 31.1641 25 31.1641C28.4031 31.1641 31.1641 28.4031 31.1641 25C31.1641 21.5969 28.4031 18.8359 25 18.8359ZM25 28.9984C22.7922 28.9984 21.0016 27.2078 21.0016 25C21.0016 22.7922 22.7922 21.0016 25 21.0016C27.2078 21.0016 28.9984 22.7922 28.9984 25C28.9984 27.2078 27.2078 28.9984 25 28.9984Z"
                fill="#4D4D4A"
              />
              <path
                d="M32.8469 18.5924C32.8469 19.3893 32.2 20.0314 31.4078 20.0314C30.6109 20.0314 29.9688 19.3846 29.9688 18.5924C29.9688 17.7955 30.6156 17.1533 31.4078 17.1533C32.2 17.1533 32.8469 17.8002 32.8469 18.5924Z"
                fill="#4D4D4A"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6757_32644"
                x1="-0.950292"
                y1="50"
                x2="55.4618"
                y2="48.2258"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#01C51F" />
                <stop offset="0.524798" stop-color="#01AA1B" />
                <stop offset="1" stop-color="#60FF79" />
              </linearGradient>
              <clipPath id="clip0_6757_32644">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(13 13)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLeft;
