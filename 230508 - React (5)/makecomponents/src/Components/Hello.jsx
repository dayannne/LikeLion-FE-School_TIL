function Hello(props) {
  const name = '라이캣';
  const someStyle = { backgroundColor: 'black', color: 'white' };
  return (
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {name} 2호!</h1>
      <div className="newClass" />
    </div>
  );
}
export default Hello; //밖에서 사용할 수 있도록 해줍니다!
