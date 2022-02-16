export default function Counter() {
  return (
    <div id="Counter">
      <div data-testid="tCounterNumber">0</div>
      <button type="button">Increment</button>
      <button type="button">Decrement</button>
      <button type="reset">Reset</button>
    </div>
  );
}
