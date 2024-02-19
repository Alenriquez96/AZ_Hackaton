"use client";
import { MagnifyingGlassIcon, CameraIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createWorker } from "tesseract.js";
import {
  TranscribeStreamingClient,
  StartStreamTranscriptionCommand,
} from "@aws-sdk/client-transcribe-streaming";
import MicrophoneStream from "microphone-stream";
import { Buffer } from "buffer";

let microphoneStream: any = undefined;
const language = "en-US";
const SAMPLE_RATE = 44100;
let transcribeClient: any = undefined;
let recording = false;

const createMicrophoneStream = async () => {
  microphoneStream = new MicrophoneStream();
  microphoneStream.setStream(
    await window.navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    })
  );
};

const createTranscribeClient = () => {
  transcribeClient = new TranscribeStreamingClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: "AKIAVEO6T2ORFX4VOUV5",
      secretAccessKey: "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",
    },
  });
};

const encodePCMChunk = (chunk: any) => {
  const input = MicrophoneStream.toRaw(chunk);
  let offset = 0;
  const buffer = new ArrayBuffer(input.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < input.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, input[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return Buffer.from(buffer);
};

const getAudioStream = async function* () {
  for await (const chunk of microphoneStream) {
    if (chunk.length <= SAMPLE_RATE) {
      yield {
        AudioEvent: {
          AudioChunk: encodePCMChunk(chunk),
        },
      };
    }
  }
};

const startStreaming = async (language: any, callback: any) => {
  const command = new StartStreamTranscriptionCommand({
    LanguageCode: language,
    MediaEncoding: "pcm",
    MediaSampleRateHertz: SAMPLE_RATE,
    AudioStream: getAudioStream(),
  });
  const data = await transcribeClient.send(command);
  for await (const event of data.TranscriptResultStream) {
    const results = event.TranscriptEvent.Transcript.Results;
    if (results.length && !results[0]?.IsPartial) {
      const newTranscript = results[0].Alternatives[0].Transcript;
      console.log(newTranscript);
      callback(newTranscript + " ");
    }
  }
};

const startRecording = async (callback: any) => {
  if (microphoneStream || transcribeClient) {
    stopRecording();
  }
  createTranscribeClient();
  createMicrophoneStream();
  await startStreaming(language, callback);
};

const stopRecording = function () {
  if (microphoneStream) {
    microphoneStream.stop();
    microphoneStream.destroy();
    microphoneStream = undefined;
  }
};

const texts: { title: string; subTitle: string } = {
  title: "Find product information for your medication",
  subTitle:
    "Search with text, voice or by holding up your medication to your mobile, desktop or tablet camera.",
};

const InPageSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const imageInput: any = useRef(null);

  const convert = async (image: string) => {
    if (image) {
      const worker = await createWorker("eng");
      const ret = await worker.recognize(image);
      console.log(ret);

      const files = ret.data.lines.sort((a, b) => b.confidence - a.confidence);

      const text = files[0].text;
      router.push("/products/" + text);

      await worker.terminate();
    }
  };

  const handleMagnifyingGlassIcon = () =>
    console.log("MagnifyingGlassIcon touched");

  const handleCameraIcon = () => {
    console.log("CameraIcon touched");
    imageInput.current?.click();
  };
  const handleMicrophoneIcon = () => {
    console.log("MicrophoneIcon touched");
    if (recording) {
      console.log("stopped recording");
      recording = false;
      stopRecording();
    } else {
      console.log("started recording");
      recording = true;
      startRecording((textValue: string) => {
        textValue = textValue.replace(".", "");

        console.log("it catches the text as ", textValue);

        router.push("/products/" + textValue);
        stopRecording();
      });
    }
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearchWithUrl = (url: string) => {
    setSearch(url);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`products/${search}`);
  };

  return (
    <>
      <input
        className="w-0 h-0"
        type="file"
        hidden
        ref={imageInput}
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            console.log(e.target.files[0]);
            const imageUrl: string = URL.createObjectURL(e.target.files[0]);
            console.log(imageUrl);
            convert(imageUrl);
          }
        }}
      />
      <form
        onSubmit={handleSubmit}
        className="bg-[#313B72] max-w-[609px] h-[408px] rounded-[30px] shadow-sm p-10 text-white [&>*]:py-4 sm:flex flex-col items-center hidden"
      >
        <h2 className="font-bold text-[36px] leading-[56px]">{texts.title}</h2>
        <div className="relative">
          <MagnifyingGlassIcon
            onClick={handleMagnifyingGlassIcon}
            className="w-[36px] h-[36px] text-[#49454F] absolute left-[14px] bottom-10"
          />
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Enter medication or brand name"
            className="w-[562px] h-[84px] px-20 bg-white flex justify-center items-center rounded-[42px] text-[#49454F]"
          />
          <CameraIcon
            onClick={handleCameraIcon}
            className="w-[36px] h-[36px] text-[#49454F] absolute right-[80px] bottom-10 cursor-pointer"
          />
          <MicrophoneIcon
            onClick={handleMicrophoneIcon}
            className="w-[36px] h-[36px] text-[#49454F] absolute right-[30px] bottom-10"
          />
        </div>
        <p className="">{texts.subTitle}</p>
      </form>
    </>
  );
};

export default InPageSearch;
