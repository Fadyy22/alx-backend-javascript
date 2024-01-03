export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  };
  return queue;
}
