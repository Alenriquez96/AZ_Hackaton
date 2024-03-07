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
import { Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";

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

const InPageSearch = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const imageInput: any = useRef(null);
  const t = useTranslations("home");

  const texts: { title: string; subTitle: string; placeHolder: string } = {
    title: t("searchComponent.title"),
    subTitle: t("searchComponent.subtitle"),
    placeHolder: t("searchComponent.placeHolder"),
  };

  //Image reader
  const convert = async (image: string) => {
    if (image) {
      const worker = await createWorker("eng");
      const ret = await worker.recognize(image);
      console.log(ret);

      const files = ret.data.lines.sort((a, b) => b.confidence - a.confidence);

      const text = files[0].text;
      router.push("/" + locale + "/products/" + text);

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

        router.push("/" + locale + "/products/" + textValue);
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
    router.push(`/${locale}/products/${search}`);
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
        className="bg-primary max-w-[609px] min-h-[408px] rounded-[30px] shadow-sm m-4 sm:p-10 py-10 px-5 text-white [&>*]:py-4 sm:flex flex-col items-center "
      >
        <h2 className="font-bold text-[36px] leading-[56px]">{texts.title}</h2>

        <Input
          type="search"
          startContent={
            <MagnifyingGlassIcon
              width={36}
              height={36}
              onClick={handleMagnifyingGlassIcon}
              className=" text-[#49454F] "
            />
          }
          radius="full"
          className="sm:w-[562px] h-[84px]"
          value={search}
          onChange={handleSearch}
          placeholder={texts.placeHolder}
          endContent={
            <div className="flex items-center [&>*]:mx-1">
              <CameraIcon
                width={36}
                height={36}
                onClick={handleCameraIcon}
                className=" text-[#49454F] cursor-pointer"
              />
              <MicrophoneIcon
                width={36}
                height={36}
                onClick={handleMicrophoneIcon}
                className=" text-[#49454F]  cursor-pointer"
              />
            </div>
          }
        />
        <p className="">{texts.subTitle}</p>
      </form>
    </>
  );
};

export default InPageSearch;
