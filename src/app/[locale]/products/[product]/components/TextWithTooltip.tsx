import { Tooltip } from "@nextui-org/react";

interface StyledTextProps {
  children: React.ReactNode;
  fontSize: number;
}

// This component is used to style the text
const StyledText = ({ children, fontSize }: StyledTextProps) => {
  return (
    <p
      className={`rounded-[8px] bg-[#E8E8E8]  leading-[${
        fontSize * 2
      }px] text-black my-5 p-5`}
    >
      {children}
    </p>
  );
};

// This component is used to add a tooltip when the keyword is found in the text at first instance.
const TextWithTooltip = ({ text, keywords, fontSize }: any) => {
  let resultText = text;
  let resultComponents = [];

  // Iterate over the keywords
  for (const { keyword, tooltip } of keywords) {
    // Find the index of the keyword in the text
    const index = resultText.indexOf(keyword);
    if (index !== -1) {
      // Divide the text into prefix, keyword and suffix
      const prefix = resultText.substring(0, index);
      const highlightedKeyword = resultText.substring(
        index,
        index + keyword.length
      );
      const suffix = resultText.substring(index + keyword.length);

      // Add the prefix to the result
      resultComponents.push(<span>{prefix}</span>);
      // Add the keyword with a tooltip to the result
      resultComponents.push(
        <Tooltip content={tooltip} key={keyword}>
          <span className="underline underline-offset-4 decoration-[#FC7853]">
            {highlightedKeyword}
          </span>
        </Tooltip>
      );
      // Update the result text to the suffix
      resultText = suffix;
    }
  }

  // Add the remaining suffix to the result
  resultComponents.push(<span>{resultText}</span>);

  return <StyledText fontSize={fontSize}>{resultComponents}</StyledText>;
};

export default TextWithTooltip;
