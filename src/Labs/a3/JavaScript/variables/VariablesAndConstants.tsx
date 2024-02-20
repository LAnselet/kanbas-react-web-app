function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const const1 = functionScoped - blockScoped;

  return (
    <div>
      <h2>Variables and Constants</h2>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      const1 = {const1}
      <br />
    </div>
  );
}

export default VariablesAndConstants;
