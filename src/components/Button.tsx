interface Props {
  text: string;
  handleClick: () => void;
}

export default function Button(props: Props) {
  function handleClick() {
    alert("si le diste click wooff");
  }
  return <button onClick={props.handleClick}>{props.text}</button>;
}
