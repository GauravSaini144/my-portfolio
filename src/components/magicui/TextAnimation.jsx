import { TextAnimate } from "./text-animate";
import { SparklesText } from "./sparkles-text";
export function TextAnimation({isSparkle=false, className, content}) {
  return (
    <>{isSparkle?
    <SparklesText>
    <TextAnimate animation="slideUp" by="word" className={className}>
      
  {/* {`Hello 👋 \nI'm Gaurav Saini`} */}
{content}
  
  
    </TextAnimate></SparklesText>:
    <TextAnimate animation="slideUp" by="word" className={className}>{content}</TextAnimate>
}</>);
}
