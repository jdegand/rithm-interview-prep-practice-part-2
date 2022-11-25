function findHighestPriorityTodo(arr){
  const sorted = arr.sort((a, b) => b.priority - a.priority);
  return [sorted[0].task, sorted[0].priority]
}