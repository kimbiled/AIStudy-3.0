'use client';
import 'regenerator-runtime/runtime'
import { useState } from 'react';
import Layout from "@components/Layout/Layout";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Image from 'next/image';
import { microOff, microOn } from '@root/assets/icons';

const SpeakingPractice = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [res, setRes] = useState<string>('');
  const [resArr, setResArr] = useState<string[]>([]);

  const styles = {
    boxWidth: 'xl:max-w-[1280px] w-full',

    heading2:
      'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
    paragraph:
      ' font-normal text-dimWhite text-[18px] leading-[30.8px]',

    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-center items-start',

    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-12 py-4',

    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-16 my-6',
  };
  // const handleClick = async (e: React.FormEvent) => {
  //   e.preventDefault(); // Prevent form submission

  //   if (!essayText) {
  //     setRes('Enter essay');
  //     return;
  //   }

  //   const response = await fetch('http://127.0.0.1:8000/api/speaking/check', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       prompt: prompt,
  //       text: essayText,
  //     }),
  //   });

  //   const data = await response.json();
  //   setRes(data.data);

  //   setResArr(res.split('--'));
  // };
 
  /*Dictophone*/
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Layout>
      {
        <section className="w-full overflow-hidden mb-10 font-lato flex flex-col gap-4 justify-around items-center">
          <div className="flex flex-col gap-4 text-center mt-12">
              <h1 className="text-[#444] text-5xl font-semibold">Speaking</h1>
              <h3 className="text-[#444] opacity-80 text-2xl font-semibold">Учебные материалы</h3>
          </div>
        <div className={` ${styles.paddingX} space-y-5`}>
          <label
            htmlFor="input-group-1"
            className="block  mt-10 text-center lg:text-left text-base lg:text-lg font-medium text-smrtBlack ">
            Введите тему вашего эссе
          </label>
          <div className="relative mb-6 max-w-[620px]">
            <input
              type="text"
              id="input-group-1"
              className="bg-white border-[1px] border-[#C0C0C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  "
              placeholder="Тема"
              onChange={e => setPrompt(e.target.value)}
            />
          </div>

          <div className='w-[465px] h-24 rounded-2xl bg-[#444] flex items-center justify-center gap-4'>
            <p></p>
            <button onClick={() => {
              console.log(13)
                listening ?  SpeechRecognition.startListening() : SpeechRecognition.stopListening()
              }} type="button">
              <Image src={listening ? microOn : microOff} alt='micro-on-icon'/>
            </button>
            {/* {listening? 
            (
              <Image src={microOn} alt='micro-on-icon' onClick={SpeechRecognition.startListening}/>
            ) : 
            (
              <Image src={microOff} alt='micro-off-icon' onClick={SpeechRecognition.stopListening}/>
            )
            } */}

            <button className="w-24 h-9 rounded-2xl bg-white" onClick={resetTranscript}>Reset</button>

          </div>
  
          <div className="lg:flex lg:flex-row space-y-10 lg:space-y-0 flex-col lg:space-x-20 ">
            <form>
              <div className="w-[720px] mb-4 border-[1px] border-[#C0C0C0] rounded-2xl bg-white h-[400px]">
                <div className="px-4 py-2 bg-white rounded-2xl">
                    <p className="block px-0 text-sm text-gray-800 p-2">
                        {transcript}
                    </p>
                </div>
              </div>
              <div className='flex flex-row justify-end'>
                  <button
                    type="submit"
                    className="inline-flex items-center px-5 py-3 text-xl lg:px-10 lg:py-3 lg:text-lg font-semibold text-center bg-[#444] rounded-2xl text-white focus:ring-4 focus:ring-blue-200 ">
                    Загрузить
                  </button>
              </div>
            </form>
  
            <div className=" max-w-[450px] lg:w-[450px] h-[400px] p-4 flex flex-col items-center border-[1px] border-[#C0C0C0] bg-white rounded-xl justify-center  ">
              {resArr.map((item, id) =>
                id === 0 ? (
                  <div className=" bg-smrtGray  px-10 py-4 rounded-lg  text-center mb-4  text-white  ">
                    {item}
                  </div>
                ) : id === 1 ? (
                  item.split(', ').map(word => (
                    <div className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                      <span className=" text-lg ml-4 font-semibold">
                        {word}
                      </span>
                    </div>
                  ))
                ) : id === 2 ? (
                  item.split(', ').map(word => (
                    <div className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        viewBox="0 -0.5 25 25"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                          fill="#000000"
                        />
                      </svg>
  
                      <span className=" text-lg ml-4 font-semibold">
                        {word}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className=" px-4" key={id}>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      }
    </Layout>
  );
};

export default SpeakingPractice;
